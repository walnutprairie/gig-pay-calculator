'use client';
import { useState } from "react";

export default function Home() {
  const [earnings, setEarnings] = useState("");
  const [miles, setMiles] = useState("");
  const [minutes, setMinutes] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const e = parseFloat(earnings);
    const m = parseFloat(miles);
    const t = parseFloat(minutes);

    if (isNaN(e) || isNaN(m) || isNaN(t) || m === 0 || t === 0) {
      setResult("Please enter valid numbers.");
      return;
    }

    const gasCostPerMile = 0.30;
    const totalCost = m * gasCostPerMile;
    const netEarnings = e - totalCost;

    const epm = e / m;
    const eph = (e / t) * 60;
    const mph = (m / t) * 60;
    const netEpm = netEarnings / m;
    const netEph = (netEarnings / t) * 60;

    const verdict = epm >= 2.0 ? "✅ Worth it" : "❌ Skip it";

    setResult({ epm, eph, mph, netEpm, netEph, totalCost, netEarnings, verdict });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Gig Pay Calculator</h2>
      <input
        type="number"
        placeholder="Earnings ($)"
        value={earnings}
        onChange={(e) => setEarnings(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Miles"
        value={miles}
        onChange={(e) => setMiles(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Time (minutes)"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Calculate
      </button>

      {result && typeof result === "string" ? (
        <p className="text-red-500 mt-4">{result}</p>
      ) : result ? (
        <div className="mt-4 space-y-2">
          <p><strong>Gross EPM:</strong> ${result.epm.toFixed(2)}</p>
          <p><strong>Gross EPH:</strong> ${result.eph.toFixed(2)}</p>
          <p><strong>MPH:</strong> {result.mph.toFixed(2)}</p>
          <p><strong>Vehicle Cost:</strong> ${result.totalCost.toFixed(2)}</p>
          <p><strong>Net Earnings:</strong> ${result.netEarnings.toFixed(2)}</p>
          <p><strong>Net EPM:</strong> ${result.netEpm.toFixed(2)}</p>
          <p><strong>Net EPH:</strong> ${result.netEph.toFixed(2)}</p>
          <p className="text-lg font-bold">{result.verdict}</p>
        </div>
      ) : null}
    </div>
  );
}