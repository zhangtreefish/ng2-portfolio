export class Project {
	id: string;
	genre: string;
	title: string;
	dates: string;
	description: string;
	tools: string[];
	image: string;
	url: string;
	code: string;

	constructor(id, genre, title, dates, description, tools, image, url, code) {
		this.id = id;
		this.genre = genre;
		this.title = title;
		this.dates = dates;
		this.description = description;
		this.tools = tools;
		this.image = image;
		this.url = url;
		this.code = code;
	};
}
