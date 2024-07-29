function Form(props) {

  return(
    <form className="addhtmlForm">
      <h2 className="title">Rellena tu formulario</h2>
      <fieldset className="addhtmlForm__group">
        <legend className="addhtmlForm__title">
          Cuéntanos sobre el proyecto
        </legend>
        <input
          className="addhtmlForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          value={props.name}
          onChange={props.handleName}
        />
        <input
          className="addhtmlForm__input"
          type="text"
          name="slogan"
          id="slogan"
          value={props.slogan}
          placeholder="Slogan"
          onChange={props.handleSlogan}
        />
        <div className="addhtmlForm__2col">
          <input
            className="addhtmlForm__input"
            type="url"
            name="repo"
            id="repo"
            value={props.repo}
            placeholder="Repositorio"
            onChange={props.handleRepo}
          />
          <input
            className="addhtmlForm__input"
            type="url"
            name="demo"
            id="demo"
            value={props.demo}
            placeholder="Demo"
            onChange={props.hadleDemo}
          />
        </div>
        <input
          className="addhtmlForm__input"
          type="text"
          name="technologies"
          id="technologies"
          value={props.technologies}
          placeholder="Tecnologías"
          onChange={props.handleTechnologies}
        />
        <textarea
          className="addhtmlForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={props.hadleDescription}
        >{props.description}
        </textarea>
      </fieldset>

      <fieldset className="addhtmlForm__group">
        <legend className="addhtmlForm__title">
          Cuéntanos sobre la autora
        </legend>
        <input
          className="addhtmlForm__input"
          type="text"
          name="autor"
          id="autor"
          value={props.autor}
          placeholder="Nombre"
          onChange={props.handleAutor}
        />
        <input
          className="addhtmlForm__input"
          type="text"
          name="job"
          id="job"
          value={props.job}
          placeholder="Trabajo"
          onChange={props.handleJob}
        />
      </fieldset>

      <fieldset className="addhtmlForm__group--upload">
        <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="image"
          id="image"
          value={props.image}
          onChange={props.handleImage}
        />
        <label htmlFor="photo" className="button">
          Subir foto de la autora
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="photo"
          id="photo"
          value={props.photo}
          onChange={props.handlePhoto}
        />
      </fieldset>
      <button className="button--large">Guardar proyecto</button>
    </form>
  )
}

export default Form;