import React from 'react'

function CitySelector(props) {
    return <select defaultValue="0" name="city" id="" onChange={props.onHandleCityChange}>
    <option value="0">Elige una ciudad</option>
    <option value="Barcelona">Barcelona</option>
    <option value="Madrid">Madrid</option>
    <option value="Bilbao">Bilbao</option>
    <option value="Valencia">Valencia</option>
    <option value="Sevilla">Sevilla</option>
</select>
}

export default CitySelector
