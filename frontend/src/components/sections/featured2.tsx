import Image from "next/image";
import { Post } from "@/types";
import Link from "next/link";
import SectionHeading from "../sectionHeading";

type Props = {
	title: string;
	posts: Array<Post>;
};

const Featured2 = ({ title, posts }: Props) => {
	return (
		<div className="wrap">
			<SectionHeading title={title} />
			<div className="row gutter-10">
				{posts.map((post) => {
					return (
						<div
							key={post.id}
							className="col-lg-6 wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="800ms"
						>
							<div className="rt-post-overlay rt-post-overlay-md">
								<div className="post-img">
									<Link href={`posts/${post.slug}`} className="img-link">
										<Image
											src={post.thumbnail_url}
											alt={post.title}
											width="900"
											height="600"
										/>
									</Link>
								</div>
								<div className="post-content">
									<h3 className="post-title bold-underline">
										<Link href={`posts/${post.slug}`}>{post.title}</Link>
									</h3>

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
													{post.created_at}
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Featured2;
