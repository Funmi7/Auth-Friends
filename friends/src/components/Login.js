import React, {useRef} from 'react';
import axios from 'axios';

export default function Login(props) {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post('http://localhost:5000/api/login',{
            username: userNameRef.current.value,
            password: passwordRef.current.value,
        })

        .then(res => {
            localStorage.setItem('payload', res.data.payload);
            props.history.push('/friendsList');
        })

        .catch(error => {
            alert(error.response.data.message);
        })
    }

    return (
        <form>
            <div>
                username <input ref={userNameRef} type='text'/>
                <br />
                Password <input ref={passwordRef} type='password'/>
            </div>
            <button onClick={submit}>Submit</button>
        </form>
    )
}