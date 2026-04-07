import uc_var from "../filecontent/Privacyfreundliche_Periodenapps.pdf";

const fileDocuments = [
  {
    id: 1,
    title: "Privacyfreundliche Periodenapps Vortragsfolien",
    event: "Workshop",
    date: "März 2026",
    fileUrl: uc_var,
    downloadName: "Privacyfreundliche_Periodenapps.pdf",
  },
];

export default function Files() {
  return (
    <div className="main">
      <h2>Materialien & Downloads</h2>

      <ul className="file-list" style={{ listStyle: "none", padding: 0 }}>
        {fileDocuments.map((file) => (
          <li
            key={file.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{file.title}</div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                {file.event} — {file.date}
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {/* Download link: uses download attribute so browser suggests the filename */}
              <a
                href={file.fileUrl}
                download={file.downloadName}
                title="Herunterladen"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  background: "darkmagenta",
                  color: "#fff",
                  borderRadius: 4,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
