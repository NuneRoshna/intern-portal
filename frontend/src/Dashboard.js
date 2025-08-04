import React, { useState, useEffect } from "react";

export default function Dashboard({ internName }) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Dashboard: fetch started...");
    fetch("/api/intern")
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((json) => {
        console.log("Dashboard: fetched data =", json);
        setData(json);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container"><p>Loading…</p></div>;
  if (!data)    return <div className="container"><p>Error loading data</p></div>;

  return (
    <div className="container">
      <h1>Welcome, {internName || data.internName}!</h1>
      <div className="card">
        <p><strong>Name:</strong> {data.internName}</p>
        <p><strong>Referral Code:</strong> {data.referralCode}</p>
        <p><strong>Total Raised:</strong> {data.totalRaised}</p>
      </div>
      <div className="card">
        <h2>Rewards / Unlockables</h2>
        <ul>
          <li>Reward 1 — 🏆</li>
          <li>Reward 2 — 🎖️</li>
          <li>More coming soon…</li>
        </ul>
      </div>
    </div>
  );
}
