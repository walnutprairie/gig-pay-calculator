import { useState } from "react";

export default function GigPayCalculator() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-rose-200 text-rose-900 p-6 flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-rose-600">💖 Gig Pay Calculator</h2>
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Earnings ($)"
            value={earnings}
            onChange={(e) => setEarnings(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/90 placeholder-rose-400 text-rose-700 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="number"
            placeholder="Miles"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/90 placeholder-rose-400 text-rose-700 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="number"
            placeholder="Time (minutes)"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/90 placeholder-rose-400 text-rose-700 border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <button
            onClick={calculate}
            className="w-full bg-rose-400 hover:bg-rose-500 transition rounded-xl py-3 font-semibold text-white text-lg shadow-md"
          >
            💅 Calculate
          </button>
        </div>

        {result && typeof result === "string" ? (
          <p className="text-rose-600 mt-4 text-center">{result}</p>
        ) : result ? (
          <div className="mt-6 bg-white/80 p-4 rounded-xl space-y-2 text-sm text-rose-800">
            <p><strong>Gross EPM:</strong> ${result.epm.toFixed(2)}</p>
            <p><strong>Gross EPH:</strong> ${result.eph.toFixed(2)}</p>
            <p><strong>MPH:</strong> {result.mph.toFixed(2)}</p>
            <p><strong>Vehicle Cost:</strong> ${result.totalCost.toFixed(2)}</p>
            <p><strong>Net Earnings:</strong> ${result.netEarnings.toFixed(2)}</p>
            <p><strong>Net EPM:</strong> ${result.netEpm.toFixed(2)}</p>
            <p><strong>Net EPH:</strong> ${result.netEph.toFixed(2)}</p>
            <p className="text-xl font-bold mt-2 text-center">{result.verdict}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
