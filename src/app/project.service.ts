
export class ProjectService {
	getProjects(): Object[] {
		return [
			{
				"id": 1,
				"title": "San Antonio Retirement Homes",
				"dates": "2014-2015",
				"description": "A retirement home application with interactive map and search list with KnockoutJS",
				"image": "http://i.imgur.com/ztDG76q.jpg",
				"url": "http://zhangtreefish.github.io/Project-5-for-Front-End-Web-Developer-Nanodegree"
			},
			{
				"id": 2,
				"title": "therapeutic foods",
				"dates": "2016-2016",
				"description": "A Flask web app hosted in Amazon Web Service using Apache HTTP Server and PostgreSQL on Ubuntu system",
				"image": "http://i.imgur.com/dd4d0fr.png",
				"url": "http://ec2-52-38-199-253.us-west-2.compute.amazonaws.com/"
			},
			{
				"id": 3,
				"title": "a Frogger game with an immunology twist",
				"dates": "2015-2015",
				"description": "Implemented a Frogger game using Object-Oriented javaScript and HTML5 Canvas",
				"image": "http://i.imgur.com/TMw9w29.png",
				"url": "https://zhangtreefish.github.io/Project-3-for-Front-End-Web-Developer-Nanodegree"
			},
		]
	};
}