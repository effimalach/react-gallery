import './App.css';
import React,{useState,useEffect} from 'react';
import Gallery from './Gallery.js';
import HomePage from './HomePage.js';

import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

function App() {
    const [albums, setAlbums] = useState([]);
    const history = useHistory();

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res)=>res.json())
      .then((data)=>setAlbums(data));
    }, []);

  return (
      <div className="App">
    <nav>
      <h1>Select an album:</h1>
      <label >Select an album:</label>
      <select name="albums" id="albums" onChange={(event)=> {
      const id = albums[event.target.selectedIndex].id;
       history.push(`/gallery/`+id);
      }}>
        {
          albums.map((album)=><option value={album.id} >{album.title}</option>)
        }
    </select>


    </nav>
      <Switch>
      <Route path="/gallery/:id">
        <Gallery />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
