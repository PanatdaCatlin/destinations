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
    console.log(lastObject);

    $("div .destinationName").text(lastObject.location);
    $("div img").attr("src", lastObject.imageURL)
    $("div .landmarks").text(lastObject.landmarks);
    $("div .season").text(lastObject.season);
    $("div .notes").text(lastObject.info);

  };

  $("#destinationsForm").submit(function(event) {
    event.preventDefault();
    console.log("I'm alive!");
    createNewDestination();
    displayNewDestination();



  });
});
