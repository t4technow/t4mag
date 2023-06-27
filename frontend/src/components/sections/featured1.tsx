import Grid from "./grid";
import { Post, Category } from "@/types";
import { useState } from "react";
import SectionHeading from "../sectionHeading";

type Props = {
	title: string;
	cats: Array<Category>;
	posts: Array<Post>;
};

const FeaturedTabbed = ({ title, cats, posts }: Props) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="wrap mb--60">
			<div className="featured-tab-title">
				<SectionHeading title={title} />

				<ul className="nav rt-tab-menu" id="myTab" role="tablist">
					{cats.map((cat, index) => {
						if (cat.post_count > 0) {
							return (
								<li key={index} className="menu-item" role="presentation">
									<span
										className={`menu-link ${
											index === activeIndex ? "active" : ""
										}`}
										id={`menu-${index}-tab`}
										data-bs-toggle="tab"
										data-bs-target={`#menu-${index}`}
										role="tab"
										aria-controls={`menu-${index}`}
										aria-selected="true"
										onClick={() => setActiveIndex(index)}
									>
										{cat.title}
									</span>
								</li>
							);
						}
					})}
				</ul>
			</div>

			<div className="tab-content" id="myTabContent">
				{cats.map((cat, index) => {
					let filteredPosts: Array<Post> = posts.filter((post) => {
						return post.category.id === cat.id;
					});
					return (
						<div
							key={cat.id}
							className={`tab-pane tab-item animated fadeInUp ${
								index === activeIndex ? "show active" : ""
							}`}
							id={`menu-${index}`}
							role="tabpanel"
							aria-labelledby={`menu-${index}-tab`}
						>
							<Grid posts={filteredPosts} size="sm" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedTabbed;
