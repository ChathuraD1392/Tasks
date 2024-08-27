import Footer from "../footer/Footer";
import AddressBar from "../header/AddressBar";
import NavBar from "../header/NavBar";

const Main = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <AddressBar />
        <div className="flex flex-1">
          <main className="flex-1 p-4 bg-white">
            <h1 className="text-heading">Hellooooo</h1>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
