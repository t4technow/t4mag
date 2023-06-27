import Head from "next/head";

type Props = {
	title?: string;
	desc?: string;
	author?: string;
};

const CustomHead = ({ title, desc, author }: Props) => {
	return (
		<Head>
			<title>{title ? `${title} | T4Technow` : "T4technow"}</title>

			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content={
					desc
						? desc
						: "Tech blog covering latest news, reviews and tutorials related to technology."
				}
			/>
			<meta
				name="keywords"
				content={
					desc
						? desc
						: "Tech blog covering latest news, reviews and tutorials related to technology."
				}
			/>
			<meta name="author" content={author ? author : "T4technow"} />
			<meta name="robots" content="index,follow" />
			<meta
				property="og:title"
				content={title ? `${title} | T4Technow` : "T4technow"}
			/>
			<meta
				property="og:description"
				content={
					desc
						? desc
						: "Tech blog covering latest news, reviews and tutorials related to technology."
				}
			/>
			<meta property="og:image" content="http://t4technow.tk/logo-dark.png" />
			<meta
				property="og:image:secure_url"
				content="https://t4technow.tk/logo-dark.png"
			/>
			<meta property="og:url" content="https://t4technow.tk/" />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="T4Technow" />
			<meta
				name="twitter:description"
				content={
					desc
						? desc
						: "Tech blog covering latest news, reviews and tutorials related to technology."
				}
			/>
			<meta name="twitter:image" content="http://t4technow.tk/logo-dark.png" />

			<link rel="canonical" href="https://t4technow.tk"></link>
		</Head>
	);
};

export default CustomHead;
