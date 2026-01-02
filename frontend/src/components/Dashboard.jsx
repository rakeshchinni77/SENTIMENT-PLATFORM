import React, { useEffect, useState } from "react";
import { MessageSquare, TrendingUp, AlertTriangle, Activity } from "lucide-react";

import { API_URL, WS_URL } from "../services/api";
import StatCard from "./StatCard";
import SentimentChart from "./SentimentChart";
import DistributionChart from "./DistributionChart";
import LiveFeed from "./LiveFeed";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({ total_posts: 0, distribution: {} });
  const [status, setStatus] = useState("disconnected");
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/posts?limit=20`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []));

    fetch(`${API_URL}/api/sentiment/distribution`)
      .then((res) => res.json())
      .then((data) =>
        setStats({ total_posts: data.total || 0, distribution: data.distribution || {} })
      );
  }, []);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => setStatus("connected");
    ws.onclose = () => setStatus("disconnected");

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "new_post") {
        const newPost = message.data;
        setPosts((prev) => [newPost, ...prev].slice(0, 50));

        setStats((prev) => {
          const label = newPost.sentiment.sentiment_label;
          return {
            total_posts: prev.total_posts + 1,
            distribution: {
              ...prev.distribution,
              [label]: (prev.distribution[label] || 0) + 1,
            },
          };
        });
      }

      if (message.type === "metrics_update") {
        const timeStr = new Date(message.data.timestamp).toLocaleTimeString();
        setTrendData((prev) =>
          [...prev, { time: timeStr, ...message.data }].slice(-20)
        );
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Sentiment Command Center</h1>
          <p className="text-gray-400">Real-time Brand Monitoring</p>
        </div>
        <div className={`px-4 py-2 rounded-full font-bold ${
          status === "connected" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
        }`}>
          ● {status.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Posts" value={stats.total_posts || 0} icon={<MessageSquare />} />
        <StatCard title="Positive" value={stats.distribution.positive || 0} icon={<TrendingUp />} color="text-green-400" />
        <StatCard title="Negative" value={stats.distribution.negative || 0} icon={<AlertTriangle />} color="text-red-400" />
        <StatCard title="Neutral" value={stats.distribution.neutral || 0} icon={<Activity />} color="text-gray-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <SentimentChart trendData={trendData} />
        <DistributionChart stats={stats} />
      </div>

      <LiveFeed posts={posts} />
    </div>
  );
}
