import Image from 'next/image';
import Head from 'next/head';

import './home.css';

function Home({data:string}){
	const heading = {
		background:'red',
  		color:'white',
  		padding: 20,
  		borderRadius: 25,
  		border: '5px solid yellow' 
	};
	const imgcss = {
		height: 200
	}
	return(
		<>
		<Head>
			<title>NextJS | HOME</title>
			<meta name="description" content="This is home page" />
			<meta name="keywords" content="home, nextjs, react" / >
		</Head>
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
		      	<div style={heading} >
					<h1>This is Home Page 123</h1>
					<h1>This is Home Page</h1>
				</div>
				<div className="heading">
					<h1>This is Home Page</h1>
					<h1>This is Home Page</h1>
				</div>
			<img style={imgcss} src="https://srbitsolution.com/images/banner.png" />
			<Image 
				src="https://srbitsolution.com/images/logo/logo.png"
				width={1200}
				height={1200}
				alt='logo'
			/>
			<Image 
				src="https://srbitsolution.com/images/b1.png"
				width={200}
				height={200}
			/>
			<Image 
				src="https://srbitsolution.com/images/banner.png"
				width={1200}
				height={1200}
			/>
		</main>
		</>
	)
}

export default Home;