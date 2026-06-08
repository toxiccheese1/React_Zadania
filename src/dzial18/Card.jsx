import React, { useState } from "react";

export default function Card() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={`card ${expanded ? "expanded" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="header">
          <span className="icon">📘</span>
          <h2>React Card</h2>
        </div>

        <p>
          Krótki opis komponentu.
        </p>

        <div className="details">
          <p>
            To jest dodatkowa treść widoczna po rozwinięciu karty.
            Możesz tutaj umieścić więcej informacji.
          </p>
        </div>
      </div>

      <style>{`
        .card {
          width: 300px;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          background-color: #f0f0f0;
          max-height: 120px;
          transition: max-height 0.4s ease,
                      background-color 0.4s ease;
        }

        .card.expanded {
          max-height: 300px;
          background-color: #dbeafe;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon {
          font-size: 28px;
        }

        .details {
          margin-top: 12px;
        }
      `}</style>
    </>
  );
}