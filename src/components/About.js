/** @format */

import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import aboutBg from "../about-bg.jpg";
import Loader from "./Loader";

const About = () => {
  const [author, setAuthor] = useState(null);
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"] {
      name,
      bio,
      "authorImage" : image.asset -> url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  return (
    <main className="relative">
      <img src={aboutBg} alt="about background" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        {!author ? (
          <Loader />
        ) : (
          <section className="bg-blue-800 bg-opacity-90 rounded-lg shadow-2xl lg:flex p-20">
            <img
              src={urlFor(author.authorImage).url()}
              alt={author.name}
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            />
            <div className="text-lg flex flex-col justify-center">
              <h1 className="cursive text-6xl text-blue-300 mb-4">
                Hey there I am{" "}
                <span className="text-blue-100">{author.name}</span>
              </h1>
              <div className="prose lg:prose-xl text-white">
                <BlockContent
                  blocks={author.bio}
                  projectId="1linjdu4"
                  dataset="production"
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default About;
