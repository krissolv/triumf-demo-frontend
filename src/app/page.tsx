import Link from "next/link";

export default function Home() {

	return (
    <div>
			<h1>Triumf Demo</h1>
			<br />
			<Link href={'/blog'}>Blog</Link>
		</div>
  );
}
