import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/db";
import { signAdminToken, ADMIN_COOKIE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required." }, { status: 400 });
    }

    const db = getDb();
    const admin = db.prepare(`SELECT id, email, password_hash, role FROM admin_users WHERE email = ?`)
      .get(email.trim().toLowerCase()) as { id: number; email: string; password_hash: string; role: string } | undefined;

    if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const token = signAdminToken({ adminId: admin.id, email: admin.email, role: admin.role });

    const res = NextResponse.json({ success: true });
    res.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (err) {
    console.error("[admin/auth]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
