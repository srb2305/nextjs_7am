export async function getStaticProps(){
		console.log('getStaticProps running');

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

export default function Services({data}){
	console.log('Services running');

	return(
		<>
			<h1>Services Data</h1>
			<p>fatches data at build time for static site generation(SSG)</p>
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
		</>
	)
}