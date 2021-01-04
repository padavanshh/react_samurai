import React from 'react';

let Users = (props) => {
    if (props.users.length===0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://ru-static.z-dn.net/files/d75/30573001b547c539887ff7f3faf3b145.jpeg',
                    followed: true,
                    fullName: 'Batman',
                    status: 'I am a Batman',
                    location: {city: 'Gotham', country: 'DC'}
                },
                {
                    id: 2,
                    photoUrl: 'https://ru-static.z-dn.net/files/d75/30573001b547c539887ff7f3faf3b145.jpeg',
                    followed: true,
                    fullName: 'Bat',
                    status: 'I am a Batman',
                    location: {city: 'Salmachi', country: 'Kazan'}
                },
                // {
                //     id: 3,
                //     photoUrl: 'https://ru-static.z-dn.net/files/d75/30573001b547c539887ff7f3faf3b145.jpeg',
                //     followed: false,
                //     fullName: 'Superman',
                //     status: 'I am a Batman',
                //     location: {city: 'New-York', country: 'USA'}
                // },
                // {
                //     id: 4,
                //     photoUrl: 'https://ru-static.z-dn.net/files/d75/30573001b547c539887ff7f3faf3b145.jpeg',
                //     followed: false,
                //     fullName: 'Spider-man',
                //     status: 'I am a Batman',
                //     location: {city: 'Moscow', country: 'Russia'}
                // }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => {props.unFollow(u.id) } }>UnFollow</button>
                            : <button onClick={ () => {props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;