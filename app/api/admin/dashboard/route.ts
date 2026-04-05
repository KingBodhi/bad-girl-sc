import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const db = getDb();

  const total      = (db.prepare(`SELECT COUNT(*) as n FROM users`).get() as { n: number }).n;
  const active     = (db.prepare(`SELECT COUNT(*) as n FROM users WHERE trial_end > datetime('now') AND is_active = 1`).get() as { n: number }).n;
  const expired    = (db.prepare(`SELECT COUNT(*) as n FROM users WHERE trial_end <= datetime('now')`).get() as { n: number }).n;
  const expiringSoon = (db.prepare(`SELECT COUNT(*) as n FROM users WHERE trial_end > datetime('now') AND trial_end <= datetime('now', '+2 days')`).get() as { n: number }).n;
  const today      = (db.prepare(`SELECT COUNT(*) as n FROM users WHERE date(created_at) = date('now')`).get() as { n: number }).n;
  const emailPending = (db.prepare(`SELECT COUNT(*) as n FROM email_queue WHERE status = 'pending'`).get() as { n: number }).n;

  return NextResponse.json({ total, active, expired, expiringSoon, today, emailPending });
}
