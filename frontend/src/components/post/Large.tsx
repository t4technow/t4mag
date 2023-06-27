import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import formatDate from "../helper/formatDate";

type Props = {
	post: Post;
	priority: boolean;
};

const Large = ({ post, priority = false }: Props) => {
	if (post != null) {
		return (
			<>
				<div
					className="col-xl-7 col-lg-6 wow fadeInUp"
					data-wow-delay="200ms"
					data-wow-duration="800ms"
				>
					<div className="rt-post-overlay rt-post-overlay-xl layout-1">
						<div className="post-img">
							<Link href={`posts/${post.slug}`} className="img-link">
								<Image
									priority={priority}
									// placeholder="blur"
									src={post.thumbnail_url}
									alt="post-xl_1"
									width="900"
									height="600"
								/>
							</Link>
						</div>
						<div className="post-content">
							<Link
								href={`/category/${post.category.slug}`}
								className={`rt-post-cat-normal bg ${post.category.slug}`}
								style={{ background: post.category.accent }}
							>
								{post.category.title}
							</Link>
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
											{formatDate(post.created_at)}
										</span>
									</li>
									<li>
										<span className="rt-meta">
											<i className="far fa-comments icon"></i>
											<a href="#"> 3,250</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return <h3>Something went wrong</h3>;
	}
};

export default Large;
