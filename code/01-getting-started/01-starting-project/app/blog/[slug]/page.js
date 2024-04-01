export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Post 1</h1>
      <p>This is a blog postpage you picked using slug! </p>
      <p>Slug: /{params.slug} eller vad urlet till den här sidan slutar med </p>
    </main>
  );
}
