$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let side1Input = parseInt($("#side1").val());
    let side2Input = parseInt($("#side2").val());
    let side3Input = parseInt($("#side3").val());


    $("#results").show();
    if (side1Input === side2Input && side2Input === side3Input) {
      $("#triangle").text("an Equilateral");
    }
    else if (side1Input === side2Input || side2Input === side3Input || side1Input === side3Input) {
      $("#triangle").text("an Isoceles");
    }
    else if (side1Input + side2Input <= side3Input || side2Input + side3Input <= side1Input || side1Input + side3Input <= side2Input) {
      $("#triangle").text("something other than a");
    }
    else {
      $("#triangle").text("a Scalene");
    }

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

  });
});
