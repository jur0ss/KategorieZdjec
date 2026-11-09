import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import obraz1 from "./assets/obraz1.jpg"
import obraz2 from "./assets/obraz2.jpg"
import obraz3 from "./assets/obraz3.jpg"
import obraz4 from "./assets/obraz4.jpg"
import obraz5 from "./assets/obraz5.jpg"
import obraz6 from "./assets/obraz6.jpg"
import obraz7 from "./assets/obraz7.jpg"
import obraz8 from "./assets/obraz8.jpg"
import obraz9 from "./assets/obraz9.jpg"
import obraz10 from "./assets/obraz10.jpg"
import obraz11 from "./assets/obraz11.jpg"
import obraz12 from "./assets/obraz12.jpg"

function App() {

    const [kwiaty, setKwiaty] = useState(true);
    const [zwierzeta, setZwierzeta] = useState(true);
    const [samochody, setSamochody] = useState(true);

    const [photos, setPhotos] = useState( [
        {id: 0, alt: "Mak", filename: obraz1, category: 1, downloads: 35},
        {id: 1, alt: "Bukiet", filename: obraz2, category: 1, downloads: 43},
        {id: 2, alt: "Dalmatyńczyk", filename: obraz3, category: 2, downloads: 2},
        {id: 3, alt: "Świnka morska", filename: obraz4, category: 2, downloads: 53},
        {id: 4, alt: "Rotwailer", filename: obraz5, category: 2, downloads: 43},
        {id: 5, alt: "Audi", filename: obraz6, category: 3, downloads: 11},
        {id: 6, alt: "kotki", filename: obraz7, category: 2, downloads: 22},
        {id: 7, alt: "Róża", filename: obraz8, category: 1, downloads: 33},
        {id: 8, alt: "Świnka morska", filename: obraz9, category: 2, downloads: 123},
        {id: 9, alt: "Foksterier", filename: obraz10, category: 2, downloads: 22},
        {id: 10, alt: "Szczeniak", filename: obraz11, category: 2, downloads: 12},
        {id: 11, alt: "Garbus", filename: obraz12, category: 3, downloads: 321}
    ]);

    const handleDownload = (id) => {
        setPhotos(photos.map(photo => {
            if (photo.id === id) {
                return { ...photo, downloads: photo.downloads + 1 };
            }
            return photo;
        }));
    };

  return (
    <>
        <div className="m-4" align={'left'}>

            <h1>Kategorie zdjęć</h1>

            <div className="switches">
                <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id="ctrId" checked={kwiaty}
                           onChange={(e) => setKwiaty(e.target.checked)} />
                    <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
                </div>
                <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id="ctrId2" checked={zwierzeta}
                           onChange={(e) => setZwierzeta(e.target.checked)} />
                    <label className="form-check-label" htmlFor=" ctrId2">Zwierzęta</label>
                </div>
                <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id="ctrId2" checked={samochody}
                           onChange={(e) => setSamochody(e.target.checked)} />
                    <label className="form-check-label" htmlFor=" ctrId3">Samochody</label>
                </div>
            </div>

        </div>

        <div className="images">
            {photos
                .filter(photo =>
                    (photo.category === 1 && kwiaty === true) ||
                    (photo.category === 2 && zwierzeta === true) ||
                    (photo.category === 3 && samochody === true)
                )
                .map(photo => (
                    <div key={photo.id} className="m-4" align={'left'}>
                        <img src={photo.filename} alt={photo.alt}/>

                        <h4>Liczba pobrań: {photo.downloads} </h4>

                        <button type="button" className="btn btn-success" onClick={() => handleDownload(photo.id)}>Pobierz</button>
                    </div>
                ))
            }
        </div>


    </>
  )
}

export default App
