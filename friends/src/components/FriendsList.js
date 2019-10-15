import React, {useState, useEffect} from 'react';
import withAuth from '../axios';
import AddFriend from '../components/AddFriend';

export default function FriendsList (props) {
const [friends, setFriends] = useState([]);

useEffect(() => {
    withAuth().get('http://localhost:5000/api/friends')
    .then(res => {
        setFriends(res.data);
    })
    .catch(error => {
        alert(error.response.data.message);
    });
}, [])

return (
    <div>
        <AddFriend />
        {
    friends.map(friend => (
        <div key={friend.id}>
        {friend.name}
        {friend.age}
        {friend.email}
        </div> 
    ))
        }
    </div>
)
}