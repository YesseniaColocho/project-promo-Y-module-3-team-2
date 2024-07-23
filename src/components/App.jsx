import logo from '../images/adalab.png';
import '../scss/App.scss';

function App() {
  return (
    <>
      <header className="header">
        <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
          <img className="header__companyLogo" src={logo} alt="Logo proyectos molones" />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img className="logoSponsor" src={logo} alt="Logo Adalab" />
      </header>
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a className="button--link" href="./">Ver proyectos</a>
      </section>

      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">
              Full stack Developer
            </p>
            <h3 className="card__name">Emmelie Bjôrklund</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">Elegant Workspace</h3>
            <p className="card__slogan">Diseños Exclusivos</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>

              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online">
                Web link
              </a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
      <form class="addForm">
        <h2 class="title">Información</h2>
        <fieldset class="addForm__group">
          <legend class="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input class="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto">
            <input class="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan">
              <div class="addForm__2col">
                <input class="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio">
                  <input class="addForm__input" type="url" name="demo" id="demo" placeholder="Demo">
                  </div>
                  <input class="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías">
                    <textarea class="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
                  </fieldset>

                  <fieldset class="addForm__group">
                    <legend class="addForm__title">Cuéntanos sobre la autora</legend>
                    <input class="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre">
                      <input class="addForm__input" type="text" name="job" id="job" placeholder="Trabajo">
                      </fieldset>

                      <fieldset class="addForm__group--upload">
                        <label for="image" class="button">Subir foto del proyecto</label>
                        <input class="addForm__hidden" type="file" name="image" id="image">
                          <label for="photo" class="button">Subir foto de la autora</label>
                          <input class="addForm__hidden" type="file" name="photo" id="photo">
                            <button class="button--large">Guardar proyecto</button>
                          </fieldset>

                        </form>
                        <footer className="footer">
                          <img className="logoSponsor" src={logo} alt="Logo Adalab" />
                        </footer>
                      </>
                      )
}

                      export default App
