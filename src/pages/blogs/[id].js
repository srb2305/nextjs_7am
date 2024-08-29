export async function getStaticPaths(){
	console.log('getStaticPaths running');
	const API_URL = 'https://srbtracking.com/api/testing_feedback_get';
	    const res = await fetch(API_URL,{
	                    method: 'POST',
	                    headers: {
	                      'Content-Type': 'application/json',
	                    },
	                    body: JSON.stringify({token_id:'5d2903e566c6ed619f3add445ebd4cda'}),
	                  });
	    const data =   await res.json();
	    
	    const paths =	(data.data).map((items) => ({
					    		params: {id: items.id.toString() },
					    	}));
	    console.log(paths);
	    return {
	    	paths,
	    	fallback: false
	    }
}

export async function getStaticProps({params}){ // 82
		console.log('getStaticProps running');
		console.log(params);
		return {
			props:{
				params
			}
		}
}

export default function BlogsDetail({data}){
	console.log('BlogsDetail running');

	return(
		<>
			<h1>Services Data</h1>
			<p>getStaticPaths: Define dynamic routes to be pre-rendered at build time when using getStaticProps.</p>
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
		</>
	)
}