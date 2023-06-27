type Props = {
	title: string;
};

const SectionHeading = ({ title }: Props) => {
	return (
		<h2 className="rt-section-heading">
			<span className="rt-section-text"> {title} </span>
			<span className="rt-section-dot"></span>
			<span className="rt-section-line"></span>
		</h2>
	);
};

export default SectionHeading;
