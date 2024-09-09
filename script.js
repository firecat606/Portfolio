function showAboutMe() {
	window.location.href = "./AboutMe.html";
}

function showProjects() {
	alert('Show projects clicked');
}

function goHome() {
	window.location.href = "./index.html";
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('aboutMeButton').addEventListener('click', showAboutMe);
	document.getElementById('projectsButton').addEventListener('click', showProjects);
	document.getElementById('homeButton').addEventListener('click', goHome);
});