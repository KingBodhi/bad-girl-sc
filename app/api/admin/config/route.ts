import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const db = getDb();
  const rows = db.prepare(`SELECT key, value FROM site_config`).all() as { key: string; value: string }[];
  return NextResponse.json(Object.fromEntries(rows.map((r) => [r.key, r.value])));
}

export async function PATCH(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  try {
    const body = await req.json() as Record<string, string>;
    const db = getDb();
    const stmt = db.prepare(`INSERT INTO site_config (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value`);
    for (const [key, value] of Object.entries(body)) {
      stmt.run(key, String(value));
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[config/patch]", err);
    return NextResponse.json({ error: "Failed to update config." }, { status: 500 });
  }
}
