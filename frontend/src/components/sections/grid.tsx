import Flex from "../post/Flex";
import Large from "../post/Large";
import { Post, size } from "@/types";

type Props = {
	posts: Array<Post>;
	size: size;
	priority?: boolean;
};
const Grid = ({ posts, size, priority = false }: Props) => {
	let featured = posts[0];

	return (
		<div className="row gutter-24">
			<Large post={featured} priority={priority} />
			<Flex posts={posts.slice(1, 4)} size={size} />
		</div>
	);
};

export default Grid;
