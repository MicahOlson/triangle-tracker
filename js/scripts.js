$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const sideA = parseFloat($("input#sideA").val());
    const sideB = parseFloat($("input#sideB").val());
    const sideC = parseFloat($("input#sideC").val());

    if (!sideA && !sideB && !sideC) {
        alert("Please make sure all fields contain a value > 0");
    } else if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideC + sideB <= sideA) {
        $("#answer").text("Sorry, this is not a triangle.");
    } else if (sideA == sideB && sideB == sideC ) {
        $("#answer").text("Your triangle is an equalateral triangle.");
    } else if (sideA == sideB || sideB == sideC || sideC == sideA ) {
        $("#answer").text("Your triangle is an isosceles triangle.");
    } else if (sideA !== sideB && sideB !== sideC ) {
        $("#answer").text("Your triangle is a scalene triangle.");
    }
    event.preventDefault();
  });
});