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
                    document.getElementById('current_time').innerHTML = today;

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

function delete_event()
{
              
  document.getElementById("event_delt_fun1").innerHTML = "";
}


function delete_event1()
{
              
  document.getElementById("event_delt_fun2").innerHTML = "";
}
function delete_event2()
{
              
  document.getElementById("event_delt_fun3").innerHTML = "";
}
function displayCalendar()
{
var htmlContent ="";
var FebNumberOfDays ="";
var counter = 1;
var dateNow = new Date();
var month = dateNow.getMonth();

var nextMonth = month+1; 
var prevMonth = month -1;
var day = dateNow.getDate();
var year = dateNow.getFullYear();

if (month == 1){
if ( (year%100!=0) && (year%4==0) || (year%400==0)){
FebNumberOfDays = 29;
}else{
FebNumberOfDays = 28;
}
}

var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]



var nextDate = new Date(nextMonth +' 1 ,'+year);
var weekdays= nextDate.getDay();
var weekdays2 = weekdays
var numOfDays = dayPerMonth[month];

while (weekdays>0){
htmlContent += "<td class='monthPre'></td>";


weekdays--;
}


while (counter <= numOfDays){


if (weekdays2 > 6){
weekdays2 = 0;
htmlContent += "</tr><tr>";
}


if (counter == day){
htmlContent +="<td class='dayNow' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
"onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
}else{
htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"pink\"'"+
" onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>"; 

}

weekdays2++;
counter++;
}

var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
+monthNames[month]+" "+ year +"</th></tr>";
calendarBody +="<tr class='dayNames'> <td>S</td> <td>M</td> <td>T</td>"+
"<td>W</td> <td>T</td> <td>F</td> <td>S</td> </tr>";
calendarBody += "<tr>";
calendarBody += htmlContent;
calendarBody += "</tr></table>";

document.getElementById("calendar").innerHTML=calendarBody;

}

// signuppage js
function validate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementsByClass('fname').value;
    if(!regName.test(name)){
        document.getElementsByClass('signup_page_data_ifn_error').innerHTML="frist name shuld not be black"
        document.getElementByClass('fname').focus();
        return false;
    }else{
        alert('Valid name given.');
        return true;
    }
}




// login page js
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
document.getElementById('error_email').innerHTML="enter valid email id"
document.form1.text1.focus();
return false;
}
}
