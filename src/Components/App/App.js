import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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
      playlistTracks: [{id: 1, name: 'Play Harder', artist: 'Machel Montano', album: 'Pops Guitar Riddim'}, 
                       {id: 2, name: 'Radar', artist: 'Kes', album: '4th Quarter Riddim'},
                       {id: 3, name: 'Release', artist: 'Machel Montano', album: 'G.O.A.T.'},
                       {id: 4, name: 'Dear Drunk People', artist: 'Kerwin Du Bois', album: 'Tingin Riddim'},
                       {id: 5, name: 'The Best', artist: 'Sekon Sta', album: 'Kan Kan Riddim'}]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;