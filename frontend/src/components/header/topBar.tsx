import React, { useEffect, useState } from "react";
import { Post } from "@/types";
type Props = {
	posts: Array<Post>;
};

const TopBar = ({ posts }: Props) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(currentSlide === posts.length - 1 ? 0 : currentSlide + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [currentSlide, posts.length]);

	return (
		<div className="topbar topbar-style-1" id="topbar-wrap">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="rt-trending rt-trending-style-1">
							<p className="trending-title">
								<i className="fas fa-bolt icon"></i>
								Trending
							</p>
							<div className="rt-trending-slider1 swiper-container">
								<div className="trending-wrapper">
									{posts.map((post, idx) => {
										const isActive = idx === currentSlide;
										const isPrev =
											idx === currentSlide - 1 ||
											(currentSlide === 0 && idx === posts.length - 1);
										const isNext =
											idx === currentSlide + 1 ||
											(currentSlide === posts.length - 1 && idx === 0);
										return (
											<div
												className={`trending-slide ${
													isActive ? "active" : ""
												} ${isPrev ? "prev" : ""} ${isNext ? "next" : ""}`}
												key={idx}
											>
												<div className="item">
													<p className="trending-slide-title">{post.title}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-5">
						<div className="rt-topbar-right">
							<div className="meta-wrap">
								<span className="rt-meta">
									<i className="far fa-calendar-alt icon"></i>
									<span className="currentDate">DECEMBER 9, 2022</span>
								</span>
							</div>
							<div className="social-wrap d-none d-xl-block">
								<ul className="rt-top-social">
									<li className="follow">Follow Us:</li>
									<li>
										<a href="https://www.facebook.com/" target="_blank">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/" target="_blank">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</li>
									<li>
										<a href="https://www.pinterest.com/" target="_blank">
											<i className="fab fa-pinterest-p"></i>
										</a>
									</li>
									<li>
										<a href="https://www.whatsapp.com/" target="_blank">
											<i className="fab fa-skype"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
