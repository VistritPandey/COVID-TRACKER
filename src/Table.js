import React from 'react'

function Table({countries}) {
    return (
        <div className='table'>
            {countries.map(country => (
                <tr>
                    <td> </td>
                    <td> </td>
                </tr>
            ))}
        </div>
    )
}

export default Table
