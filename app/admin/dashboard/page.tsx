"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Stats = {
  total: number; active: number; expired: number;
  expiringSoon: number; today: number; emailPending: number;
};

type Config = Record<string, string>;

function StatCard({ label, value, accent }: { label: string; value: number | string; accent?: boolean }) {
  return (
    <div className="p-6" style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}>
      <p className="text-3xl font-black mb-1"
        style={{ fontFamily: "var(--font-display)", color: accent ? "var(--crimson)" : "#fff" }}>
        {value}
      </p>
      <p className="text-xs uppercase tracking-widest"
        style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-display)" }}>
        {label}
      </p>
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [config, setConfig] = useState<Config>({});
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/dashboard").then(r => r.ok ? r.json() : Promise.reject()).then(setStats).catch(() => router.push("/admin"));
    fetch("/api/admin/config").then(r => r.json()).then(setConfig);
  }, [router]);

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  }

  async function saveConfig(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/config", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    setSaveMsg(res.ok ? "Saved." : "Failed.");
    setSaving(false);
    setTimeout(() => setSaveMsg(""), 2500);
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--near-black)", color: "#fff" }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: "var(--border)" }}>
        <Image src="/images/bgsc-logo.png" alt="BGSC" width={120} height={40} className="w-24 h-auto" />
        <nav className="flex items-center gap-6">
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--crimson)", fontFamily: "var(--font-display)" }}>Dashboard</span>
          <Link href="/admin/members" className="text-xs uppercase tracking-widest hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-display)" }}>Members</Link>
          <button onClick={logout} className="text-xs uppercase tracking-widest hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-display)" }}>Sign Out</button>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">

        {/* Stats */}
        <h2 className="text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-display)" }}>Overview</h2>
        {stats ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
            <StatCard label="Total Signups" value={stats.total} />
            <StatCard label="Active Trials" value={stats.active} accent />
            <StatCard label="Expired" value={stats.expired} />
            <StatCard label="Expiring in 48h" value={stats.expiringSoon} accent={stats.expiringSoon > 0} />
            <StatCard label="Joined Today" value={stats.today} />
            <StatCard label="Emails Queued" value={stats.emailPending} />
          </div>
        ) : (
          <div className="h-32 flex items-center justify-center" style={{ color: "rgba(255,255,255,0.3)" }}>
            Loading...
          </div>
        )}

        {/* Config editor */}
        <h2 className="text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-display)" }}>Site Config</h2>
        <form onSubmit={saveConfig} className="space-y-5 max-w-xl">

          {[
            { key: "passion_app_url", label: "Passion App URL" },
            { key: "trial_days", label: "Trial Duration (days)" },
          ].map(({ key, label }) => (
            <div key={key}>
              <label className="block text-xs uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-display)" }}>
                {label}
              </label>
              <input
                value={config[key] ?? ""}
                onChange={e => setConfig(c => ({ ...c, [key]: e.target.value }))}
                className="w-full px-4 py-3 text-sm bg-transparent border outline-none"
                style={{ borderColor: "var(--border)", color: "#fff", fontFamily: "var(--font-body)" }}
              />
            </div>
          ))}

          <div className="flex items-center gap-4 pt-2">
            <button type="submit" disabled={saving}
              className="px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ background: "var(--crimson)", color: "#fff", fontFamily: "var(--font-display)" }}>
              {saving ? "Saving..." : "Save Config"}
            </button>
            {saveMsg && <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>{saveMsg}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
