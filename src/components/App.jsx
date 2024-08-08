import { useEffect, useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import UrlPreview from "./UrlPreview";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [url, setUrl] = useState(null); // agregue una variable de estado

  const [form, setForm] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  }); //objeto

  useEffect(() => {
    const localStorageForm = localStorage.getItem("form");

    if (localStorageForm !== null) {
      setForm(JSON.parse(localStorageForm));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Asignamos la url de la tarjeta a la variable de estado
        setUrl(data.cardURL);
      })
      .catch((error) => console.log(error));
  };

  const handleInput = async (event) => {
    const key = event.target.id;
    const value = event.target.value;
    const updatedForm = { ...form, [key]: value };
    setForm(updatedForm);
    console.log(updatedForm[key], value);
    localStorage.setItem("form", JSON.stringify(updatedForm));
  }; //evento general para todos los inputs

  const handleImage = (e) => {
    //fotografía
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        const updatedForm = { ...form, image: reader.result.toString() };
        setForm(updatedForm);
        localStorage.setItem("form", JSON.stringify(updatedForm));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleAuthorImg = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        const updatedForm = { ...form, photo: reader.result.toString() };
        setForm(updatedForm);
        localStorage.setItem("form", JSON.stringify(updatedForm));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="body">
      <Header />

      <Hero />
      <main className="main">
        <div className="card-column">
          <Preview src={form.image} />
          <Card form={form} authorImage={form.photo} />
          <UrlPreview url={url} />
        </div>
        <div>
          <Form
            form={form}
            handleInput={handleInput}
            handleImage={handleImage}
            handleSubmit={handleSubmit}
            handleAuthorImg={handleAuthorImg}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
