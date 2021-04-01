import * as React from 'react'

interface IProps{
    names: []
}

const Users: React.FC <IProps> = ({ names }) => {

    return <div>
        <h1> hello {names} </h1>
    </div>
}

export default Users