function Form({
  form,
  handleInput,
  handleSubmit, //destructuring de props
}) {
  const {
    name,
    slogan,
    repo,
    technologies,
    demo,
    description,
    autor,
    job,
    image,
    photo,
  } = form; //destructuring (form/objeto)

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
            value={name}
            onChange={handleInput}
          />

          <input
            className="addhtmlForm__input"
            type="text"
            name="slogan"
            id="slogan"
            value={slogan}
            placeholder="Slogan"
            onChange={handleInput}
          />

          <div className="addhtmlForm__2col">
            <input
              className="addhtmlForm__input"
              type="url"
              name="repo"
              id="repo"
              value={repo}
              placeholder="Repositorio"
              onChange={handleInput}
            />

            <input
              className="addhtmlForm__input"
              type="url"
              name="demo"
              id="demo"
              value={demo}
              placeholder="Demo"
              onChange={handleInput}
            />
          </div>

          <input
            className="addhtmlForm__input"
            type="text"
            name="technologies"
            id="technologies"
            value={technologies}
            placeholder="Tecnologías"
            onChange={handleInput}
          />

          <textarea
            className="addhtmlForm__input"
            type="text"
            name="desc"
            id="description"
            placeholder="Descripción"
            rows="5"
            onChange={handleInput}
            value={description}
          />
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
            value={autor}
            placeholder="Nombre"
            onChange={handleInput}
          />
         
          <input
            className="addhtmlForm__input"
            type="text"
            name="job"
            id="job"
            value={job}
            placeholder="Trabajo"
            onChange={handleInput}
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
          value={image}
          onChange={handleInput}
        />
        <label htmlFor="photo" className="button">
          Subir foto de la autora
        </label>
        <input
          className="addhtmlForm__hidden"
          type="file"
          name="photo"
          id="photo"
          value={photo}
          onChange={handleInput}
        />
      </fieldset>
      <button className="button--large" value= "enviar" onClick={handleSubmit}>Guardar proyecto</button>
          
      </form>

  )
}

export default Form;