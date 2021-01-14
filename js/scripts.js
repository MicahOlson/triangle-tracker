$(document).ready(function() {
  $("button.btn").submit(function() {
    const sideA = $("input#sideA").val();
    const sideB = $("input#sideB").val();
    const sideC = $("input#sideC").val();
    // sideA === sideB && sideA === sideC
    if (true) {
      $("#triangle").text("an equilateral");
    } else if (false) {
      $("#triangle").text("an isosceles");
    } else if (false) {
      $("#triangle").text("a scalene");
    } else {
      $("#triangle").text("Sorry, we don't know what this is.");
    }
  });
});