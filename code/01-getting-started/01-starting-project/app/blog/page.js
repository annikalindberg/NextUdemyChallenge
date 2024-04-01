import Link from "next/link"

// go here : http://localhost:3000/blog

// go to each slug with http://localhost:3000/blog/post-1 or http://localhost:3000/blog/post-2

export default function BlogPage () {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>
        <Link href="/blog/post-1">
          Post 1
        </Link>
      </p>
        <p>
            <Link href="/blog/post-2">
            Post 2
            </Link>
        </p>
      
    </main>
  )
}
