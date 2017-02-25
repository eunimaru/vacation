$(function() {
  $("button").click(function(event) {
    var nameInput = $("input#name").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var ambianceInput = $("input:radio[name=ambiance:checked").val();
    var activitiesInput = $("input:radio[name=activi]:checked").val();
    var typeInput = $("input:radio[name=type]:checked").val();

    var aInput= $("you should go to Thailand")

if (weather food ambiance activities value==="a"){
      $("#tryResult").text("input#name").text("aInput")
} else if (operation1==="subtract"){
        $("#tryResult").text(parseInt(number1Input)-parseInt(number2Input));
} else if (operation1==="multiply"){
          $("#tryResult").text(parseInt(number1Input)*parseInt(number2Input));
} else if (operation1==="divide"){
          $("#tryResult").text(parseInt(number1Input)/parseInt(number2Input));
    } else {
      alert(operation1);
    }
  event.preventDefault();
  });
});
