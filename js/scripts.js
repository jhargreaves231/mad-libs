$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const input = $("input#number").val();

    const numberArray = []

    for (let index = 0; index <= input; index +=1) {
      numberArray.push(index);
    }

    const newNumberArray = numberArray.toString();
    let zArray = newNumberArray.replace("32", "Won't you be my neighbor?").replace("21", "Boop").replace("13", "Won't you be my neighbor?").replace(/[1]/gi, "Beep").replace(/[2]/gi, "Boop").replace(/[3]/gi, "Won't you be my neighbor?")

    console.log(zArray);

    $("#story").show();
    $("#resultNumber").text(zArray);
  });
});


/* $(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const array = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    array.forEach(function(element){
      const input = $("input#" + element).val();
      $("." + element).text(input);
    });

    $("#story").show();
  });
});
*/
