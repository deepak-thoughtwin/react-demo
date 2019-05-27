import React from 'react'

const TableRow = ({obj, index}) => {
    return (
        <tr key={index}>
            <td> {obj.id} </td>
            <td> {obj.firstName} </td>
            <td> {obj.lastName} </td>
        </tr>
    )
}

export default TableRow;