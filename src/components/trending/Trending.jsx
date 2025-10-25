import React from "react";
import "./Trending.css";

export default function Trending() {
  const row1 = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { id: 2, title: "Levitating", artist: "Dua Lipa", duration: "3:23" },
    { id: 3, title: "Save Your Tears", artist: "The Weeknd", duration: "3:36" },
    { id: 4, title: "Good 4 U", artist: "Olivia Rodrigo", duration: "2:58" },
    {
      id: 5,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      duration: "2:21",
    },
  ];

  const row2 = [
    { id: 6, title: "Heat Waves", artist: "Glass Animals", duration: "3:59" },
    { id: 7, title: "As It Was", artist: "Harry Styles", duration: "2:47" },
    { id: 8, title: "Anti-Hero", artist: "Taylor Swift", duration: "3:21" },
    { id: 9, title: "Flowers", artist: "Miley Cyrus", duration: "3:20" },
    {
      id: 10,
      title: "Unholy",
      artist: "Sam Smith, Kim Petras",
      duration: "2:36",
    },
  ];

  return (
    <section className="trending" aria-label="Trending playlists">
      <div className="banner">
        <div className="banner-text">
          <h3>Trending Playlists</h3>
          <p>Fresh mixes and editor picks — updated weekly.</p>
        </div>
      </div>

      <div className="inner">
        <div className="scroll-row scroll-left">
          <div className="scroll-content">
            {[...row1, ...row1].map((c, idx) => (
              <article key={`${c.id}-${idx}`} className="card">
                <img
                  className="thumb"
                  src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=60&sig=${c.id}`}
                  alt={`${c.title} album art`}
                />
                <div className="meta">
                  <h4>{c.title}</h4>
                  <p className="artist">{c.artist}</p>
                </div>
                <div className="actions">
                  <span className="duration">{c.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="scroll-row scroll-right">
          <div className="scroll-content">
            {[...row2, ...row2].map((c, idx) => (
              <article key={`${c.id}-${idx}`} className="card">
                <img
                  className="thumb"
                  src={`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=60&sig=${c.id}`}
                  alt={`${c.title} album art`}
                />
                <div className="meta">
                  <h4>{c.title}</h4>
                  <p className="artist">{c.artist}</p>
                </div>
                <div className="actions">
                  <span className="duration">{c.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
