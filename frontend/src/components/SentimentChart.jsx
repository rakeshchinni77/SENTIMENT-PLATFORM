import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function SentimentChart({ trendData }) {
  return (
    <div className="lg:col-span-2 bg-gray-800 p-4 rounded-xl border border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Sentiment Trend (Live)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} />
            <Legend />
            <Line type="monotone" dataKey="positive" stroke="#10B981" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="negative" stroke="#EF4444" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="neutral" stroke="#6B7280" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
