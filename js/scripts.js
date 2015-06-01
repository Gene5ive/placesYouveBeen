$(document).ready(function() {

  $("#add-detail").click(function() {
    $("#new-details").append('<div class="form-group">' + '<div class="new-detail input-group input-group-lg">' +
      '<span class="input-group-addon" id="sizing-addon1">Landmark</span>' +
      '<input type="text" class="form-control input-landmark" placeholder="Waterfall" aria-describedby="sizing-addon1">' +
      '<span class="input-group-addon" id="sizing-addon1">Date</span>' +
      '<input type="text" class="form-control input-date" placeholder="Someday" aria-describedby="sizing-addon1">' +
      '<span class="input-group-addon" id="sizing-addon1">Notes</span>' +
      '<input type="text" class="form-control input-notes" placeholder="Awesome" aria-describedby="sizing-addon1">' +
    '</div>' + '</div>');
  });

  $("form#new-place").submit(function (event) {
    event.preventDefault();

    var inputtedLocation = $("input#input-location").val();
    var newPlace = { location: inputtedLocation, details: [] };

    $(".new-detail").each(function() {
      var inputtedLandmark = $(this).find("input.input-landmark").val();
      var inputtedDate = $(this).find("input.input-date").val();
      var inputtedNotes = $(this).find("input.input-notes").val();

      var newDetail = { landmark: inputtedLandmark, date:  inputtedDate, notes: inputtedNotes };
      newPlace.details.push(newDetail);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function () {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.location);
      $(".location").text(newPlace.location);

      $("ul#details").text("");
      newPlace.details.forEach(function(detail) {
        $("ul#details").append("<li>" + detail.landmark + ", " + detail.date + ", " + detail.notes + "</li>");
      });
    });

    $("input#input-location").val("");
    $("input.input-landmark").val("");
    $("input.input-date").val("");
    $("input.input-notes").val("");

    $("#new-details").empty();
    $("#new-details").append('<div class="form-group">' + '<div class="new-detail input-group input-group-lg">' +
      '<span class="input-group-addon" id="sizing-addon1">Landmark</span>' +
      '<input type="text" class="form-control input-landmark" placeholder="Waterfall" aria-describedby="sizing-addon1">' +
      '<span class="input-group-addon" id="sizing-addon1">Date</span>' +
      '<input type="text" class="form-control input-date" placeholder="Someday" aria-describedby="sizing-addon1">' +
      '<span class="input-group-addon" id="sizing-addon1">Notes</span>' +
      '<input type="text" class="form-control input-notes" placeholder="Awesome" aria-describedby="sizing-addon1">' +
    '</div>' + '</div>');
  });

});
