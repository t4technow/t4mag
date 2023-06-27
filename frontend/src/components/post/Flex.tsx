import { Post, size } from "@/types";
import Image from "next/image";
import Link from "next/link";
import formatDate from "../helper/formatDate";

type Props = {
	posts: Array<Post>;
	size: size;
};
const Flex = ({ posts, size }: Props) => {
	return (
		<>
			<div className="col-xl-5 col-lg-6">
				<div className="row gutter-24">
					{posts.map((post: Post) => {
						return (
							<div
								key={post.id}
								className="col-12 wow fadeInUp"
								data-wow-delay="400ms"
								data-wow-duration="800ms"
							>
								<div
									className={`rt-post ${
										size === "md" ? "post-md style-10" : "post-sm style-2"
									}`}
								>
									{size === "md" ? (
										<div className="post-img">
											<Link href={`posts/${post.slug}`}>
												<Image
													//placeholder="blur"

													src={post.thumbnail_url}
													alt="post"
													width="696"
													height="491"
												/>
											</Link>
										</div>
									) : null}

									<div className="post-content">
										<Link
											href={`/category/${post.category.slug}`}
											className={`rt-post-cat-normal ${
												size === "md" ? "bg" : ""
											}`}
											style={
												size === "md"
													? { background: post.category.accent }
													: {}
											}
										>
											{post.category.title}
										</Link>
										<h3 className="post-title">
											<Link href={`posts/${post.slug}`}>{post.title}</Link>
										</h3>
										<span className="rt-meta">
											<i className="far fa-calendar-alt icon"></i>
											{formatDate(post.created_at)}
										</span>
									</div>
									{size != "md" ? (
										<div className="post-img">
											<Link href={`posts/${post.slug}`}>
												<Image
													// placeholder="blur"
													src={post.thumbnail_sm_url}
													alt="post"
													width="143"
													height="110"
												/>
											</Link>
										</div>
									) : null}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Flex;
