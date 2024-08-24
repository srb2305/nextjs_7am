"use client"
import {useState, useEffect} from 'react';

export default function Edit({params}){

	const [formData, setFormData]  = useState({ id:params.id,title:'',description:'',token_id:'5d2903e566c6ed619f3add445ebd4cda'});

	useEffect(()=>{
		getData();
	},[])

	const getData = async() => {
		const API_URL = `https://srbtracking.com/api/testing_feedback_edit`;
		const res = await fetch(API_URL,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({token_id:'',id:params.id}),
                  });
		const result = await res.json();
		setFormData({
			id: params.id,
			token_id: '',
			title:result.data.title,
			description: result.data.description
		})
		console.log(result.data);
	}

	const handleChange = (e) => {
	    const {name, value} = e.target;
	    setFormData({...formData, [name]:value})
	 };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'https://srbtracking.com/api/testing_feedback_update';
    const res = await fetch(API_URL,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                  });
    const result =   await res.json();
    if(result.status){
      alert(result.message);
    }else{
      alert(result.message);
    }
  }

	return(
		<>
	<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Feedback Update: {params.id}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              defaultValue={formData.title}
              placeholder="Your title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              onChange={handleChange}
              defaultValue={formData.description}
              placeholder="Your Description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Update Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
		</>
	)
}