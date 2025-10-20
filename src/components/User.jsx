const User = ({data}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-4">
                <img src={data.photoUrl + '?' + Date.now()} alt="Profile picture"
                className="w-16 h-16 rounded-full object-cover border" />
                
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
                    <p className="text-sm text-gray-600">Age: {data.age}</p>
                </div>
            </div>

            <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">Address:</span> {data.address}</p>
                <p><span className="font-medium">Email:</span> {data.email}</p>
                <p><span className="font-medium">Phone:</span> {data.phone}</p>
            </div>
        </div>
    )
}

export default User
