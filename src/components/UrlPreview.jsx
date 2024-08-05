function UrlPreview({ url }) {
    // Si url es null, el componente no se muestra
    if (url === null) {
        return;
    }

    // Cuando la url tiene un string, se muestra el preview
    return (
        <article className="card url"><a href={url} target="_blank">{url}</a></article>
    );
}

export default UrlPreview;
