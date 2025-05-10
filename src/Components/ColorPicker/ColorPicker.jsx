import React, {useState} from 'react'
import "./ColorPicker.css";
const ColorPicker = () => {

    const [color, setColor] = useState("#336699");

    const colorPickerHandler = (event) => {
        setColor(event.target.value);
    }
  return (
    <div className='colorContainer'>
        <h1>{color}</h1>
        <div className='colorBg' style={{backgroundColor: color}}>
            <h2>{color}</h2>
        </div>
        <div className='colorInput'>
            <label> Select a color</label>
            <input type='color' value={color}  onChange={colorPickerHandler}/>
        </div>
    </div>
  )
}

export default ColorPicker;