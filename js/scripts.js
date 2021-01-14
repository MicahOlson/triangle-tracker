$(document).ready(function() {
  $("button.btn").click(function(event) {
    const sideA = parseFloat($("input#sideA").val());
    const sideB = parseFloat($("input#sideB").val());
    const sideC = parseFloat($("input#sideC").val());
    
    if (!sideA && !sideB && !sideC) {
      alert("Please make sure all fields contain a value > 0");
    } else if (sideA === sideB && sideB === sideC) {
      $("#answer").text("Your triangle is an equilateral triangle.");
    } else if (false) {
      $("#answer").text("Your triangle is an isosceles triangle.");
    } else if (false) {
      $("#answer").text("Your triangle is a scalene triangle.");
    } else if (false) {
      $("#answer").text("Sorry, this is not a triangle.");
    }
    
    event.preventDefault();
  });
});