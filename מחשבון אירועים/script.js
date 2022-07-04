function howMuch() {
  var x = document.getElementById("totalCost");
  if (x.style.display === "none") {
    x.style.display = "flex";
   } else {
     x.style.display = "flex";
   }
  
  var cost = document.getElementById("test");
  var event = document.getElementById("event");
  var people = document.getElementById("people");
  var status = document.getElementById("status");
  var where = document.getElementById("where");
  
  if(event.value === "wedding" && people.value === "one" && status.value === "workFriends" && where.value === "regular") {
    cost.value = "400 ₪"
  } else {
    cost.value = "300 ₪"
  }
 }
