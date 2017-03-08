$(function() {
  $(".btn").submit(function(event) {
    var nameInput = $("input#name").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var ambianceInput = $("input:radio[name=ambiance]:checked").val();
    var activitiesInput = $("input:radio[name=activities]:checked").val();
    var typeInput = $("input:radio[name=type]:checked").val();

    // var thailandInput="You should go to Thailand"
    // var franceInput="You should go to France"
    // var italyInput="You should go to Italy"


if (weatherInput==="Tropical"){
      $(".destination1").show();

else if (foodInput==="Asian"){
    $(".destination2").show();
}

  event.preventDefault();
  });
});
