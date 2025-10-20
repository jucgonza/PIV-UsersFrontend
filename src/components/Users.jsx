import User from './User'

const Users = ({users}) => {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Users</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(i => <User key={i.id} data={i} />)}
            </div>
        </>
    )
}

export default Users
