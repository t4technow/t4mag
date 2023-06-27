import { useRouter } from "next/router";
const SingleCategory = () => {
	const route = useRouter();
	const cat = route.query.cat;
	return <h1>All Posts From {cat}</h1>;
};

export default SingleCategory;
