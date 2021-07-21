import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Layout = (props) => {
  return (
    <div className="bg-gray-400">
      <NavBar />
        {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
