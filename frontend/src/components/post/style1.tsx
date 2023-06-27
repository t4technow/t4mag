import Image from "next/image";
import SectionHeading from "../sectionHeading";

import { Post } from "@/types";
import Link from "next/link";
import formatDate from "../helper/formatDate";

type Props = {
	title: string;
	posts: Array<Post>;
};

const Style1 = ({ title, posts }: Props) => {
	const truncateExcerpt = (excerpt: string, limit: number) => {
		if (excerpt.length > limit) {
			return `${excerpt.slice(0, limit)}...`;
		}
		return excerpt;
	};

	return (
		<div className="wrap post-wrap mb--60">
			<SectionHeading title={title} />

			{posts.map((post) => {
				const truncatedExcerpt = truncateExcerpt(post.excerpt, 140);

				return (
					<div
						key={post.id}
						className="post-item wow fadeInUp"
						data-wow-delay="200ms"
						data-wow-duration="800ms"
					>
						<div className="rt-post post-md style-2 grid-meta">
							<div className="post-img">
								<Link href={`posts/${post.slug}`}>
									<Image
										src={post.thumbnail_url}
										alt={post.title}
										width="696"
										height="491"
									/>
								</Link>
							</div>
							<div className="post-content">
								<Link
									href={`category/${post.category.slug}`}
									className={post.category.slug}
								>
									{post.category.title}
								</Link>
								<h3 className="post-title bold-underline">
									<Link href={`posts/${post.slug}`}>{post.title}</Link>
								</h3>
								<p>{truncatedExcerpt}</p>
								<div className="post-meta">
									<ul>
										<li>
											<span className="rt-meta">
												by{" "}
												<Link
													href={`author/${post.author.username}`}
													className="name"
												>
													{post.author.username}
												</Link>
											</span>
										</li>
										<li>
											<span className="rt-meta">
												<i className="far fa-calendar-alt icon"></i>
												{formatDate(post.created_at)}
											</span>
										</li>
										<li>
											<span className="rt-meta">
												<i className="fas fa-share-alt icon"></i>
												3,250
											</span>
										</li>
									</ul>
								</div>
								<div className="btn-wrap mt--25">
									<Link
										href={`posts/${post.slug}`}
										className="rt-read-more rt-button-animation-out"
									>
										Read More
										<svg
											width="34px"
											height="16px"
											viewBox="0 0 34.53 16"
											xmlSpace="preserve"
										>
											<rect
												className="rt-button-line"
												y="7.6"
												width="34"
												height=".4"
											></rect>
											<g className="rt-button-cap-fake">
												<path
													className="rt-button-cap"
													d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z"
												></path>
											</g>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Style1;
