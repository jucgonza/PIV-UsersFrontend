const User = ({data}) => {
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
    )
}

export default User
