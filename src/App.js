import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
const img = require("./img/img.jpg")


function App() {
  return (
   <>
      <Navbar/>
      <Header image={img} date={new Date().getFullYear().toString()}/>
      <Footer/>
   </>
  );
}

export default App;
