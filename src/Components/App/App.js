import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{id: 1, name: 'Hello', artist: 'Kes', album: 'Folklore Riddim'},
                      {id: 2, name: 'Tombstone', artist: 'Mandella Linkz', album: 'Mandrakes Riddim'},
                      {id: 3, name: 'That Work (Look At You)', artist: 'Problem Child', album: 'Force It Riddim'},
                      {id: 4, name: 'True Masquerader', artist: 'Kes', album: 'Titans Riddim'},
                      {id: 5, name: 'Showtime', artist: 'Machel Montano', album: 'Pim Pim Riddim'}],
      playlistName: 'Soca Brainwash Mix',
      playlistTracks: [{id: 6, name: 'Play Harder', artist: 'Machel Montano', album: 'Pops Guitar Riddim'}, 
                       {id: 7, name: 'Radar', artist: 'Kes', album: '4th Quarter Riddim'},
                       {id: 8, name: 'Release', artist: 'Machel Montano', album: 'G.O.A.T.'},
                       {id: 9, name: 'Dear Drunk People', artist: 'Kerwin Du Bois', album: 'Tingin Riddim'},
                       {id: 10, name: 'The Best', artist: 'Sekon Sta', album: 'Kan Kan Riddim'}]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({
      playlistTracks: tracks
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
                           onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;