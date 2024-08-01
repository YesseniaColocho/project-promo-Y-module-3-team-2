import {useState} from 'react';
import "../scss/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";
// import Links  from './Links';

function App() {
    const [name, setName] = useState('');
    const [slogan, setSlogan] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [repo, setRepo] = useState('');
    const [demo, setDemo] =useState('');
    const [description, setDescription] = useState('');
    const [autor, setAutor] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [photo, setPhoto] = useState('');
  
    const handleName = (event) => {
      setName(event.target.value);
    };
  
    const handleSlogan = (event) => {
      setSlogan(event.target.value);
    };
  
    const handleTechnologies = (event) => {
      setTechnologies(event.target.value);
    };
  
    const handleRepo = (event) => {
      setRepo(event.target.value);
    };
    const handleDemo = (event) => {
      setDemo(event.target.value);
    };
  
    const handleDescription = (event) => {
      setDescription(event.target.value);
    };
  
    const handleAutor = (event) => {
      setAutor(event.target.value);
    };
  
    const handleJob = (event) => {
      setJob(event.target.value);
    };

    const handleGitHub = (event) => {
      setGitHub(event.target.value);
    }
  
    /* const handleImage = (event) => {
      // setImage(event.target.value);
      setImage(event.currentTarget.files[0])
    };
    if (event.currentTarget.files.length > 0) {
      const myFile = event.currentTarget.files[0];

      // añado un evento load al manejador de ficheros
      // por qué añado un evento, pues porque esto es una acción asíncrona, imaginemos que el fichero pesa 5 Gb, el navegador puede tardar unos cuantos segundos en cargar y procesar el fichero, por eso le decimos "navegador, cuando termines de cargar el fichero me ejecutas el método  image"
      fr.addEventListener('load', getImage);

      // le digo al manejador de ficheros que maneje, que cargue el fichero
      fr.readAsDataURL(myFile);
    }
    // si la usuaria no ha elegido ningún fichero y ha puslado en cerrar la ventana de nuestro ordenador, no hago nada
 
  
    const handlePhoto = (event) => {
      setPhoto(event.target.value);
    };

// const handleIcon = (event) => {
//       setLinks(inputValue.target.value)
// }
 */

  return (
    <div className="body">
    
      <Header />

          <Hero />
      <main className="main">
        <div className="card-column">
          <Preview />
          <Card 
          name={name}
          slogan={slogan}
          technologies={technologies}
          repo={repo}
          demo={demo}
          description={description}
          autor={autor}
          job={job}
          image={image}
          photo={photo}
          />
        </div>
        <div>
          <Form 
           name={name}
           slogan={slogan}
           technologies={technologies}
           repo={repo}
           demo={demo}
           description={description}
           autor={autor}
           job={job}
           image={image}
           photo={photo}
 
           handleName={handleName}
           handleSlogan={handleSlogan}
           handleTechnologies={handleTechnologies}
           handleRepo={handleRepo}
           handleDemo={handleDemo}
           handleDescription={handleDescription}
           handleAutor={handleAutor}
           handleJob={handleJob}
           //handleImage={handleImage}
           //handlePhoto={handlePhoto}
          />
        </div>
      </main>
      {/* <Links  inputLink={handleIcon}/> */}
      <Footer />
      </div>
  );
}

export default App;
