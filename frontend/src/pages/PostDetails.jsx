import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import { getPost, deletePost } from "../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.content}</p>

      <div className="flex gap-4">
        <Link
          to={`/edit/${post.id}`}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Edit
        </Link>
        <button
          onClick={async () => {
            await deletePost(post.id);
            navigate("/");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
