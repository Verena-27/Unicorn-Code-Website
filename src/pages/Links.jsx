import React, { useEffect, useState } from "react";

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "");
  if (lines.length === 0) return [];

  function parseLine(line) {
    const fields = [];
    let cur = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++; // skip escaped quote
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }
      if (ch === "," && !inQuotes) {
        fields.push(cur);
        cur = "";
        continue;
      }
      cur += ch;
    }
    fields.push(cur);
    return fields;
  }

  const headers = parseLine(lines[0]).map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const parts = parseLine(line);
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = parts[i] ? parts[i].trim() : "";
    });
    return obj;
  });
}

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.72rem",
  fontWeight: 700,
  lineHeight: 1,
  padding: "0.35rem 0.6rem",
  borderRadius: "999px",
  background: "rgba(0,0,0,0.06)",
  color: "#222",
  whiteSpace: "nowrap",
};

export default function Links() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [targetFilter, setTargetFilter] = useState("");
  const [eventFilter, setEventFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  useEffect(() => {
    fetch("/resources.csv")
      .then((r) => r.text())
      .then((csvText) => setItems(parseCSV(csvText)));
  }, []);

  const splitMulti = (s) =>
    (s || "")
      .split(/[;,]/)
      .map((x) => x.trim())
      .filter(Boolean);

  const allTags = Array.from(
    new Set(items.flatMap((it) => splitMulti(it.tags))),
  )
    .map((t) => t.trim())
    .filter(Boolean);

  const allTargets = Array.from(
    new Set(items.flatMap((it) => splitMulti(it.target_group))),
  ).filter(Boolean);

  const allEvents = Array.from(
    new Set(items.flatMap((it) => splitMulti(it.event_type))),
  ).filter(Boolean);

  const allLocations = Array.from(
    new Set(items.flatMap((it) => splitMulti(it.location))),
  ).filter(Boolean);

  const allGenders = Array.from(
    new Set(items.flatMap((it) => splitMulti(it.gender))),
  ).filter(Boolean);

  const filtered = items.filter((it) => {
    const matchesQuery =
      !query ||
      Object.values(it).some((v) =>
        v ? v.toLowerCase().includes(query.toLowerCase()) : false,
      );
    const matchesTag = !tagFilter || splitMulti(it.tags).includes(tagFilter);
    const matchesTarget =
      !targetFilter || splitMulti(it.target_group).includes(targetFilter);
    const matchesEvent =
      !eventFilter || splitMulti(it.event_type).includes(eventFilter);
    const matchesLocation =
      !locationFilter || splitMulti(it.location).includes(locationFilter);
    const matchesGender =
      !genderFilter || splitMulti(it.gender).includes(genderFilter);
    return (
      matchesQuery &&
      matchesTag &&
      matchesTarget &&
      matchesEvent &&
      matchesLocation &&
      matchesGender
    );
  });

  return (
    <div className="main">
      <h2>Links & Ressourcen</h2>
      <p style={{ color: "#fff", marginTop: 6 }}>
        Hier findest du Anlaufstellen, Veranstaltungen und Online-Ressourcen —
        filterbar nach Zielgruppe, Gender, Art und Ort.
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <input
          placeholder="Suche..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "6px", width: "40%", marginRight: 12 }}
        />
        <br />
        <br />

        <select
          value={targetFilter}
          onChange={(e) => setTargetFilter(e.target.value)}
          style={{ marginRight: 8 }}
        >
          <option value="">Alle Zielgruppen</option>
          {allTargets.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={eventFilter}
          onChange={(e) => setEventFilter(e.target.value)}
          style={{ marginRight: 8 }}
        >
          <option value="">Alle Veranstaltungsarten</option>
          {allEvents.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          style={{ marginRight: 8 }}
        >
          <option value="">All options</option>
          {allGenders.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">Alle Orte</option>
          {allLocations.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setTagFilter(tagFilter === t ? "" : t)}
            style={{
              ...badgeStyle,
              marginRight: 8,
              marginBottom: 8,
              border: tagFilter === t ? "2px solid darkmagenta" : "none",
              background:
                tagFilter === t
                  ? "rgba(139,0,139,0.08)"
                  : badgeStyle.background,
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="file-list" style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((it, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <a
                href={it.url}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 600 }}
              >
                {it.name}
              </a>
              <div style={{ fontSize: "0.95rem", color: "#fff", marginTop: 6 }}>
                {it.description}
              </div>
              <div style={{ marginTop: 8, color: "#fff", fontSize: "0.9rem" }}>
                <div style={{ marginBottom: 4 }}>
                  <strong>Zielgruppe:</strong> {it.target_group}
                </div>
                <div style={{ marginBottom: 4 }}>
                  <strong>Gender:</strong> {it.gender}
                </div>
                <div style={{ marginBottom: 4 }}>
                  <strong>Art:</strong> {it.event_type}
                </div>
                <div style={{ marginBottom: 4 }}>
                  <strong>Ort:</strong> {it.location}
                </div>
                {it.address && (
                  <div style={{ marginBottom: 4 }}>
                    <strong>Adresse:</strong> {it.address}
                  </div>
                )}
                {it.meeting && (
                  <div style={{ marginBottom: 4 }}>
                    <strong>Treffen:</strong> {it.meeting}
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {splitMulti(it.tags).map((tg) => (
                <span
                  key={tg}
                  style={{
                    ...badgeStyle,
                    background: "rgba(0,0,0,0.04)",
                    fontSize: "0.75rem",
                  }}
                >
                  {tg}
                </span>
              ))}
              {it.contact && (
                <div style={{ fontSize: "0.85rem", color: "#444" }}>
                  {it.contact.includes("@") ? (
                    <a href={`mailto:${it.contact}`}>{it.contact}</a>
                  ) : it.contact.startsWith("http") ? (
                    <a href={it.contact} target="_blank" rel="noreferrer">
                      Kontakt
                    </a>
                  ) : (
                    <span>{it.contact}</span>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
