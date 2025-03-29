import "./blog.scss";

export default function Post(props: {title: String, text: String}){
	return <div className="post">
		<h2>{props.title}</h2>
		<p>{props.text}</p>
	</div>
}