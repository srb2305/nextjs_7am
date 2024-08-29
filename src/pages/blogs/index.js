import Head from 'next/head';

export async function getServerSideProps(){
		console.log('getServerSideProps running');

		const API_URL = 'https://srbtracking.com/api/testing_feedback_get';
	    const res = await fetch(API_URL,{
	                    method: 'POST',
	                    headers: {
	                      'Content-Type': 'application/json',
	                    },
	                    body: JSON.stringify({token_id:'5d2903e566c6ed619f3add445ebd4cda'}),
	                  });
	    const data =   await res.json();
	    console.log(data);
	    return {
	    	props: {
	    		data
	    	}
	    }
}

export default function Blogs({data}){
	console.log('Blogs running');

	return(
		<>	
			<Head>
				<title>NextJS | BLOGS</title>
				<meta name="description" content="This is home page" />
				<meta name="keywords" content="home, nextjs, react" / >
			</Head>
			<h1>Services Data</h1>
			<h1>About Data</h1>
			<h1>Contact Data</h1>
			<h1>Services Data</h1>
			<p>fatches data on each request  for server site rendering(SSR)</p>
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
		</>
	)
}