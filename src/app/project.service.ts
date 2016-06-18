
export class ProjectService {
	getProjects(): Object[] {
		return [
			{
				"id": 1,
				"title": "Retirement Homes",
				"dates": "2014-2015",
				"description": "A San Antonio retirement homes application with interactive map and search list with KnockoutJS",
				"tools": ["KnockoutJS", "google.maps", "ajax", "bootstrap", "jQuery", "Yelp API", "jsonp"],
				"image": "http://i.imgur.com/ztDG76q.jpg",
				"url": "http://zhangtreefish.github.io/Project-5-for-Front-End-Web-Developer-Nanodegree",
				"code": "https://github.com/zhangtreefish/Project-5-for-Front-End-Web-Developer-Nanodegree"
			},
			{
				"id": 2,
				"title": "therapeutic foods",
				"dates": "2016-2016",
				"description": "A Flask web app hosted in Amazon Web Service using Apache HTTP Server and PostgreSQL on Ubuntu system",
				"tools": ["Amazon Web Service", "Apache2", "PostgreSQL", "Ubuntu", "Linux", "Flask", "Jinja2", "Python", "json", "sqlalchemy", "oauth2"],
				"image": "http://i.imgur.com/dd4d0fr.png",
				"url": "http://ec2-52-38-199-253.us-west-2.compute.amazonaws.com/",
				"code": "https://github.com/zhangtreefish/Project-3-for-Full-Stack-Nanodegree-at-Udacity"
			},
			{
				"id": 3,
				"title": "a Frogger game",
				"dates": "2015-2015",
				"description": "Implemented a Frogger game with an immunology twist using Object-Oriented javaScript and HTML5 Canvas",
				"tools": ["javascript", "object-oriented programming", "canvas", "requestAnimationFrame"],
				"image": "http://i.imgur.com/TMw9w29.png",
				"url": "https://zhangtreefish.github.io/Project-3-for-Front-End-Web-Developer-Nanodegree",
				"code": "https://github.com/zhangtreefish/Project-3-for-Front-End-Web-Developer-Nanodegree"
			},
		]
	};
}