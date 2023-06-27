import React from "react";
import SectionHeading from "../sectionHeading";
import CircularPost from "../post/CircularPost";

import { Post } from "@/types";

type Props = {
	posts: Array<Post>;
};
const UpperSideBar = ({ posts }: Props) => {
	return (
		<div className="rt-sidebar sticky-wrap">
			<div className="sidebar-wrap mb--40">
				<SectionHeading title="Popular News" />

				<div className="post-list">
					{posts.map((post) => {
						return (
							<div className="item" key={post.id}>
								<CircularPost post={post} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default UpperSideBar;
