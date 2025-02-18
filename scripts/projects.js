$(document).ready(function () {
  var originalOrder = $(".showcase-card").toArray();

  $("#sortYear").change(function () {
    var sortOrder = $(this).val();
    var projects = $(".showcase-card").toArray();

    if (sortOrder === "none") {
      $(".showcase-container").empty().append(originalOrder);
      return;
    }

    projects.sort(function (a, b) {
      var yearA = parseInt($(a).data("year"));
      var yearB = parseInt($(b).data("year"));

      return sortOrder === "asc" ? yearA - yearB : yearB - yearA;
    });

    $(".showcase-container").empty().append(projects);
  });
});