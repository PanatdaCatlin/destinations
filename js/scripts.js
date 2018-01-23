$(document).ready(function() {
  console.log("I'm ready");
  var destinationsArray = [];
  //this constructor creates new destination objects
  function destination(location, landmarks, season, info, imageURL) {
    this.location = location;
    this.landmarks = landmarks;
    this.season = season;
    this.info = info;
    this.imageURL = imageURL;
  };

  var createNewDestination = function() {

    var location = $("#destination").val();
    console.log(location);
    var landmarks = $("#landmarks").val();
    var season = $("#season").val();
    var info = $("#info").val();
    var imageURL = $("#imageURL").val();

    destinationsArray.push(new destination(location, landmarks, season, info, imageURL))
    console.log(destinationsArray);
  };

  var displayNewDestination = function() {
    var lastObject = destinationsArray[destinationsArray.length - 1];

    $("#destinationsContainer").append('<div class="col-md-4"><div class="destinationsCard"></div></div>');

    $("#destinationsContainer .col-md-4:last-child .destinationsCard").append('<h2 class="destinationName clickToExpand">' + lastObject.location + '</h2>');
    $("#destinationsContainer .col-md-4:last-child .destinationsCard").append('<img class="destinationImage">')
    $("#destinationsContainer .col-md-4:last-child .destinationsCard img").attr("src", lastObject.imageURL)
    $("#destinationsContainer .col-md-4:last-child .destinationsCard").append('<p class="landmarks">' + lastObject.landmarks + '</p>');
    $("#destinationsContainer .col-md-4:last-child .destinationsCard").append('<p class="season">' + lastObject.season + '</p>');
    $("#destinationsContainer .col-md-4:last-child .destinationsCard").append('<p class="notes">' + lastObject.info + '</p>');
    $("#destinationsContainer .col-md-4:last-child .destinationsCard").append('<button class="delete btn">Delete</button>');

    $(".delete").click(function() {
      $(this).parent().parent().hide();
    })

    $(".col-md-4:last-child > .destinationsCard > .clickToExpand").click(function() {
      $(this).parent().find('img, p, button').slideToggle();
      $(this).parent().find('img, button').toggleClass("centerBlock");
    });
  };

  $("#destinationsForm").submit(function(event) {
    event.preventDefault();
    console.log("I'm alive!");
    createNewDestination();
    displayNewDestination();



  });
  });
