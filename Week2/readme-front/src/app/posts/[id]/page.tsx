import Link from "next/link";
import { posts } from "@/data/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find(
    (p) => p.id === Number(id)
  );

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-16
        px-6 text-center">
        <h1 className="text-base md:text-2xl font-bold mb-4">
          글을 찾을 수 없습니다
        </h1>
        <Link href="/posts"
          className="text-blue-500 underline">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link href="/posts"
        className="text-gray-500
          hover:text-black mb-6 inline-block">
        ← 목록으로
      </Link>
      <h1 className="text-lg md:text-4xl font-bold mb-4">
        {post.title}
      </h1>
      <p className="text-gray-500 mb-8">
        {post.desc}
      </p>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  );
}