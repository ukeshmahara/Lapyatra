import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const Home = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      autoplay: 2500,
      hoverpause: true,
      perView: 1,
    }).mount();
  }, []);

  return (
    <div>
      <div className="glide mt-4">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src="https://via.placeholder.com/1200x400?text=Slide+1" alt="Slide 1" />
            </li>
            <li className="glide__slide">
              <img src="https://via.placeholder.com/1200x400?text=Slide+2" alt="Slide 2" />
            </li>
            <li className="glide__slide">
              <img src="https://via.placeholder.com/1200x400?text=Slide+3" alt="Slide 3" />
            </li>
          </ul>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to LapYatra</h1>
        <p className="text-gray-700">Scroll down to explore our content!</p>
        <div className="h-96 mt-10 bg-gray-200 rounded-xl flex justify-center items-center">
          More content here...
        </div>
      </div>
    </div>
  );
};

export default Home;