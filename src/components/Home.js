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
        <h1 className="text-5xl font-bold text-blue-50 leading-none lg:leading-snug uppercase home-name cursive">
          Hola !! I am Deepak
          <br />
          <div className="text-center text-6xl cursor-pointer">
            <span className="px-9 py-0 hover:text-blue-500 hover:border-blue-500 border-2">
              Learn more about me
            </span>
          </div>
        </h1>
      </section>
    </main>
  );
};

export default Home;
