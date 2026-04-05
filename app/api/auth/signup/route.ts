import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb, getConfig } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
    }

    const db = getDb();
    const config = getConfig();
    const trialDays = parseInt(config.trial_days ?? "7", 10);

    const existing = db.prepare(`SELECT id FROM users WHERE email = ?`).get(email.trim());
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    }

    const hash = bcrypt.hashSync(password, 10);
    const result = db.prepare(`
      INSERT INTO users (name, email, password_hash, trial_end)
      VALUES (?, ?, ?, datetime('now', ?))
    `).run(name.trim(), email.trim().toLowerCase(), hash, `+${trialDays} days`);

    // Queue welcome email (provider-agnostic — picked up when provider is wired)
    db.prepare(`
      INSERT INTO email_queue (user_id, template_name, scheduled_for)
      VALUES (?, 'welcome', datetime('now'))
    `).run(result.lastInsertRowid);

    // Queue nurture sequence (day 7 if not converted)
    db.prepare(`
      INSERT INTO email_queue (user_id, template_name, scheduled_for)
      VALUES (?, 'nurture_start', datetime('now', ?))
    `).run(result.lastInsertRowid, `+${trialDays} days`);

    return NextResponse.json({
      success: true,
      redirect: config.passion_app_url ?? "http://Badgirlstrengthclub.passion.io",
    });
  } catch (err) {
    console.error("[signup]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
