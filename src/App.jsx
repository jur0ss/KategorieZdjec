import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="m-4" align={'left'}>

            <h1>Kategorie zdjęć</h1>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="ctrId"/>
                <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id=" ctrId2"/>
                <label className="form-check-label" htmlFor=" ctrId2">Zwierzęta</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id=" ctrId2"/>
                <label className="form-check-label" htmlFor=" ctrId2">Samochody</label>
            </div>

        </div>
    </>
  )
}

export default App
