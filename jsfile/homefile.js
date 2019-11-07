// aboutpage slide javascript file
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}
// aboutpage read less and more javafile

      function myFunction() {
				  var dots = document.getElementById("dots");
				  var moreText = document.getElementById("more");
				  var btnText = document.getElementById("myBtn");

				  if (dots.style.display === "none") {
				    dots.style.display = "inline";
				    btnText.innerHTML = "Read more"; 
				    moreText.style.display = "none";
				  } else {
				    dots.style.display = "none";
				    btnText.innerHTML = "Read less"; 
				    moreText.style.display = "inline";
				  }
				}
// event page current data function 
       //          	  var myDate = new Date();
   				// 	  var hrs = myDate.getHours();
					  // var greet;

    			// 		if (hrs < 12)
       // 						greet = 'Good Morning';
    			// 		else if (hrs >= 12 && hrs <= 17)
       //  					greet = 'Good Afternoon';
    			// 		else if (hrs >= 17 && hrs <= 24)
       //  					greet = 'Good Evening';

    			// 		document.getElementById('greeting').innerHTML ='<b>'
    			// 		 + greet + ','+'</b>'+'<br> User';

    	// 				 // date and time
                        
                    var objToday = new Date(),
					weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'),
					dayOfWeek = weekday[objToday.getDay()],
					domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
					dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
					months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
					curMonth = months[objToday.getMonth()],
					curYear = objToday.getFullYear(),
					curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
					curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
					curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
					curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
					var today = dayOfWeek +' ' + curMonth + "<br>"  + dayOfMonth +" " + curYear +"<br>"+curHour + ":" + curMinute + "." + curSeconds + "<br>"+curMeridiem ;
                    document.getElementById('demo').innerHTML = today;

           // event page
           		var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
greet = 'Good Morning';
 else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
greet = 'Good Evening';
document.getElementById("Greetings").innerHTML = greet+','+'<br> User';


function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
}