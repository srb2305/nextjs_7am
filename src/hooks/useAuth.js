import {useState, useEffect} from 'react';

const AUTH_TOKEN_KEY = 'authToken';

export function useAuth() {
	const [user, setUser] = useState(null);

	useEffect(()=>{
		const token = localStorage.getItem(AUTH_TOKEN_KEY);
		if(token) {
			setUser({token});
		}
	},[]);

	const login = (token)=> {
		localStorage.setItem(AUTH_TOKEN_KEY,token);
		setUser({token});
	}

	const logout = () => {
		localStorage.removeItem(AUTH_TOKEN_KEY);
		setUser(null);
	}

	return { user, login, logout };
}