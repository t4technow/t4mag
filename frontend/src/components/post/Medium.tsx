import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import formatDate from "../helper/formatDate";

type Props = {
	post: Post;
};

const Medium = ({ post }: Props) => {
	return (
		<div
			className="col-xl-3 col-md-6 wow fadeInUp animated"
			data-wow-delay="200ms"
			data-wow-duration="800ms"
		>
			<div className="rt-post-grid grid-meta">
				<div className="post-img">
					<Link href={`posts/${post.slug}`}>
						<Image
							// placeholder="blur"
							src={post.thumbnail_url}
							alt={post.title}
							width="551"
							height="431"
						/>
					</Link>
				</div>
				<div className="post-content">
					<Link
						href={`/category/${post.category.slug}`}
						className="rt-post-cat-normal"
					>
						{post.category.title}
					</Link>
					<h3 className="post-title">
						<Link href={`posts/${post.slug}`}>{post.title}</Link>
					</h3>
					<div className="post-meta">
						<ul>
							<li>
								<span className="rt-meta">
									by{" "}
									<Link
										href={`/author/${post.author.username}`}
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
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Medium;
