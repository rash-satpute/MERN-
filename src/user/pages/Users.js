import React from 'react'

import UserList from '../components/UserList'

const Users=()=> {
    const USERS = [{
        id:"u1",

        name:"Rash",
        
        image :'https://picsum.photos/id/237/200/300',
        places : 78
    }]
    return (
        <UserList items={USERS}/>
    )
}
export default Users