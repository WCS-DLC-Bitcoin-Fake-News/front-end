import AuthForm from "../components/AuthForm/AuthForm";
import logo from "../assets/debunker_logo_title_300.png";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center h-screen">
        <div className="lg:w-2/4 w-full h-full">
          <div className="w-full h-full bg-no-repeat bg-cover bg-top flex flex-col justify-center">
            <h1 className="text-black font-Cabin-400 font-bold mx-auto">
              Debunk Fake News!
            </h1>
          </div>
        </div>
        <div className="lg:w-2/4 nm-inset-gray-300 py-4">
          <div className="mx-6 mt-44">
            <div>
              <img className="object-scale-down" src={logo} alt="logo" />
            </div>
            <div className="m-auto">
              <AuthForm type="signIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
