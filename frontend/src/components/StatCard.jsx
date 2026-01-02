export default function StatCard({ title, value, icon, color = "text-white" }) {
  const safeValue = value === undefined || value === null ? 0 : value;

  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <h2 className={`text-2xl font-bold ${color}`}>{safeValue}</h2>
      </div>
      <div className="text-gray-500">{icon}</div>
    </div>
  );
}
