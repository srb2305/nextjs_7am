"use client"
import { useState,useEffect} from 'react';
import FeedbackForm from '@/components/FeedbackForm';
import Link from 'next/Link';

export default function Feedback(){
	const [data, setData] = useState([]);
	useEffect(()=>{
		fetchData();
	},[]);

	const fetchData = async() => {
		const API_URL = 'https://srbtracking.com/api/testing_feedback_get';
	    const res = await fetch(API_URL,{
	                    method: 'POST',
	                    headers: {
	                      'Content-Type': 'application/json',
	                    },
	                    body: JSON.stringify({token_id:'5d2903e566c6ed619f3add445ebd4cda'}),
	                  });
	    const result =   await res.json();
	    if(result.status){
	    	setData(result.data);
	    }else{
	    	alert(result.message);
	    }
	}

	const handleDelete = async (id) => {
		console.log(id);
		const API_URL = 'https://srbtracking.com/api/testing_feedback_delete';
	    const res = await fetch(API_URL,{
	                    method: 'POST',
	                    headers: {
	                      'Content-Type': 'application/json',
	                    },
	                    body: JSON.stringify({
	                    	id:id,
	                    	token_id:''
	                    }),
	                  });
	    const result =   await res.json();
	    if(result.status){
	    	alert(result.message);
	    	fetchData();
	    }else{
	    	alert(result.message);
	    }

	}

	return(
		<>
		<main className="min-h-screen">
			<h1>Feedback List</h1>
			<div className="overflow-x-auto">
      			<table className="min-w-full bg-white">
      			<thead>
				<tr>
					<th className="py-2 px-4 border-b-2 border-gray-300">ID</th>
					<th className="py-2 px-4 border-b-2 border-gray-300">Title</th>
					<th className="py-2 px-4 border-b-2 border-gray-300">Feedback</th>
					<th className="py-2 px-4 border-b-2 border-gray-300">Action</th>
				</tr>
				</thead>
				<tbody>
			{data.map( (item,index )=> (
				<tr className="text-center" key={index}>
					<td className="py-2 px-4 border-b">{index+1} </td>
					<td className="py-2 px-4 border-b">{item.title}</td>
					<td className="py-2 px-4 border-b">{item.description}</td>
					<td className="py-2 px-4 border-b">
						<Link href={`feedback/edit/${item.id}`} > Edit </Link>
						<button type="button" onClick={ ()=>handleDelete(item.id)}>Delete</button>
					</td>
				</tr>
			))}	
			</tbody>
			</table>
			</div>
		</main>
		</>
	)
}