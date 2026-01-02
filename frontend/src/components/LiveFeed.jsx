export default function LiveFeed({ posts }) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold">Live Feed</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {posts.map((post, i) => {
          const label =
            post.sentiment?.label ||
            post.sentiment?.sentiment_label ||
            "neutral";

          return (
            <div key={i} className="p-4 border-b border-gray-700 hover:bg-gray-750">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-blue-400">
                  @{post.author || "Anonymous"}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full uppercase ${
                    label === "positive"
                      ? "bg-green-900 text-green-300"
                      : label === "negative"
                      ? "bg-red-900 text-red-300"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {label}
                </span>
              </div>
              <p className="text-gray-300">{post.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
