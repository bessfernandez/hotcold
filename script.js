window.onload = function() {
 var r = Math.random()*101|0,
     rg = 25,
     s = document.getElementById('status'),
     txt = s.innerHTML,
     arr = [],
     st = ["hotter", "colder", "correct"],
     cl = ["red", "blue", "green"],
     pr = null;
 
 document.getElementById('submit').onclick = function(event) {
 	 var v = document.getElementsByTagName('input')[0].value;
 	 arr.push(v);
	 if (r == v) {
     	set(2);
     	return;
     }
     console.log(r)
	 var guessDiff = Math.abs(r - v);
	 console.log(guessDiff)
	 guessDiff > 25 ? set(1) : set(0);
 	 function set(arnum) {
	 	 s.innerHTML = st[arnum];
	 	 s.style.background= cl[arnum];
 	 }
 	 // guess equal to previous guess will return colder
 	 if (pr == v) {
 	 	set(1)
 	 }
 	 // hotter or colder

     

     pr = v;

     // reset button will remove previous guess
     // generate a new number
     // set div#status text to "..." 
     // div#status background color to #333 Without refreshing the page.

	}
};
