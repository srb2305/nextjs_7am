import Head from 'next/head';
import ContactForm from '../../components/ContactForm';

export default function Contact(){
	return(
		<>
			<Head>
				<title>NextJS | HOME</title>
				<meta name="description" content="This is home page" />
				<meta name="keywords" content="home, nextjs, react" / >
			</Head>
			<ContactForm />	
		</>
	)
}