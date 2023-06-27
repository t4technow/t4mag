import CustomHead from "@/components/customHead";
import Header from "@/components/sections/header";
import Swiper from "@/components/sections/Swiper";
import Grid from "@/components/sections/grid";
import FeaturedTabbed from "@/components/sections/featured1";
import TopStories from "@/components/sections/topStories";
import Featured2 from "@/components/sections/featured2";
import Style1 from "@/components/post/style1";
import AdBanner from "@/components/adBanner";
import UpperSideBar from "@/components/sections/sideBarUpper";

import { baseUrl } from "../config/constants";

import { Category, Post } from "@/types";

type Props = {
	posts: Array<Post>;
	recentPosts: Array<Post>;
	cats: Array<Category>;
	allPosts: Array<Post>;
};

const index = ({ posts, recentPosts, cats, allPosts }: Props) => {
	return (
		<>
			<CustomHead />

			<Header posts={posts} />
			<section
				className="rt-feature-section feature-section-style-1 overflow-hidden"
				data-bg-image="media/elements/element_1.png"
			>
				<div className="container">
					{posts !== null ? (
						<Swiper posts={posts} />
					) : (
						<h3>something went wrong</h3>
					)}
				</div>
			</section>

			<section className="rt-main-post-section main-post-section-style-1 section-padding">
				<div className="container">
					{recentPosts !== null ? (
						<Grid posts={recentPosts} priority={true} size="md" />
					) : (
						<h3>something went wrong</h3>
					)}
				</div>
			</section>

			<TopStories title="Top Stories" posts={posts} />

			<section className="whats-new-style-1 section-padding">
				<div className="container">
					<div className="row gutter-30 sticky-coloum-wrap">
						<div className="col-xl-9 sticky-coloum-item">
							<div className="featured-area-style-1 overflow-hidden">
								{allPosts !== null && cats !== null ? (
									<FeaturedTabbed
										title="What’s New"
										cats={cats}
										posts={allPosts}
									/>
								) : (
									<h3>something went wrong</h3>
								)}

								<Featured2 title="Featured Style 2" posts={posts} />
							</div>
						</div>
						<div className="col-xl-3 sticky-coloum-item sticky-sidebar">
							<UpperSideBar posts={posts} />
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding">
				<div className="container">
					<div className="row gutter-24 sticky-coloum-wrap">
						<div className="col-xl-9 sticky-coloum-item">
							<div className="featured-area-style-1 sticky-wrap">
								<Style1 posts={posts} title="Latest News" />
								<AdBanner />
							</div>
						</div>
						<div className="col-xl-3 sticky-coloum-item sticky-sidebar">
							<UpperSideBar posts={posts} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default index;

export async function getStaticProps() {
	const response = await fetch(`${baseUrl}/posts/`);
	const data = response.status === 200 ? await response.json() : null;

	const recent = await fetch(`${baseUrl}/posts/recent`);
	const recentData = recent.status === 200 ? await recent.json() : null;

	const categories = await fetch(`${baseUrl}/categories`);
	const cats = categories.status === 200 ? await categories.json() : null;

	const allPosts = await fetch(`${baseUrl}/posts/`);
	const allPostsData = allPosts.status === 200 ? await allPosts.json() : null;

	return {
		props: {
			posts: data && data.length > 0 ? data.slice(0, 4) : null,
			recentPosts: recentData && recentData.length > 0 ? recentData : null,
			cats: cats && cats.length > 0 ? cats.slice(0, 4) : null,
			allPosts: allPostsData && allPostsData.length > 0 ? allPostsData : null,
		},
		revalidate: 10,
	};
}
