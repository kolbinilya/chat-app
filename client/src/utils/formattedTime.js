export function formattedTime(timeStr) {
	const date = new Date(timeStr);
	const hours = padZero(date.getHours(date.getHours()));
	const minutes = padZero(date.getMinutes(date.getMinutes()));
	return `${hours}:${minutes}`
}

function padZero(number) {
	return number.toString().padStart(2, '0');
}