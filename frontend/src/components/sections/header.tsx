import React from "react";
import NavBar from "../header/navBar";
import TopBar from "../header/topBar";
import { Post } from "@/types";

type Props = {
	posts: Array<Post>;
};

const Header = ({ posts }: Props) => {
	return (
		<header className="rt-header sticky-on">
			<div id="sticky-placeholder"></div>

			<TopBar posts={posts} />

			<NavBar />
		</header>
	);
};

export default Header;
