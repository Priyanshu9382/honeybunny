import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About_Us_Img from "../assets/Dish_image.jpg";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-60px)] bg-[#161616] flex flex-col items-center justify-center">
        <div className="w-5/6  bg-[#ffcd00] rounded-3xl mt-16 mb-32 md:min-h-[80vh]">
          <div className="md:flex md:w-full md:h-full">
            <div className="m-5 flex flex-col md:items-center md:justify-center md:h-[70vh]  gap-4 md:w-2/5">
              <h1 className="text-2xl font-bold text-center md:text-3xl">
                About Our Restaurant
              </h1>
              <p className="text-white font-medium text-center md:font-lg">
                Honey Bunny Restaurant offers a warm and inviting dining
                experience perfect for families, friends, and special occasions.
                Our globally inspired menu features flavorful, home-style dishes
                crafted with the freshest ingredients to ensure every meal is
                both delicious and healthy. With a cozy atmosphere and a focus
                on exceptional customer service, our friendly and knowledgeable
                staff are dedicated to making your visit memorable. Whether
                you're stopping by for a casual lunch or celebrating a special
                moment, Honey Bunny Restaurant is your go-to destination for
                great food and genuine hospitality.
              </p>
            </div>
            <div className="md:w-3/5 md:h-full">
              <img
                src={About_Us_Img}
                alt="Dish_Image"
                className="rounded-3xl h-[50vh] w-full md:h-[80vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
