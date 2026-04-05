import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter") ?? "all"; // all | active | expired
  const search = searchParams.get("q") ?? "";

  const db = getDb();

  let where = "WHERE 1=1";
  const params: string[] = [];

  if (filter === "active") {
    where += " AND trial_end > datetime('now') AND is_active = 1";
  } else if (filter === "expired") {
    where += " AND trial_end <= datetime('now')";
  }

  if (search) {
    where += " AND (name LIKE ? OR email LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }

  const members = db.prepare(`
    SELECT id, name, email, trial_start, trial_end, is_active, created_at
    FROM users ${where}
    ORDER BY created_at DESC
    LIMIT 200
  `).all(...params);

  return NextResponse.json({ members });
}
