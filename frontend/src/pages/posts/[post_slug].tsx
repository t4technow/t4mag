import AdBanner from "@/components/adBanner";
import CustomHead from "@/components/customHead";
import formatDate from "@/components/helper/formatDate";
import { FullPost, Post } from "@/types";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "../../config/constants";

type Props = {
	post: FullPost;
};

const SinglePost = ({ post }: Props) => {
	return (
		<>
			<CustomHead
				title={post.title}
				desc={post.excerpt}
				author={post.author.username}
			/>
			<main>
				<div className="banner inner-banner">
					<div className="container">
						<nav className="rt-breadcrumb-wrap" aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link href="/">
										<i className="fas fa-home"></i>
										Home
									</Link>
								</li>
								<li className="breadcrumb-item">
									<Link href={`/category/${post.category.slug}`}>
										{post.category.title}
									</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									<span className="rt-text-truncate">{post.title}</span>
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div
					className="single-post-banner rt-gradient-overaly"
					style={{ backgroundImage: `url(${post.featured_image_url})` }}
				>
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-10 mx-auto">
								<div className="single-post-content">
									<span
										className="bg rt-post-cat-normal"
										style={{ background: post.category.accent }}
									>
										{post.category.title}
									</span>
									<h2 className="post-title">{post.title}</h2>
									<div className="post-meta">
										<ul>
											<li>
												<span className="rt-meta">
													by{" "}
													<Link
														href={`/authors/${post.author.username}`}
														className="name"
													>
														{post.author.username}
													</Link>
												</span>
											</li>
											<li>
												<span className="rt-meta">
													<i className="far fa-calendar-alt icon"></i>
													formatDate({post.created_at})
												</span>
											</li>
											<li>
												<span className="rt-meta">
													<i className="far fa-comments icon"></i>
													250 Comments
												</span>
											</li>
											<li>
												<span className="rt-meta">
													<i className="far fa-clock icon"></i>2 minute read
												</span>
											</li>
											<li>
												<span className="rt-meta">
													<i className="fas fa-signal icon"></i>
													{post.views} Views
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section className="rt-sidebar-section-layout-3 section-padding">
					<div className="container">
						<div className="row gutter-40">
							<div className="col-xl-9 col-lg-10 mx-auto">
								<div className="rt-main-post-single layout-2">
									<div className="post-share-style-1">
										<div className="inner">
											<div className="share-text">
												<i className="fas fa-share-alt"></i>
												<span>share</span>
											</div>

											<ul className="social-share-style-7">
												<li>
													<a
														className="fb"
														target="_blank"
														href="https://www.facebook.com/"
													>
														<i className="social-icon fab fa-facebook-f"></i>
													</a>
												</li>
												<li>
													<a
														className="tw"
														target="_blank"
														href="https://twitter.com/"
													>
														<i className="social-icon fab fa-twitter"></i>
													</a>
												</li>
												<li>
													<a
														className="yu"
														target="_blank"
														href="https://www.youtube.com/"
													>
														<i className="social-icon fab fa-youtube"></i>
													</a>
												</li>
												<li>
													<a
														className="dr"
														target="_blank"
														href="https://dribbble.com/"
													>
														<i className="social-icon fab fa-dribbble"></i>
													</a>
												</li>
												<li>
													<a
														className="dw"
														target="_blank"
														href="https://cloud.google.com/"
													>
														<i className="social-icon fas fa-cloud"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div className="post-body">
										<p className="rt-dropcap-style-2">{post.body}</p>

										<AdBanner />
										<div className="border-with-spacer-1"></div>
									</div>

									<div className="social-share-box-2 mb--40">
										<div className="row gutter-30">
											<div className="col-xl-7 col-lg-6">
												<div className="conent-block">
													<h3 className="block-tile mb--20">Popular Tags:</h3>
													<div className="tag-list">
														<a href="#" className="tag-link">
															beautiful
														</a>
														<a href="#" className="tag-link">
															travel
														</a>
														<a href="#" className="tag-link">
															technology
														</a>
														<a href="#" className="tag-link">
															politics
														</a>
													</div>
												</div>
											</div>
											<div className="col-xl-5 col-lg-6 d-flex justify-content-start justify-content-lg-end">
												<div className="conent-block">
													<h4 className="block-tile mb--20">
														Share This Post:
													</h4>
													<ul className="social-share-style-1 ">
														<li>
															<a
																className="fb"
																target="_blank"
																href="https://www.facebook.com/"
															>
																<i className="social-icon fab fa-facebook-f"></i>
															</a>
														</li>
														<li>
															<a
																className="tw"
																target="_blank"
																href="https://twitter.com/"
															>
																<i className="social-icon fab fa-twitter"></i>
															</a>
														</li>
														<li>
															<a
																className="yu"
																target="_blank"
																href="https://www.youtube.com/"
															>
																<i className="social-icon fab fa-youtube"></i>
															</a>
														</li>
														<li>
															<a
																className="dr"
																target="_blank"
																href="https://dribbble.com/"
															>
																<i className="social-icon fab fa-dribbble"></i>
															</a>
														</li>
														<li>
															<a
																className="dw"
																target="_blank"
																href="https://cloud.google.com/"
															>
																<i className="social-icon fas fa-cloud"></i>
															</a>
														</li>

														<li>
															<a
																className="wh"
																target="_blank"
																href="https://www.whatsapp.com/"
															>
																<i className="social-icon fab fa-whatsapp"></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div className="author-box-style-1 mb--50">
										<div className="author-img">
											<Image
												src={post.author.profile_pic}
												alt="author-img"
												width="170"
												height="170"
											/>
										</div>
										<div className="author-content">
											<h3 className="author-name">{post.author.username}</h3>
											<span className="author-role">
												{post.author.is_superuser ? "Admin" : "Author"}
											</span>
											<p className="user-desc">{post.author.bio}</p>
											<ul className="social-style-5">
												<li>
													<a target="_blank" href="https://www.facebook.com/">
														<i className="social-icon fab fa-facebook-f"></i>
													</a>
												</li>
												<li>
													<a target="_blank" href="https://twitter.com/">
														<i className="social-icon fab fa-twitter"></i>
													</a>
												</li>
												<li>
													<a target="_blank" href="https://www.pinterest.com/">
														<i className="fab fa-pinterest-p"></i>
													</a>
												</li>
												<li>
													<a target="_blank" href="https://www.instagram.com/">
														<i className="fab fa-instagram"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div className="post-pagination-box mb--40">
										<div className="row gutter-30">
											<div className="col-lg-6">
												{post.previous_post ? (
													<div className="next-prev-wrap">
														<div className="item-icon">
															<Link href={post.previous_post.slug}>
																<i className="fas fa-chevron-left"></i>
																Previous Article
															</Link>
														</div>
														<div className="content">
															<h4 className="title">
																<Link href={post.previous_post.slug}>
																	{post.previous_post.title}
																</Link>
															</h4>
															<span className="rt-meta">
																<i className="far fa-calendar-alt icon"></i>
																{formatDate(post.previous_post.created_at)}
															</span>
														</div>
													</div>
												) : null}
											</div>

											<div className="col-lg-6">
												{post.next_post ? (
													<div className="next-prev-wrap next-wrap">
														<div className="item-icon">
															<Link href={post.next_post.slug}>
																Next Article
																<i className="fas fa-chevron-right"></i>
															</Link>
														</div>
														<div className="content">
															<h4 className="title">
																<Link href={post.next_post.slug}>
																	{post.next_post.title}
																</Link>
															</h4>
															<span className="rt-meta">
																<i className="far fa-calendar-alt icon"></i>
																{formatDate(post.next_post.created_at)}
															</span>
														</div>
													</div>
												) : null}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default SinglePost;

export async function getStaticPaths() {
	const response = await fetch(`${baseUrl}/posts/`);
	const data = await response.json();

	const paths = data.map((post: Post) => {
		return {
			params: {
				post_slug: `${post.slug}`,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { params } = context;

	const response = await fetch(`${baseUrl}/posts/${params?.post_slug}`);
	const data = await response.json();

	return {
		props: {
			post: data,
		},
		revalidate: 10,
	};
}
