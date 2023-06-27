import { Post } from "@/types";
import CircularPost from "../post/CircularPost";

type Props = {
	posts: Array<Post>;
};

const Swiper = ({ posts }: Props) => {
	return (
		<div className="posts-track gutter-24 d-flex">
			{posts.map((post) => {
				return (
					<div
						key={post.id}
						className="col-xl-3 col-md-6 col-sm-12 col-12 wow fadeInUp post-holder"
						data-wow-delay="200ms"
						data-wow-duration="800ms"
					>
						<CircularPost post={post} />
					</div>
				);
			})}
		</div>
	);
};

export default Swiper;
