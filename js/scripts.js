$(document).ready(function() {
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
