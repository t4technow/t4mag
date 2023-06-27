import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top footer-style-1">
				<div className="container">
					<div className="row gutter-30">
						<div
							className="col-xl-3 col-md-6 wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<div className="logo footer-logo">
									<a className="dark-logo" href="index.html">
										<img
											width="162"
											height="52"
											src="/images/logo/logo-light.svg"
											alt="t4technow"
										/>
									</a>
								</div>
								<p className="text">
									When an unknown printer took a galley and scrambled it to make
									specimen book not only five centurie.
								</p>
								<ul className="footer-social gutter-15">
									<li className="social-item">
										<a
											href="https://www.facebook.com/"
											className="social-link fb"
											target="_blank"
										>
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li className="social-item">
										<a
											href="https://twitter.com/"
											className="social-link tw"
											target="_blank"
										>
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li className="social-item">
										<a
											href="https://vimeo.com/"
											className="social-link vm"
											target="_blank"
										>
											<i className="fab fa-vimeo-v"></i>
										</a>
									</li>
									<li className="social-item">
										<a
											href="https://www.pinterest.com/"
											className="social-link pn"
											target="_blank"
										>
											<i className="fab fa-pinterest-p"></i>
										</a>
									</li>
									<li className="social-item">
										<a
											href="https://www.whatsapp.com/"
											className="social-link wh"
											target="_blank"
										>
											<i className="fab fa-whatsapp"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="col-xl-3 col-md-6 wow fadeInUp"
							data-wow-delay="400ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<h3 className="footer-widget-title">Recent Posts</h3>

								<div className="footer-post-list">
									<div className="item mb--30">
										<div className="rt-post post-sm white-style">
											<div className="post-img">
												<a href="single-post1.html">
													<img
														src="media/gallery/post-sm_1.jpg"
														alt="post"
														width="100"
														height="100"
													/>
												</a>
											</div>
											<div className="ms-3 post-content">
												<h4 className="post-title">
													<a href="single-post1.html">
														Top Beste ampute are Speak Market.
													</a>
												</h4>
												<span className="rt-meta">
													<i className="far fa-calendar-alt icon"></i>
													DECEMBER 9, 2022
												</span>
											</div>
										</div>
									</div>

									<div className="item">
										<div className="rt-post post-sm white-style">
											<div className="post-img">
												<a href="single-post1.html">
													<img
														src="media/gallery/post-sm_2.jpg"
														alt="post"
														width="100"
														height="100"
													/>
												</a>
											</div>
											<div className="ms-3 post-content">
												<h4 className="post-title">
													<a href="single-post1.html">
														Top Beste ampute are Speak Market.
													</a>
												</h4>
												<span className="rt-meta">
													<i className="far fa-calendar-alt icon"></i>
													DECEMBER 9, 2022
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							className="col-xl-3 col-md-6 wow fadeInUp d-flex justify-content-xl-center justify-content-start"
							data-wow-delay="400ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<h3 className="footer-widget-title">Categories</h3>
								<ul className="widget-list cat-list">
									<li className="widget-list-item">
										<a href="politics.html" className="widget-list-link">
											Politics
										</a>
									</li>
									<li className="widget-list-item">
										<a href="politics.html" className="widget-list-link">
											Business
										</a>
									</li>
									<li className="widget-list-item">
										<a href="technology.html" className="widget-list-link">
											Technology
										</a>
									</li>
									<li className="widget-list-item">
										<a href="life-style.html" className="widget-list-link">
											Health
										</a>
									</li>
									<li className="widget-list-item">
										<a href="life-style.html" className="widget-list-link">
											Sports
										</a>
									</li>
									<li className="widget-list-item">
										<a href="gaming.html" className="widget-list-link">
											Entertainment
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="col-xl-3 col-md-6 wow fadeInUp"
							data-wow-delay="600ms"
							data-wow-duration="800ms"
						>
							<div className="footer-widget">
								<h3 className="footer-widget-title">Instagram</h3>
								<div className="insta-gallery">
									<div className="galleryitem">
										<a href="https://www.instagram.com/">
											<img
												src="media/gallery/ins-gallery_1.jpg"
												width="100"
												height="90"
												alt="gallery1"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<div className="footer-bottom-area d-flex align-items-center justify-content-center">
						<p
							className="copyright-text mb-0 wow fadeInUp"
							data-wow-delay="200ms"
							data-wow-duration="800ms"
						>
							<span className="currentYear"></span> © neeon all right reserved
							by
							<a href="https://t4technow.tk/" rel="nofollow">
								T4Technow
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
