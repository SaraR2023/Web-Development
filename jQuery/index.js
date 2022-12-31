$("h1").addClass("big-title margin-50");

$("h1").text("Hello from the other side");
$("button").html("<em>Don't press</em>");

$("a").attr("href", "https://ca.yahoo.com/");  // setting an anchor to a new link


// for (var i=0; i<5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   })
// }

// $("button").click(function(){
//   $("h1").css("color", "purple")
// });
//
// $(document).keypress(function(event){
//   $("h1").text(event.key)
// })

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5})   //second value in "animate" has to be a number
})
