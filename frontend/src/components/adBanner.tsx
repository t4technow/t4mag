import Image from "next/image";

const AdBanner = () => {
	return (
		<div className="wrap mb--60">
			<div className="ad-banner-img">
				<a href="#">
					<Image
						src="/ad-banner_3.jpg"
						alt="ad-banner"
						width="960"
						height="150"
					/>
				</a>
			</div>
		</div>
	);
};

export default AdBanner;
