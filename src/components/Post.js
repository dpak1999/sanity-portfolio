/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import Loader from "./Loader";

const Post = () => {
  const [postData, setPostData] = useState(null);

  const getDataFromSanity = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "post"]{
      title,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
    );

    if (data) setPostData(data);
  };

  useEffect(() => {
    getDataFromSanity();
  }, []);

  if (!postData) return <Loader />;

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blogs</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={`/blog/${post.slug.current}`} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-blue-800 rounded bg-opacity-90">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
