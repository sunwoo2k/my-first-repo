import Link from "next/link";
import { posts } from "@/data/posts";

export default function PostsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-lg md:text-4xl font-bold mb-8">
        목록
      </h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block border rounded-lg p-6
              hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-sm md:text-xl font-semibold
              mb-2">
              {post.title}
            </h2>
            <p className="text-gray-500">
              {post.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}