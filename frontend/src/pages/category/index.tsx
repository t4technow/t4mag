import Link from "next/link";
const Category = () => {
	return (
		<>
			<h1>All Categories</h1>
			<Link href="/">Home</Link>
			<ul>
				<li>
					<Link href="/category/linux/">Linux</Link>
				</li>

				<li>
					<Link href="/category/windows/">Windows</Link>
				</li>
			</ul>
		</>
	);
};

export default Category;
