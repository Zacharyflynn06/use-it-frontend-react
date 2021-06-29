import React, {Component} from 'react'
import ArtistCard from './ArtistCard'
class ArtistContainer extends Component {

    state = {
        artists: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/artists")
        .then(resp => resp.json())
        .then(json => this.setState({
            artists: json.data.map(artist => artist.attributes )
    }))}


    render(){
        return(
            <>
                <div>
                    {this.state.artists.map(artist => <ArtistCard key={artist.id} {...artist}/>)}


                </div>
            </>
        )
    }
}

export default ArtistContainer