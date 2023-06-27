import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navBar.module.css";

const NavBar = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
	};

	return (
		<div
			className={`header-main header-main-style-1 navbar-wrap ${
				isSticky ? styles.sticky : ""
			}`}
			id="navbar-wrap"
		>
			<div className="container">
				<div className="row">
					<div className="d-flex align-items-center justify-content-between">
						<div className="site-branding">
							<Link className="dark-logo" href="/">
								<Image
									width="162"
									height="52"
									src="/images/logo/logo-dark.png"
									alt="t4technow"
									className="element"
								/>
							</Link>
							<Link className="light-logo" href="/">
								<Image
									width="162"
									height="52"
									src="/images/logo/logo-light.png"
									alt="t4technow"
									className="element"
								/>
							</Link>
						</div>

						<div className="main-menu">
							<nav className="main-menu__nav">
								<ul>
									<li className="main-menu__nav_sub list active">
										<Link className="animation" href="/">
											Home
										</Link>
									</li>
									<li className="main-menu__nav_sub list">
										<Link
											className="animation"
											href="/posts/"
											onClick={handleClick}
										>
											Features
										</Link>
										<ul className="main-menu__dropdown">
											<li className="main-menu__nav_sub">
												<a href="#">Post Layout</a>
												<ul>
													<li>
														<a href="#">Single Post 01</a>
													</li>
													<li>
														<a href="#">Single Post 02</a>
													</li>
													<li>
														<a href="#">Single Post 03</a>
													</li>
												</ul>
											</li>
											<li>
												<Link href="/authors/">Author Details</Link>
											</li>
										</ul>
									</li>
									<li className="main-menu__nav_sub list">
										<Link
											className="animation"
											href="/categories/"
											onClick={handleClick}
										>
											Categories{" "}
										</Link>
										<ul className="main-menu__dropdown">
											<li>
												<a href="life-style.html">Life Style</a>
											</li>
											<li>
												<a href="technology.html">Technology</a>
											</li>
											<li>
												<a href="gaming.html">Gaming</a>
											</li>
											<li>
												<a href="graphics.html">Graphics</a>
											</li>
											<li>
												<a href="politics.html">Politics</a>
											</li>
										</ul>
									</li>
									<li className="main-menu__nav_sub list">
										<Link
											className="animation"
											href="/pages/"
											onClick={handleClick}
										>
											Pages
										</Link>
										<ul className="main-menu__dropdown">
											<li>
												<a href="about.html">About Us</a>
											</li>
											<li>
												<a href="contact.html">Contact Us</a>
											</li>
											<li>
												<a href="404.html">404</a>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>

						<ul className="header-action-items">
							<li className="item">
								<span>
									<i className="fas fa-search"></i>
								</span>
							</li>

							<li className="item humburger offcanvas-menu-btn menu-status-open">
								<span></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
