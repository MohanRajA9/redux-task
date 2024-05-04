import React from 'react'

const Dropdown = ({count, stock, handleClick,id }) => { // socket
    let store = []
    for (let i = 1; i <= stock; i++) {
        store.push(i)
    }
    return (
        <select value={count} onChange={(e) => handleClick(e,id)}>
            <option value={0} disable>select item</option>
            {
                store.map((ele, ind) => <option key={ind} value={ele}>{ele}</option>)
            }
        </select>
    )
}

export default Dropdown;