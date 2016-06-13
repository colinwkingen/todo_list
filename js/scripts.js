//business logic
function Task(task) {
  this.itemName = task;
};

Task.prototype.fullTask = function() {
  return this.itemName + " is something you should be doing.";
};

// user interface logic
$(document).ready(function() {
  $("form#new-tasks").submit(function(event) {
    event.preventDefault();

    var inputItem = $("input#new-item").val();


    var newItem = new Task(inputItem);

    $("ul#items").append("<span class='line_item'><li><span class='item'>" + newItem.fullTask() + "</span></li>" + "<button type='button' class='btn remove'>Remove</button></span>");

    $("input#new-item").val("");

    $(".item").last().click(function() {
      $("#show-items").show();
      $("#show-items h2").text(newItem.fullTask());
      $(".item-name").text(newItem.itemName);
    });
    $(".remove").on("click", function() {
        $(this).closest(".line_item").remove();
    });

    // $("button.remove").click(function() {
    //     $(".item").last().remove(this.newItem);
    // });

  });
});
