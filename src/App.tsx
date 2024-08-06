import Coments from "./components/Coments";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Header/Card";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
          <Card />
          </div>
          <div>
            <Coments />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
