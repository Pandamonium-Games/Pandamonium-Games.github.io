function sendMail() {
	var subject = document.getElementById('subject').value;
	var body = document.getElementById('body').value;

	window.open('mailto:pandamonium.devteam@gmail.com?subject=' + subject + '&body=' + body);
}
