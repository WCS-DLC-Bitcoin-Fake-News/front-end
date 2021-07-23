import { FiBriefcase, FiLifeBuoy } from "react-icons/fi";
import { FaWrench } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="h-100 bg-navbarbg flex flex-col items-center justify-center">
        <h1 className="text-center	text-align: center ">About Us</h1>
        <p className="md:w-115 text-center	text-align: center">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
          molestiae te.
        </p>
      </div>
      <div className="md:w-full md:h-25 mt-6">
        <h2 className="text-center	text-align: center">
          This is fancy headline about us
        </h2>
        <p className="text-center	text-align: center">
          What we do what we can and how we work is described here
        </p>
      </div>
      <div className="md:w-full md:h-40 flex flex-row justify-around">
        <div>
          <div className="flex flex-col items-center">
            <FiBriefcase />
            <h3>Shipping communication</h3>
            <small className="text-center	text-align: center">
              At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
              iuvaret vulputate sed.
            </small>
            <a href="_blank">Discover</a>

          </div>
        </div>
        <div className="flex flex-col items-center">
          <FiLifeBuoy />
          <h3>Marketing</h3>
          <small className="text-center	text-align: center">
            At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed.
          </small>
          <a href="_blank">Discover</a>

        </div>
        <div className="flex flex-col items-center">
          <FaWrench />
          <h3>Logistic performance</h3>
          <small className="text-center	text-align: center">
            At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed.
          </small>
          <a href="_blank">Discover</a>
        </div>
      </div>
    </div>
  );
};
export default About;
