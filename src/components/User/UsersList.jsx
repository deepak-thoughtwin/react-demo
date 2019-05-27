import React, { Component } from 'react'

import TableRow from './TableRow'

const users = [{id: 1, firstName: 'Deepak', lastName: 'Yadav'}]

export default class UsersList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((val, index) => (
                                <TableRow obj={val} index={index} />
                            ))
                        }                        
                    </tbody>
                </table>
            </div>
        )
    }
}
