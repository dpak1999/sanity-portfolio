/** @format */
import { useState, useEffect } from "react";
import sanityClient from "../client";
import Loader from "./Loader";

const Project = () => {
  const [projects, setProjects] = useState(null);

  const getDataFromSanity = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      github,
      tags
    }`
    );

    if (data) setProjects(data);
  };

  useEffect(() => {
    getDataFromSanity();
  }, []);

  if (!projects) return <Loader />;

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projects &&
            projects.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished On</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Tags</strong>:{" "}
                    {project.tags.map((tag) => (
                      <span className="mr-1 border px-2 rounded-sm border-red-400">
                        <span className="text-center text-black font-semibold text-red-600">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </span>
                  {/* <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span> */}
                  <p className="text-lg text-gray-700 my-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View Deployed version{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>

                  <a
                    href={project.github}
                    alt={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl float-right"
                  >
                    View Source code{" "}
                    <span role="img" aria-label="right pointer">
                      💻
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
