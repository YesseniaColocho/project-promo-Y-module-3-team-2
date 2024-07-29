function Card(props) {
    return(
        <section className="preview">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              tarjeta de proyecto personal
            </span>
          </h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">{props.job || "Instructora de yoga"}</p>
            <h3 className="card__name">{props.autor || "Ainara González"}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">{props.name || "Semillas de Yoga" }</h3>
            <p className="card__slogan">{props.slogan || "Conocerte a ti mismo es el comienzo de toda sabiduría."}</p>
            <h3 className="card__descriptionTitle">Descripción del producto:</h3>
            <p className="card__description">
              {props.description || "El proyecto Semillas de Yoga está diseñado para promover la salud física, mental y emocional a través de la práctica regular de yoga. Nuestro objetivo es proporcionar a los participantes herramientas y técnicas que mejoren su calidad de vida y fomenten una conexión más profunda entre el cuerpo y la mente. Este programa inclusivo está adaptado para satisfacer las necesidades de todos, independientemente de su edad, experiencia o nivel de habilidad."}
            </p>

            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>

              <a
                className="icon icon__www"
                href="#"
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href="#"
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
    )
}

export default Card;