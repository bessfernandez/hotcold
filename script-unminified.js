window.onload = function() {
 var r = Math.random()*101|0,
     rg = 25,
     s = document.getElementById('status'),
     txt = s.innerHTML,
     st = ["hotter", "colder", "correct"],
     cl = ["red", "blue", "green"],
     pr = null,
     prdiff = null;
 document.getElementById('submit').onclick = function(event) {
 	 var v = document.getElementsByTagName('input')[0].value;
	 if (r == v) {
     	set(2);
     	return;
     }
	 var guessDiff = Math.abs(r - v);
	 if (prdiff) {
		guessDiff > prdiff ? set(1) : set(0);
	 } else {
	 	guessDiff > rg ? set(1) : set(0);
	 }	
 	 function set(arnum) {
	 	 s.innerHTML = st[arnum];
	 	 s.style.background= cl[arnum];
 	 }
 	 if (pr == v) {
 	 	set(1)
 	 }
	 pr = v;
     prdiff = guessDiff;
	}
	document.getElementsByTagName('input')[2].onclick = function(event) {
		s.innerHTML = '...';
	 	s.style.background= '';
	 	r = Math.random()*101|0;
	 	pr = null;
	 	prdiff = null;
	 	guessDiff = null;
	 	document.getElementsByTagName('input')[0].value = "";
	}
};
