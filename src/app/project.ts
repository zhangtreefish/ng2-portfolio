export class Project {
	id: number;
	title: string;
	dates: string;
	description: string;
	image: string;
	url: string;
	code: string;

	constructor(id, title, dates, description, image, url, code) {
		this.id = id;
		this.title = title;
		this.dates = dates;
		this.description = description;
		this.image = image;
		this.url = url;
		this.code = code;
	};
}