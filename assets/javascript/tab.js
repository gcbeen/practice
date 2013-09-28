function up_tab(ele) {
	console.log('kkkkkkkkkkkkkkkk');
	console.log(ele);
	var upEle = document.getElementById('tab').getElementsByClassName('up')[0];
	var blockEle = document.getElementById('tab').getElementsByClassName('block')[0];
	upEle.className = upEle.className.replace('up', '');
	blockEle.className = blockEle.className.replace('block', '');
	ele.className += ' up';
	console.log(ele.nextSibling);
	ele.nextSibling.className += ' block';
}
function addClick() {
	document.getElementById('tab').onclick = function (e) {
		if (e.target == 'h3') {
			up_tab(e.target);
		}
	};
	/*
	   var h3Eles = document.getElementById('tab').getElementsByTagName('h3');
	   var i = h3Eles.length;
	   while ( i ) {
	   h3Eles[i-1].onclick = function () {
	   console.log(h3Eles[i-1]);
	   console.log(this);
	   (function () {
	   up_tab(h3Eles[i-1]);
	   }());
	   };
	   i -= 1;
	   }*/
}
window.onload = function () {
	addClick();
};
