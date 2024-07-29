import {useState} from 'react';
import "../scss/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Preview from "./Preview";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

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
  
    const handleImage = (event) => {
      setImage(event.target.value);
    };
  
    const handlePhoto = (event) => {
      setPhoto(event.target.value);
    };
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
           handleImage={handleImage}
           handlePhoto={handlePhoto}
          />
        </div>
      </main>

      <Footer />
      </div>
  );
}

export default App;
