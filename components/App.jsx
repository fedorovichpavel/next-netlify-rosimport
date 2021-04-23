import { Footer } from "./Footer";
import { Header } from "./Header";

const App = ({ children, navLight }) => {
  return (
    <>
      <Header navLight={navLight} />
      <>{children}</>
      <Footer />
    </>
  );
};

export default App;
