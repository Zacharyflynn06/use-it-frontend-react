function ArtistCard(props) {
    // debugger

    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.popularity}</h2>
            <h2>{props.genres}</h2>
        </div>
    )
}

export default ArtistCard