import { Post } from "@/types";
import Image from "next/image";
import Medium from "../post/Medium";

type Props = {
	title: string;
	posts: Array<Post>;
};

const TopStories = ({ title, posts }: Props) => {
	return (
		<section className="top-stories-style-1 section-padding motion-effects-wrap">
			<ul className="element-list d-none d-xl-block">
				<li className="motion-effects1">
					<Image
						className="wow fadeInLeft animated element"
						data-wow-delay="200ms"
						data-wow-duration="800ms"
						src="/images/elements/element_2.png"
						alt="element_1"
						width="88"
						height="58"
					/>
				</li>
				<li>
					<Image
						className="wow fadeInDown animated element"
						data-wow-delay="400ms"
						data-wow-duration="800ms"
						src="/images/elements/element_3.png"
						alt="element_2"
						width="182"
						height="72"
					/>
				</li>
				<li>
					<Image
						className="wow fadeInRight animated element"
						data-wow-delay="600ms"
						data-wow-duration="800ms"
						src="/images/elements/element_4.png"
						alt="element_3"
						width="199"
						height="128"
					/>
				</li>
			</ul>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="rt-section-heading">
							<span className="rt-section-text"> {title} </span>
							<span className="rt-section-dot"></span>
							<span className="rt-section-line"></span>
						</h2>
					</div>
				</div>
				<div className="row gutter-24">
					{posts.map((post) => {
						return <Medium post={post} key={post.id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default TopStories;
