import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DistributionChart({ stats }) {
  const pieData = [
    { name: "Positive", value: stats.distribution?.positive || 0, color: "#10B981" },
    { name: "Negative", value: stats.distribution?.negative || 0, color: "#EF4444" },
    { name: "Neutral", value: stats.distribution?.neutral || 0, color: "#6B7280" },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
            <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
