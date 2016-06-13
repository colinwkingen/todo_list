//business logic
function Task(task, details) {
  this.itemName = task;
  this.itemDetails = details;
};

Task.prototype.fullTask = function() {
  return this.itemName + " is something you should be doing.";
};

// user interface logic
$(document).ready(function() {
  $("form#new-tasks").submit(function(event) {
    event.preventDefault();

    var inputItem = $("input#new-item").val();
    var inputDetails = $("input#details").val();


    var newItem = new Task(inputItem, inputDetails);

    $("ul#items").append("<span class='line-item'><li><span class='item'>" + newItem.fullTask() + "</span></li>" + "<button type='button' class='btn remove btn-sm'>Remove</button></span>");

    $("input#new-item").val("");
    $("input#details").val("");

    $(".item").last().click(function() {
      $("#show-items, sub-show").show();
      $("#show-items h2").text(newItem.itemName);
      $(".item-name").text(newItem.itemName);
      $(".details").text(newItem.itemDetails);
    //   $(".item-actions").html("<button type='button' class='btn remove_test btn-sm'>Remove</button>"
    // );

    });
    $(".remove").on("click", function() {
        console.log("got here");
        $(this).parent().hide();
        //$(this).remove();
        $("#show-items").hide();
    });
    // $(".remove_test, .remove").on("click", function() {
    //   console.log("got here!");
    //   $("").hide();
    //   newItem.remove();
    //   $(this).closest(".line-item").remove();
    // });

    // $("button.remove").click(function() {
    //     $(".item").last().remove(this.newItem);
    // });

  });
});
