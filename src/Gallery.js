import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Gallery.css';

function Gallery() {
    const [photos, setPhotos] = useState([])
    const params = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
        .then((res)=>res.json())
        .then((data)=>setPhotos(data));
      }, [params.id])
    return (
        <div className="pic-container">

            <h1>gallry</h1>
            {
                photos.map((photo,i)=><div key={i}><img width="150px" height="150px" src={photo.thumbnailUrl} /></div>)
            }
        </div>
    )
}

export default Gallery
