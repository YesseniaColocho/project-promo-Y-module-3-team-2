function Form() {
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
          />
          <input
            className="addhtmlForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
          />
          <div className="addhtmlForm__2col">
            <input
              className="addhtmlForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
            />
            <input
              className="addhtmlForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
            />
          </div>
          <input
            className="addhtmlForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
          />
          <textarea
            className="addhtmlForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
          ></textarea>
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
            placeholder="Nombre"
          />
          <input
            className="addhtmlForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
          />
        </fieldset>

        <fieldset className="addhtmlForm__group--upload" />
        <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="image"
          id="image"
        />
        <label htmlFor="photo" className="button">
          Subir foto de la autora
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button className="button--large">Guardar proyecto</button>
      </form>
    )
}

export default Form;