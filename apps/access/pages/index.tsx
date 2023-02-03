// pages/index.tsx
import Head from "next/head";
import { NextPage } from "next/types";
import { useState, useEffect } from "react";
import { Posts } from "./api/post";

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<Posts[] | null>(null);
  useEffect(() => {
    fetch(`/api/post`)
      .then((result) => result.json())
      .then(setPosts);
  }, []);
  if (!posts) return <p>Loading...</p>;

  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="An awesome blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog</h1>
        <div style={{ height: "50px" }}></div>
        {posts.map((post: any) => {
          return (
            <a href={`/post/${post.id}`} key={post.id}>
              <div>
                <p>{post.title}</p>
              </div>
            </a>
          );
        })}
      </main>
    </div>
  );
};

export default HomePage;
