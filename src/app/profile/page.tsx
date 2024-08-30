"use client"
import {useState, useEffect} from 'react';
import {useAuth} from '../../hooks/useAuth';


export default function Profile(){
	const {user, logout }  = useAuth();
	
	useEffect(()=>{
		if (!(localStorage.getItem('authToken'))) {
			window.location.href = '/login';
		}
	},[user]);

	if(!user) {
		return <p>Loading....</p>;
	}

	const handleLogout = () => {
		logout();
		window.location.href= "/login";
	}

	return(
		<> 
		<main className="min-h-screen">
			<h1>Profile</h1>
			<p>Welcome, you are loged in!</p>

			<button type="button" onClick={handleLogout} > Logout</button>
		</main>
		</>
	)
}