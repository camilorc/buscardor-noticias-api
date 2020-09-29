import React, { useState } from 'react'


const useSelect = (stateInicial, options) => {

    const [state,setState] = useState(stateInicial)

    const SelectCategoria = () => (

        <select
            className="browser-default"
            value={state}
            onChange={e=>setState(e.target.value)}
        >
            {options.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>

    )


    return [state, SelectCategoria]
}

export default useSelect;