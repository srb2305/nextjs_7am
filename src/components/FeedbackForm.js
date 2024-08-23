"use client"
import {useState} from 'react';

export default function FeedbackForm(){
  const [formData, setFormData]  = useState({title:'',description:'',token_id:''});
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'https://srbtracking.com/api/testing_feedback_add';
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
				<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Feedback</h2>
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
              placeholder="Your Description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
	);
}