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
        createUser({name, phone, email, address, age, photoUrl});
    }

    return (
        <div>
            <h2>Create new User</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required onInput={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" maxLength="10" minLength="10" id="phone" required onInput={(e) => setPhone(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required onInput={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" maxLength="200" id="address" required onInput={(e) => setAddress(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" min="1" max="100" id="age" required onInput={(e) => setAge(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="photoUrl">Photo Url</label>
                    <input type="text" id="photoUrl" required onInput={(e) => setPhotoUrl(e.target.value)}/>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Form