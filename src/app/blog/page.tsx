import Post from "@/app/blog/Post";
import Link from "next/link";

export default async function Page() {

	let posts;

	try{
		const data = await fetch('http://localhost:3001/posts');
		posts = await data.json();
	}catch(error){
		posts = [];
	}

	return (
		<>
			<h1>Blog</h1>
			<br />
			<Link href={'/'}>Go back</Link>
			<br /><br />
			<ul>
				{posts.map((post: {id: number, title: String, text: String}) => (
					<Post key={post.id} title={post.title} text={post.text} />
				))}
			</ul>
		</>
	)
}