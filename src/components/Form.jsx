import { useState } from 'react';

const Form = ({createUser}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);
    const [photoUrl, setPhotoUrl] = useState('');
    

    const onSubmit = e => {
        e.preventDefault();
        createUser({name, phone, email, address, age, photoUrl}, e);
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Create a new User</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" id="name" required onInput={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input type="text" maxLength="10" minLength="10" id="phone" required onInput={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" required onInput={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                    <input type="text" maxLength="200" id="address" required onInput={(e) => setAddress(e.target.value)} placeholder="Enter your address" className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
                    <input type="number" min="1" max="100" id="age" required onInput={(e) => setAge(e.target.value)} placeholder="Enter your age" className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="photoUrl" className="block text-sm font-medium mb-1">Photo Url</label>
                    <input type="text" id="photoUrl" required onInput={(e) => setPhotoUrl(e.target.value)} placeholder="Enter a public url" className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <button type="submit" className="mt-4 bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer transition">Save</button>
            </form>
        </div>
    )
}

export default Form