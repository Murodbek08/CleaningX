import { Fragment } from "react/jsx-runtime";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      <Footer />
    </Fragment>
  );
}

export default App;
