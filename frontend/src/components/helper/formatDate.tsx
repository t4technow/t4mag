function formatDate(dateString: string) {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		month: "long",
		day: "numeric",
		year: "numeric",
	};
	const formattedDate = date.toLocaleDateString("en-US", options);

	return formattedDate;
}

export default formatDate;
