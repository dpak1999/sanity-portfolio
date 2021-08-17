/** @format */
import bgImg from "../bg2.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={bgImg}
        alt="bg"
        className="absolute object-cover w-full h-full bg-opacity-5"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-5xl font-bold text-white leading-none lg:leading-snug uppercase home-name cursive">
          Hola !! I am Deepak
        </h1>
      </section>
    </main>
  );
};

export default Home;
