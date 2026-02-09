import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {posts.map(post => (
        <div key={post._id} className="bg-white shadow rounded-xl">
          <img
            src={post.image.url}
            alt={post.title}
            className="h-48 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.content.slice(0, 80)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}
