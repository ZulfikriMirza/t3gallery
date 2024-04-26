import { db } from "@vercel/postgres";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/db2ca121-cb1d-4b94-b160-bfee852d5423-1ta9k.jpg",
  "https://utfs.io/f/bacef649-5960-4a58-95dd-da712395c6f7-glm38c.jpg",
  "https://utfs.io/f/b0108c1e-fab7-44d7-8f14-90cb44d4a5c9-glm38b.jpg",
  "https://utfs.io/f/6ff6c14f-a6fa-47a9-8519-9adf2507c591-glm38e.jpg",
  "https://utfs.io/f/e3664709-7d23-4162-ad35-66f89969116a-glm38d.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className= "">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))
      }
      </div>
    </main>
  );
}
