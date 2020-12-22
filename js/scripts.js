$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const input = $("input#number").val();

    let numberArray = []

    for (let index = 0; index <= input; index +=1){
      numberArray.push(index);
    }

    console.log(numberArray);

    $("#story").show();
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