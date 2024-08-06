function UrlPreview({ url }) {
    // Si url es null, el componente no se muestra
    if (url === null) {
        return;
    }

    // Cuando la url tiene un string, se muestra el preview
    return (
        <article className="url"><h3 className="titleUrl">tu tarjeta se ha creado correctamente:</h3><a href={url} target="_blank">{url}</a></article> //target_blank es para que se habra en otra pàgina
    );
}

export default UrlPreview;
