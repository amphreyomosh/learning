import { client } from '@/lib/sanity'

export async function getServerSideProps() {
  const query = `*[_type == "post"]{title, body}`;
  const posts = await client.fetch(query);
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
