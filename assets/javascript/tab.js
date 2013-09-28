function up_tab(eve) {
	var eve = eve || window.event;
	console.log(eve);
	var ele = eve.target || eve.srcElement;
	var tabEle = document.getElementById('tab')
	var upEle = tabEle.getElementsByClassName('up')[0];
	var blockEle = tabEle.getElementsByClassName('block')[0];
	upEle.className = upEle.className.replace('up', '');
	blockEle.className = blockEle.className.replace('block', '');
	ele.className += ' up';
	console.log(ele.nextElementSibling);
	ele.nextElementSibling.className += ' block';
}
document.getElementById('tab').addEventListener('click', function (event) {
	up_tab(event);
}, false);
