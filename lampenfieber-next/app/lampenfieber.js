import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#FFFCF7", white: "#FFFFFF", sand: "#F5F0E5", sandDark: "#E5DFD0",
  ink: "#191714", inkSoft: "#524D42", inkMuted: "#9A9385",
  flame: "#D4542B", flameSoft: "#F0C4B0", flameBg: "#FDF0EA", flameDeep: "#A83D1C",
  gold: "#C49A2E", goldBg: "#FBF4E0",
  green: "#2E8047", greenBg: "#EAF5ED",
  red: "#B53535", redBg: "#FDECEC",
  blue: "#2E5FAA", blueBg: "#EBF0FA",
  border: "#E5DFD0", borderLight: "#EEEAD9",
};
const display = "'Syne', 'Arial Black', sans-serif";
const body = "'Outfit', system-ui, sans-serif";

const INDUSTRIES = [
  "Yoga-Studios", "Produktionsfirmen", "Theater", "Fotografen", "Filmemacher",
  "Bäckereien", "Architekturbüros", "Tattoo-Studios", "Weinhandlungen", "Blumenläden",
  "Tanzschulen", "Keramik-Werkstätten", "Buchhandlungen", "Restaurants", "Friseursalons",
  "Brauereien", "Galerien", "Musikschulen", "Coworking Spaces", "Physiotherapeuten",
  "Fahrradläden", "Modeboutiquen", "Escape Rooms", "Kochschulen", "Surfschulen",
];

function Ticker() {
  const doubled = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "16px 0", borderTop: `1px solid ${C.borderLight}`, borderBottom: `1px solid ${C.borderLight}`, background: C.white }}>
      <div style={{ display: "inline-block", animation: "ticker 40s linear infinite" }}>
        {doubled.map((ind, i) => (
          <span key={i} style={{ display: "inline-block", padding: "6px 20px", margin: "0 6px", borderRadius: 20, border: `1px solid ${C.border}`, fontSize: 13, fontWeight: 500, fontFamily: body, color: C.inkSoft, background: i % 3 === 0 ? C.flameBg : i % 3 === 1 ? C.goldBg : C.greenBg }}>
            {ind}
          </span>
        ))}
      </div>
    </div>
  );
}

const Badge = ({ children, bg, color }) => (
  <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, background: bg, color, letterSpacing: "0.03em" }}>{children}</span>
);

const Btn = ({ children, primary, onClick, disabled, full }) => (
  <button onClick={onClick} disabled={disabled}
    style={{ padding: primary ? "15px 32px" : "11px 22px", border: primary ? "none" : `1.5px solid ${C.border}`, borderRadius: 32, fontSize: primary ? 15 : 13, fontWeight: 700, fontFamily: body, cursor: disabled ? "not-allowed" : "pointer",
      background: disabled ? C.sandDark : primary ? C.flame : C.white, color: disabled ? C.inkMuted : primary ? "#fff" : C.inkSoft,
      width: full ? "100%" : "auto", transition: "all 0.15s", letterSpacing: "-0.01em" }}>{children}</button>
);

const Sect = ({ children, bg, id }) => (
  <section id={id} style={{ padding: "80px 24px", background: bg || "transparent" }}>
    <div style={{ maxWidth: 980, margin: "0 auto" }}>{children}</div>
  </section>
);

const Label = ({ children }) => (
  <div style={{ fontFamily: display, fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: C.flame, marginBottom: 12 }}>{children}</div>
);

const CHANNELS = [
  { id: "instagram", label: "Instagram", icon: "◎", color: "#E1306C" },
  { id: "linkedin", label: "LinkedIn", icon: "in", color: "#0A66C2" },
  { id: "facebook", label: "Facebook", icon: "f", color: "#1877F2" },
  { id: "tiktok", label: "TikTok", icon: "♪", color: "#010101" },
];

// ═══════════════════════════════════════════════════════════════════════════
// LANDING PAGE
// ═══════════════════════════════════════════════════════════════════════════
function Landing({ onStart }) {
  return (
    <div style={{ background: C.bg }}>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", position: "sticky", top: 0, zIndex: 50, background: C.bg + "ee", backdropFilter: "blur(12px)" }}>
        <div style={{ fontFamily: display, fontSize: 22, fontWeight: 800, color: C.flame, letterSpacing: "-0.02em" }}>Lampenfieber</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "8px 16px", border: "none", background: "transparent", fontSize: 13, fontFamily: body, fontWeight: 500, color: C.inkSoft, cursor: "pointer" }}>Pricing</button>
          <button onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "8px 16px", border: "none", background: "transparent", fontSize: 13, fontFamily: body, fontWeight: 500, color: C.inkSoft, cursor: "pointer" }}>Features</button>
          <Btn primary onClick={onStart}>Loslegen</Btn>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -140, right: -100, width: 440, height: 440, borderRadius: "50%", background: C.flameBg, opacity: 0.4, filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 320, height: 320, borderRadius: "50%", background: C.goldBg, opacity: 0.4, filter: "blur(40px)" }} />
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <Badge bg={C.flameBg} color={C.flame}>Beta — jetzt kostenlos testen</Badge>
          <h1 style={{ fontFamily: display, fontSize: 60, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 20, marginBottom: 20, color: C.ink }}>
            Dein Content<br />hat Auftritt.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: C.inkSoft, maxWidth: 520, margin: "0 auto 36px" }}>
            Ein Event beschreiben. KI analysiert deinen Stil. Alle Kanäle bespielt — automatisch, zeitgestaffelt, in deinem Ton.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn primary onClick={onStart}>Kostenlos starten →</Btn>
            <Btn onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}>So funktioniert's</Btn>
          </div>
          <p style={{ fontSize: 12, color: C.inkMuted, marginTop: 14 }}>Keine Kreditkarte · 14 Tage kostenlos · Jederzeit kündbar</p>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Problem → Solution */}
      <Sect bg={C.white}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <Label>Das alte Spiel</Label>
            <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>
              Jedes Event. Fünf Kanäle. Von vorn.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.inkSoft }}>
              Instagram-Caption, LinkedIn-Post, Website-Text, Newsletter, Pressemitteilung — alles unterschiedlicher Ton, andere Länge, anderes Timing. Jedes Mal manuell. Oder es bleibt einfach liegen.
            </p>
          </div>
          <div style={{ background: C.bg, borderRadius: 20, padding: 28, border: `1.5px solid ${C.border}` }}>
            <Label>Die Premiere</Label>
            <h3 style={{ fontFamily: display, fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Du beschreibst. Lampenfieber liefert.</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: C.inkSoft }}>Die KI kennt deinen Stil, weiß was dein Publikum will, und erstellt den kompletten Content — für jeden Kanal, jeden Zeitpunkt, in deinem Ton.</p>
          </div>
        </div>
      </Sect>

      {/* How it works */}
      <Sect id="how">
        <Label>In drei Akten</Label>
        <h2 style={{ fontFamily: display, fontSize: 36, fontWeight: 800, marginBottom: 48, letterSpacing: "-0.03em" }}>So einfach, es fühlt sich illegal an.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {[
            { n: "Akt I", title: "Stil lernen", desc: "Kopiere deine Posts rein. Die KI röntgt jeden einzelnen — Ton, Stärken, Schwächen, Muster. Du bekommst eine ehrliche Analyse.", bg: C.flameBg, ac: C.flame },
            { n: "Akt II", title: "Event anlegen", desc: "Workshop, Premiere, Saisonstart — egal was. Titel, Datum, drei Sätze. Kanäle wählen. Fertig.", bg: C.goldBg, ac: C.gold },
            { n: "Akt III", title: "Vorhang auf", desc: "Lampenfieber generiert 9–20 Posts. Zeitgestaffelt: Ankündigung, Countdown, Event-Tag. Jeder in deinem Stil, kanalgerecht.", bg: C.greenBg, ac: C.green },
          ].map((s, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 18, padding: "28px 24px", border: `1.5px solid ${C.borderLight}`, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              <div style={{ fontFamily: display, fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: s.ac, marginBottom: 12 }}>{s.n}</div>
              <h3 style={{ fontFamily: display, fontSize: 20, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.7, color: C.inkSoft }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Sect>

      {/* Features */}
      <Sect bg={C.white}>
        <Label>Was drin steckt</Label>
        <h2 style={{ fontFamily: display, fontSize: 36, fontWeight: 800, marginBottom: 40, letterSpacing: "-0.03em" }}>Kein Scheduling-Tool.<br />Ein Content-Gehirn.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {[
            { title: "Content-Röntgen", desc: "Jeder Post bekommt einen Score. Top-Performer und Flops identifiziert. Muster erkannt.", badge: "Analyse", bg: C.flameBg },
            { title: "Event → Content-Baum", desc: "Ein Event erzeugt automatisch 12–20 Posts: alle Kanäle × 3 Zeitpunkte.", badge: "Automation", bg: C.goldBg },
            { title: "Deine Stil-DNA", desc: "Die KI kennt deinen Ton. Neuer Content klingt wie du, nicht wie eine Maschine.", badge: "KI", bg: C.greenBg },
            { title: "Lernschleife", desc: "Jeder Post macht den nächsten besser. Performance-Daten fließen zurück.", badge: "Optimierung", bg: C.blueBg },
            { title: "Mehrsprachig", desc: "DE, EN, FR — kein Übersetzen, sondern echtes Schreiben in jeder Sprache.", badge: "Global", bg: C.flameBg },
            { title: "Kanalgerecht", desc: "Instagram ≠ LinkedIn ≠ Pressemitteilung. Lampenfieber versteht die Unterschiede.", badge: "Multi-Kanal", bg: C.goldBg },
          ].map((f, i) => (
            <div key={i} style={{ background: C.bg, borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.borderLight}`, transition: "border 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.flame}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.borderLight}>
              <Badge bg={f.bg} color={C.inkSoft}>{f.badge}</Badge>
              <h3 style={{ fontFamily: display, fontSize: 16, fontWeight: 700, marginTop: 10, marginBottom: 5, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: C.inkSoft }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </Sect>

      {/* Comparison */}
      <Sect>
        <Label>Ehrlicher Vergleich</Label>
        <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 800, marginBottom: 28, letterSpacing: "-0.02em" }}>Buffer postet. Hootsuite monitored.<br /><span style={{ color: C.flame }}>Lampenfieber denkt.</span></h2>
        <div style={{ background: C.white, borderRadius: 16, overflow: "hidden", border: `1.5px solid ${C.borderLight}` }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: C.sand }}>
                <th style={{ padding: "14px 20px", textAlign: "left", fontSize: 11, fontWeight: 700, fontFamily: display, letterSpacing: "0.08em", color: C.inkMuted }}></th>
                <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 800, fontFamily: display, color: C.flame, fontSize: 12 }}>Lampenfieber</th>
                <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 500, color: C.inkMuted, fontSize: 12 }}>Buffer</th>
                <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 500, color: C.inkMuted, fontSize: 12 }}>Hootsuite</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Analysiert deinen Stil", "●", "—", "—"],
                ["Event → Content-Baum", "●", "—", "—"],
                ["Lernt aus Performance", "●", "—", "◐"],
                ["Mehrsprachig generieren", "●", "—", "—"],
                ["Content klingt wie du", "●", "—", "—"],
                ["Post-Scheduling", "bald", "●", "●"],
                ["Social Listening", "—", "—", "●"],
                ["Preis ab", "29€", "72€", "99€"],
              ].map(([f, l, b, h], i) => (
                <tr key={i} style={{ borderTop: `1px solid ${C.borderLight}` }}>
                  <td style={{ padding: "11px 20px", fontWeight: 500 }}>{f}</td>
                  {[l, b, h].map((v, j) => (
                    <td key={j} style={{ padding: "11px 16px", textAlign: "center",
                      color: v === "●" ? (j === 0 ? C.flame : C.green) : v === "◐" ? C.gold : v === "bald" ? C.blue : C.sandDark,
                      fontSize: v.includes("€") ? 13 : v === "bald" ? 11 : 16,
                      fontWeight: v.includes("€") ? 700 : 400,
                      fontStyle: v === "bald" ? "italic" : "normal",
                      fontFamily: v.includes("€") ? display : body }}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 11, color: C.inkMuted, marginTop: 10, textAlign: "center" }}>● Ja · ◐ Teilweise · — Nein</p>
      </Sect>

      {/* Pricing */}
      <Sect bg={C.white} id="pricing">
        <Label>Pricing</Label>
        <h2 style={{ fontFamily: display, fontSize: 36, fontWeight: 800, marginBottom: 6, letterSpacing: "-0.03em" }}>Günstiger als eine einzige Übersetzung.</h2>
        <p style={{ fontSize: 15, color: C.inkSoft, marginBottom: 40 }}>Monatlich kündbar. Keine versteckten Kosten.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {[
            { name: "Solo", price: "29", sub: "Für Freelancer und Solopreneure", features: ["1 Zusatzsprache", "50 Content-Pieces", "3 Kanäle", "Stil-Analyse", "E-Mail-Support"], pop: false },
            { name: "Team", price: "79", sub: "Für kleine Unternehmen", features: ["3 Sprachen", "200 Content-Pieces", "Alle Kanäle", "Tiefenanalyse + Learnings", "Glossar", "Priority Support"], pop: true },
            { name: "Business", price: "199", sub: "Für wachsende Unternehmen", features: ["Unbegrenzte Sprachen", "Unbegrenzte Pieces", "API-Zugang", "5 Team-Accounts", "Social-Media-Anbindung", "Freigabe-Workflows"], pop: false },
          ].map((t, i) => (
            <div key={i} style={{ background: t.pop ? C.flameBg : C.bg, borderRadius: 20, padding: "28px 24px", border: `1.5px solid ${t.pop ? C.flame : C.borderLight}`, position: "relative", display: "flex", flexDirection: "column" }}>
              {t.pop && <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)" }}><Badge bg={C.flame} color="#fff">Beliebt</Badge></div>}
              <h3 style={{ fontFamily: display, fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em" }}>{t.name}</h3>
              <p style={{ fontSize: 12, color: C.inkMuted, marginBottom: 12 }}>{t.sub}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 18 }}>
                <span style={{ fontFamily: display, fontSize: 44, fontWeight: 800, color: C.ink }}>{t.price}€</span>
                <span style={{ fontSize: 13, color: C.inkMuted }}>/Monat</span>
              </div>
              <div style={{ flex: 1, marginBottom: 20 }}>
                {t.features.map((f, j) => (
                  <div key={j} style={{ fontSize: 13, lineHeight: 2.1, color: C.inkSoft }}>
                    <span style={{ color: C.green, marginRight: 6 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <Btn primary={t.pop} full onClick={onStart}>{t.pop ? "Jetzt loslegen" : "Kostenlos testen"}</Btn>
            </div>
          ))}
        </div>
      </Sect>

      {/* Final CTA */}
      <Sect>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: display, fontSize: 40, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Bereit für deinen <span style={{ color: C.flame }}>Auftritt</span>?
          </h2>
          <p style={{ fontSize: 16, color: C.inkSoft, marginBottom: 28, lineHeight: 1.7 }}>14 Tage kostenlos. Keine Kreditkarte. Kein Risiko. Nur Content, der nach dir klingt.</p>
          <Btn primary onClick={onStart}>Kostenlos starten →</Btn>
        </div>
      </Sect>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${C.borderLight}`, padding: "28px 32px", background: C.white }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: display, fontSize: 18, fontWeight: 800, color: C.flame }}>Lampenfieber</span>
            <span style={{ fontSize: 11, color: C.inkMuted }}>Dein Content hat Auftritt.</span>
          </div>
          <div style={{ display: "flex", gap: 20, fontSize: 12, color: C.inkMuted }}>
            <a href="#" style={{ color: C.inkMuted, textDecoration: "none" }}>Impressum</a>
            <a href="#" style={{ color: C.inkMuted, textDecoration: "none" }}>Datenschutz</a>
            <a href="#" style={{ color: C.inkMuted, textDecoration: "none" }}>Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════════════════
function AppView({ onBack }) {
  const [page, setPage] = useState("home");
  const [ch, setCh] = useState("instagram");
  const [paste, setPaste] = useState("");
  const [profiles, setProfiles] = useState({});
  const [busy, setBusy] = useState(false);
  const [pct, setPct] = useState(0);
  const [tab, setTab] = useState("overview");
  const [evT, setEvT] = useState("");
  const [evD, setEvD] = useState("");
  const [evDesc, setEvDesc] = useState("");
  const [evCh, setEvCh] = useState(["instagram", "linkedin"]);
  const [genBusy, setGenBusy] = useState(false);
  const [genPct, setGenPct] = useState(0);
  const [gen, setGen] = useState(null);
  const [exp, setExp] = useState(null);

  const p = profiles[ch]; const a = p?.analysis; const ok = a && !a.error;
  const connected = Object.values(profiles).filter(p => p?.connected).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderBottom: `1px solid ${C.borderLight}`, background: C.white, position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontFamily: display, fontSize: 20, fontWeight: 800, color: C.flame }} onClick={() => setPage("home")}>Lampenfieber</span>
          <div style={{ width: 1, height: 18, background: C.borderLight }} />
          {[["home", "Home"], ["analyze", "Analyse"], ["create", "Event →"]].map(([k, l]) => (
            <button key={k} onClick={() => setPage(k)}
              style={{ padding: "6px 14px", border: "none", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: body, cursor: "pointer",
                background: page === k ? C.flame : "transparent", color: page === k ? "#fff" : C.inkMuted }}>{l}</button>
          ))}
        </div>
        <button onClick={onBack} style={{ fontSize: 12, color: C.inkMuted, background: "none", border: "none", cursor: "pointer", fontFamily: body }}>← Website</button>
      </nav>

      <div style={{ maxWidth: 740, margin: "0 auto", padding: "28px 20px" }}>
        {page === "home" && (
          <div>
            <h1 style={{ fontFamily: display, fontSize: 30, fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>Willkommen bei <span style={{ color: C.flame }}>Lampenfieber</span></h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
              {[
                { label: "Kanäle", value: connected, bg: connected > 0 ? C.greenBg : C.sand },
                { label: "Posts analysiert", value: Object.values(profiles).reduce((s, p) => s + (p?.n || 0), 0), bg: C.flameBg },
                { label: "Events", value: gen ? 1 : 0, bg: C.goldBg },
              ].map((s, i) => (
                <div key={i} style={{ background: s.bg, borderRadius: 14, padding: 18, border: `1px solid ${C.borderLight}` }}>
                  <div style={{ fontFamily: display, fontSize: 28, fontWeight: 800 }}>{s.value}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.inkMuted, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: C.white, borderRadius: 18, padding: "36px 28px", border: `1px solid ${C.borderLight}`, textAlign: "center" }}>
              <h2 style={{ fontFamily: display, fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{connected === 0 ? "Starte mit der Analyse" : "Bereit für Content"}</h2>
              <p style={{ fontSize: 14, color: C.inkSoft, marginBottom: 20, maxWidth: 380, margin: "0 auto 20px" }}>
                {connected === 0 ? "Kopiere deine Posts. Lampenfieber lernt deinen Stil." : "Dein Stil ist analysiert. Erstelle ein Event."}
              </p>
              <Btn primary onClick={() => setPage(connected === 0 ? "analyze" : "create")}>{connected === 0 ? "Kanal analysieren →" : "Event erstellen →"}</Btn>
            </div>
          </div>
        )}

        {page === "analyze" && (
          <div>
            <h1 style={{ fontFamily: display, fontSize: 28, fontWeight: 800, marginBottom: 4, letterSpacing: "-0.02em" }}>Content-<span style={{ color: C.flame }}>Röntgen</span></h1>
            <p style={{ fontSize: 14, color: C.inkSoft, marginBottom: 16 }}>Kopiere deine Posts. Jeder wird einzeln bewertet.</p>
            <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
              {CHANNELS.map(c => (
                <button key={c.id} onClick={() => { setCh(c.id); setTab("overview"); }}
                  style={{ padding: "9px 16px", borderRadius: 24, border: `1.5px solid ${ch === c.id ? c.color : C.border}`, background: ch === c.id ? c.color + "12" : C.white, color: ch === c.id ? c.color : C.inkMuted, fontSize: 12.5, fontWeight: 600, fontFamily: body, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                  {c.icon} {c.label} {profiles[c.id]?.connected && <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />}
                </button>
              ))}
            </div>

            {ok ? (
              <div>
                <div style={{ display: "flex", gap: 0, background: C.sand, borderRadius: 10, padding: 3, marginBottom: 14 }}>
                  {[["overview", "Übersicht"], ["patterns", "Muster"], ["actions", "Empfehlungen"]].map(([k, l]) => (
                    <button key={k} onClick={() => setTab(k)} style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, fontFamily: body, cursor: "pointer", background: tab === k ? C.white : "transparent", color: tab === k ? C.ink : C.inkMuted }}>{l}</button>
                  ))}
                </div>
                {tab === "overview" && <>
                  <div style={{ background: C.flameBg, borderRadius: 14, padding: 18, border: `1px solid ${C.flameSoft}`, marginBottom: 14 }}>
                    <div style={{ fontFamily: display, fontSize: 11, fontWeight: 800, color: C.flame, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>✦ Content-DNA</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, fontStyle: "italic" }}>{a.content_dna}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <div style={{ background: C.greenBg, borderRadius: 12, padding: 14, borderLeft: `3px solid ${C.green}` }}>
                      <div style={{ fontSize: 10, fontWeight: 800, fontFamily: display, color: C.green, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Top</div>
                      <p style={{ fontSize: 12, fontStyle: "italic", lineHeight: 1.5, marginBottom: 4 }}>"{a.top_performers?.best_post_excerpt}"</p>
                      <p style={{ fontSize: 11, color: C.inkSoft }}>{a.top_performers?.why_it_works}</p>
                    </div>
                    <div style={{ background: C.redBg, borderRadius: 12, padding: 14, borderLeft: `3px solid ${C.red}` }}>
                      <div style={{ fontSize: 10, fontWeight: 800, fontFamily: display, color: C.red, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Flop</div>
                      <p style={{ fontSize: 12, fontStyle: "italic", lineHeight: 1.5, marginBottom: 4 }}>"{a.underperformers?.weakest_post_excerpt}"</p>
                      <p style={{ fontSize: 11, color: C.inkSoft }}>{a.underperformers?.why_it_fails}</p>
                    </div>
                  </div>
                </>}
                {tab === "patterns" && (a.patterns ? [["Was funktioniert", a.patterns.what_works, C.green, C.greenBg], ["Was nicht funktioniert", a.patterns.what_doesnt, C.red, C.redBg], ["Lücken", a.patterns.content_gaps, C.blue, C.blueBg]].map(([t, items, c, bg], i) => (
                  <div key={i} style={{ background: bg, borderRadius: 12, padding: "14px 18px", marginBottom: 8, borderLeft: `3px solid ${c}` }}>
                    <div style={{ fontSize: 10, fontWeight: 800, fontFamily: display, color: c, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{t}</div>
                    {(items || []).map((p, j) => <div key={j} style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 3 }}>{p}</div>)}
                  </div>
                )) : null)}
                {tab === "actions" && (a.recommendations || []).map((r, i) => (
                  <div key={i} style={{ background: C.white, borderRadius: 14, padding: "16px 18px", border: `1px solid ${C.borderLight}`, marginBottom: 8 }}>
                    <Badge bg={r.priority === "hoch" ? C.flameBg : C.goldBg} color={r.priority === "hoch" ? C.flame : C.gold}>{r.priority}</Badge>
                    <h4 style={{ fontFamily: display, fontSize: 14, fontWeight: 700, marginTop: 8, marginBottom: 4 }}>{r.action}</h4>
                    <p style={{ fontSize: 12, color: C.inkSoft, marginBottom: 6 }}>{r.expected_impact}</p>
                    <div style={{ background: C.sand, borderRadius: 8, padding: "8px 12px", fontSize: 12, fontStyle: "italic", lineHeight: 1.5 }}>"{r.example}"</div>
                  </div>
                ))}
                <button onClick={() => { setProfiles(p => { const n = {...p}; delete n[ch]; return n; }); }} style={{ marginTop: 12, fontSize: 11, color: C.inkMuted, background: "none", border: `1px solid ${C.border}`, borderRadius: 8, padding: "5px 12px", cursor: "pointer", fontFamily: body }}>Neu analysieren</button>
              </div>
            ) : (
              <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.borderLight}` }}>
                {busy ? (
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <div style={{ fontFamily: display, fontSize: 38, fontWeight: 800, color: C.flame }}>{pct}%</div>
                    <div style={{ width: 180, height: 4, background: C.sand, borderRadius: 2, margin: "10px auto", overflow: "hidden" }}><div style={{ height: "100%", background: C.flame, borderRadius: 2, transition: "width 0.5s", width: `${pct}%` }} /></div>
                    <p style={{ fontSize: 13, color: C.inkSoft }}>Röntge Posts...</p>
                  </div>
                ) : (
                  <>
                    <p style={{ fontSize: 13, color: C.inkSoft, marginBottom: 10, textAlign: "center", lineHeight: 1.6 }}>5–10 Posts einfügen, am besten mit Likes/Views in Klammern.</p>
                    <textarea value={paste} onChange={e => setPaste(e.target.value)} rows={8}
                      placeholder={"Post 1... (142 Likes, 2.340 Views)\n\nPost 2... (38 Likes)\n\nPost 3..."}
                      style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.border}`, borderRadius: 12, fontSize: 13.5, fontFamily: body, background: C.bg, color: C.ink, outline: "none", resize: "vertical", lineHeight: 1.7, boxSizing: "border-box", marginBottom: 8 }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 12, color: C.inkMuted }}>{paste.split("\n\n").filter(p => p.trim()).length} Posts</span>
                      <Btn primary disabled={!paste.trim()} onClick={async () => {
                        setBusy(true); setPct(20);
                        try {
                          const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 4000,
                              messages: [{ role: "user", content: `Analysiere diese ${ch}-Posts. NUR JSON, keine Backticks.\n\n${paste}\n\n{"profile_summary":{"tone":"3-5 Wörter","primary_language":"Sprache","avg_post_length":150,"posting_frequency":"geschätzt"},"posts_analyzed":[{"excerpt":"60 Zeichen...","score":7,"strengths":"gut","weakness":"fehlt"}],"top_performers":{"best_post_excerpt":"Excerpt","why_it_works":"Warum"},"underperformers":{"weakest_post_excerpt":"Excerpt","why_it_fails":"Warum"},"key_metrics":{"storytelling_score":6,"authenticity_score":7,"consistency_score":5},"patterns":{"what_works":["1"],"what_doesnt":["1"],"content_gaps":["1"]},"recommendations":[{"priority":"hoch","action":"Was","expected_impact":"Impact","example":"Post"}],"content_dna":"2-3 Sätze"}` }] }) });
                          setPct(80); const d = await r.json(); const txt = d.content?.filter(c => c.type === "text").map(c => c.text).join("") || "";
                          let parsed; try { parsed = JSON.parse(txt.replace(/```json|```/g, "").trim()); } catch { parsed = { error: true }; }
                          setPct(100);
                          if (!parsed.error) { setProfiles(p => ({ ...p, [ch]: { connected: true, n: paste.split("\n\n").filter(p => p.trim()).length, analysis: parsed } })); setPaste(""); }
                        } catch (e) { console.error(e); }
                        setBusy(false);
                      }}>Durchleuchten</Btn>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {page === "create" && !gen && (
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h1 style={{ fontFamily: display, fontSize: 28, fontWeight: 800, marginBottom: 18, letterSpacing: "-0.02em" }}>Event <span style={{ color: C.flame }}>→</span> Content</h1>
            {genBusy ? (
              <div style={{ textAlign: "center", padding: "50px 0" }}>
                <div style={{ fontFamily: display, fontSize: 44, fontWeight: 800, color: C.flame }}>{genPct}%</div>
                <div style={{ width: 200, height: 4, background: C.sand, borderRadius: 2, margin: "10px auto", overflow: "hidden" }}><div style={{ height: "100%", background: C.flame, borderRadius: 2, transition: "width 0.3s", width: `${genPct}%` }} /></div>
              </div>
            ) : (
              <>
                {[["Titel", evT, setEvT, "text", "z.B. Saisonstart Yoga-Studio"], ["Datum", evD, setEvD, "date", ""]].map(([l, v, s, t, ph], i) => (
                  <div key={i} style={{ marginBottom: 12 }}>
                    <label style={{ fontSize: 11, fontWeight: 800, fontFamily: display, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkMuted, display: "block", marginBottom: 5 }}>{l}</label>
                    <input type={t} value={v} onChange={e => s(e.target.value)} placeholder={ph}
                      style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 14, fontFamily: body, background: C.white, color: C.ink, outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, fontFamily: display, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkMuted, display: "block", marginBottom: 5 }}>Beschreibung</label>
                  <textarea value={evDesc} onChange={e => setEvDesc(e.target.value)} rows={3} placeholder="Was, wer, warum?"
                    style={{ width: "100%", padding: "12px 14px", border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 14, fontFamily: body, background: C.white, color: C.ink, outline: "none", resize: "vertical", lineHeight: 1.6, boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 11, fontWeight: 800, fontFamily: display, letterSpacing: "0.1em", textTransform: "uppercase", color: C.inkMuted, display: "block", marginBottom: 6 }}>Kanäle</label>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {CHANNELS.map(c => {
                      const on = evCh.includes(c.id); const has = profiles[c.id]?.connected;
                      return <button key={c.id} onClick={() => setEvCh(p => on ? p.filter(x => x !== c.id) : [...p, c.id])}
                        style={{ padding: "8px 14px", borderRadius: 20, border: `1.5px solid ${on ? c.color : C.border}`, background: on ? c.color + "12" : C.white, color: on ? c.color : C.inkMuted, fontSize: 12, fontWeight: 600, fontFamily: body, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                        {c.icon} {c.label} {has && <span style={{ fontSize: 8, color: C.green }}>✦</span>}
                      </button>;
                    })}
                  </div>
                </div>
                <Btn primary full disabled={!evT || !evDesc} onClick={async () => {
                  setGenBusy(true); setGenPct(0);
                  const ctx = Object.entries(profiles).filter(([_, p]) => p?.connected).map(([c, p]) => `${c}: "${p.analysis?.content_dna}"`).join("\n");
                  const contents = {}; let n = 0; const tot = evCh.length * 3;
                  for (const c of evCh) {
                    for (const [k, l] of [["announce", "Ankündigung"], ["countdown", "Countdown"], ["today", "Event-Tag"]]) {
                      try {
                        const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 800,
                            messages: [{ role: "user", content: `${c}-Post. NUR Text.\nEVENT: ${evT} | ${evD} | ${evDesc}\nZEIT: ${l}\n${ctx ? `STIL:\n${ctx}` : ""}` }] }) });
                        const d = await r.json(); contents[`${c}_${k}`] = d.content?.filter(x => x.type === "text").map(x => x.text).join("") || "[Fehler]";
                      } catch { contents[`${c}_${k}`] = "[Fehler]"; }
                      n++; setGenPct(Math.round((n / tot) * 100));
                    }
                  }
                  setGen(contents); setGenBusy(false);
                }}>Content generieren →</Btn>
              </>
            )}
          </div>
        )}

        {page === "create" && gen && (
          <div>
            <button onClick={() => setGen(null)} style={{ border: "none", background: "none", color: C.inkMuted, fontSize: 12, cursor: "pointer", fontFamily: body, padding: 0, marginBottom: 10 }}>← Neues Event</button>
            <h1 style={{ fontFamily: display, fontSize: 24, fontWeight: 800, marginBottom: 14 }}>{evT}</h1>
            {evCh.map(cId => {
              const c = CHANNELS.find(x => x.id === cId);
              return <div key={cId} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, color: c?.color }}>{c?.icon}</span>
                  <span style={{ fontFamily: display, fontWeight: 700, fontSize: 13 }}>{c?.label}</span>
                  {profiles[cId]?.connected && <Badge bg={C.greenBg} color={C.green}>✦ Stil</Badge>}
                </div>
                {["announce", "countdown", "today"].map(s => {
                  const k = `${cId}_${s}`; const t = gen[k]; if (!t) return null;
                  const l = s === "announce" ? "Ankündigung" : s === "countdown" ? "Countdown" : "Event-Tag";
                  const o = exp === k;
                  return <div key={k} onClick={() => setExp(o ? null : k)}
                    style={{ background: C.white, borderRadius: 10, padding: "11px 14px", border: `1px solid ${o ? C.flame : C.borderLight}`, marginBottom: 4, cursor: "pointer" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Badge bg={s === "today" ? C.flameBg : C.sand} color={s === "today" ? C.flame : C.inkMuted}>{l}</Badge>
                      {!o && <span style={{ fontSize: 12, color: C.inkMuted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 360 }}>{t.slice(0, 65)}...</span>}
                    </div>
                    {o && <>
                      <p style={{ fontSize: 13.5, lineHeight: 1.7, whiteSpace: "pre-wrap", marginTop: 8, marginBottom: 8 }}>{t}</p>
                      <button onClick={e => { e.stopPropagation(); navigator.clipboard.writeText(t); }}
                        style={{ padding: "5px 12px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.white, fontSize: 11, fontFamily: body, cursor: "pointer", fontWeight: 600 }}>Kopieren</button>
                    </>}
                  </div>;
                })}
              </div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("landing");
  const [m, setM] = useState(false);
  useEffect(() => { setTimeout(() => setM(true), 60); }, []);

  return (
    <div style={{ fontFamily: body, color: C.ink, opacity: m ? 1 : 0, transition: "opacity 0.4s" }}>
      
      {page === "landing" && <Landing onStart={() => setPage("app")} />}
      {page === "app" && <AppView onBack={() => setPage("landing")} />}
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        input:focus, textarea:focus { border-color: ${C.flame} !important; box-shadow: 0 0 0 3px ${C.flameBg}; }
        ::selection { background: ${C.flameSoft}; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a:hover { color: ${C.flame} !important; }
        html { scroll-behavior: smooth; }
        button:hover { opacity: 0.92; }
      `}</style>
    </div>
  );
}
