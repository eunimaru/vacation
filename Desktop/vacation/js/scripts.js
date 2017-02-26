$(function() {
  $("button").click(function(event) {
    var nameInput = $("input#name").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var ambianceInput = $("input:radio[name=ambiance:checked").val();
    var activitiesInput = $("input:radio[name=activities]:checked").val();
    var typeInput = $("input:radio[name=type]:checked").val();

    var aInput=("You should go to Thailand").val();
    var bInput=("You should go to France").val();
    var cInput=("You should go to Italy").val();


if (weatherInput==="a"){
      $("#tryResult").text("aInput").show();
}
 else if (foodInput==="b"){
      $("tryResult").text("bInput").show();
    }
else if (ambianceInput ==="c"){
      $("tryResult").text("cInput").show();
}
else if (activitiesInput ==="a"){
      $("tryResult").text("aInput").show();
}
else (typeInput ==="b"){
      $("tryResult").text("bInput").show();
}

  event.preventDefault();
  });
});
