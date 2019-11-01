import React, {useState} from 'react';
import uuid from 'uuid';
import withAuth from '../axios';



const friendAPI = 'http://localhost:5000/api/friends';
const initialFormValues = {
    id: uuid(),
    name: '',
    age: '',
    email: '',
    
}


export default function AddFriend(props) {
    const [friend, setFriend] = useState(initialFormValues);

    const handleChange = event => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        withAuth().post(friendAPI, friend)
        .then(res => 
            setFriend({
            ...friend,
            initialFormValues
          
        })
        )
        .catch(error => {
            alert(error.response.data.message);
        })
    }

    return (
        <div>
            <h2>Add a friend</h2>
            <form>
                <input type='text'placeholder='Name' name='name' value={friend.name} onChange={handleChange}/>
                <input type='text'placeholder='Age' name='age' value={friend.age} onChange={handleChange}/>
                <input type='text' placeholder='Email' name='email' value={friend.email} onChange={handleChange}/>
                <button onClick={onSubmit}>Add Friend</button>
            </form> 
       </div>
    )

}