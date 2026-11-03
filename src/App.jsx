import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import obraz1 from "./assets/obraz1.jpg"

function App() {
  const [count, setCount] = useState(0)

    const photos = [
        {id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35},
        {id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
        {id: 2, alt: "Dalmatyńczyk", filename: "obraz3.jpg", category: 2, downloads: 2},
        {id: 3, alt: "Świnka morska", filename: "obraz4.jpg", category: 2, downloads: 53},
        {id: 4, alt: "Rotwailer", filename: "obraz5.jpg", category: 2, downloads: 43},
        {id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11},
        {id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, downloads: 22},
        {id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33},
        {id: 8, alt: "Świnka morska", filename: "obraz9.jpg", category: 2, downloads: 123},
        {id: 9, alt: "Foksterier", filename: "obraz10.jpg", category: 2, downloads: 22},
        {id: 10, alt: "Szczeniak", filename: "obraz11.jpg", category: 2, downloads: 12},
        {id: 11, alt: "Garbus", filename: "obraz12.jpg", category: 3, downloads: 321}
    ];

  return (
    <>
        <div className="m-4" align={'left'}>

            <h1>Kategorie zdjęć</h1>

            <div className="switches">
                <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id="ctrId"/>
                    <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
                </div>
                <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id=" ctrId2"/>
                    <label className="form-check-label" htmlFor=" ctrId2">Zwierzęta</label>
                </div>
                <div className="form-check form-switch m-2">
                    <input className="form-check-input" type="checkbox" id=" ctrId2"/>
                    <label className="form-check-label" htmlFor=" ctrId2">Samochody</label>
                </div>
            </div>

        </div>

        <div className="m-4" align={'left'}>
            <img src={obraz1} alt=""/>

            <h4>Liczba pobrań: </h4>

            <button type="button" className="btn btn-success">Pobierz</button>
        </div>
    </>
  )
}

export default App
