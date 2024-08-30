"use client"
import {useState} from 'react';
import {useAuth} from '../../hooks/useAuth';

export default function Login(){
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const {login} = useAuth(); // custom hook

	const handleSubmit =  async (event) =>{
		event.preventDefault();
		const API_URL = 'https://srbtracking.com/api/generate_api_token';
	    const res = await fetch(API_URL,{
	                    method: 'POST',
	                    headers: {
	                      'Content-Type': 'application/json',
	                    },
	                    body: JSON.stringify({contact:username}),
	                  });
	    const data =   await res.json();
	    console.log(data);
	    if(data.status) {
	    	login(data.token_id);
	    	window.location.href = '/profile'; //redirect after login
	    }else{
	    	alert(data.message);
	    }
	}
	return(
		<>
		<main className="min-h-screen">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input 
						type="text"
						value={username} 
						onChange={(e) =>setUsername(e.target.value) }
					/>
				</label>
				<label>
					Password:
					<input 
						type="password"
						value={password} 
						onChange={(e) =>setPassword(e.target.value) }
					/>
				</label>
				<button type="submit" >Login</button>
			</form>
		</main>
		</>
	)
}