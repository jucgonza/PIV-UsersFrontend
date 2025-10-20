import User from './User'

const Users = ({users}) => {
    return (
        <>
            <div>Users</div>
            {users.map(i => <User key={i.id} data={i} />)}
        </>
    )
}

export default Users
