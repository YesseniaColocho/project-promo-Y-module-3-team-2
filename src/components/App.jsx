
import "../scss/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
    
      <Header />

          <Hero />
      <main className="main">
        <div className="card-column">
          <Preview />
          <Card />
        </div>
        <div>
          <Form />
        </div>
      </main>

      <Footer />
      </div>
  );
}

export default App;
