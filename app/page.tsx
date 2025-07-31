import Hero from "@/components/hero";
import Main from "@/components/main";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold uppercase">Our Rooms</h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            quisquam.
          </p>
        </div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
