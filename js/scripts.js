$(document).ready(function() {
$("form#questions".submit(function(event) {
  var design = $("input:radio[id=design]:checked").val();
  var customers = $("input:radio[id=customers]:checked").val();
  var environment = $("input:radio[name=environment]:checked").val();
  var groups = $("input:radio[name=groups]:checked").val();
  var projects = $("input:radio[name=projects]:checked")
  var course;

    if (design === "yes" && environment === "startup") {
      if (project === "elaborate") {
      course = "Ruby/Rails";
    } else if (project === "mobile") {
      course = "Java";
    }
  }

  if (customers === "no" && company === "company") {
    if (design === "no") {
    course = "C#";
  } else if (design === "yes") {
    course = "CSS/Design";
  }
}

  if (design === "yes" && environment === "remotely") {
    if (projects === "small") {
    course = "PHP";
  } else if (projects === "elaborate") {
    course = "Ruby/Rails";
  }
}

alert (check)
  $("#course").text("Your best course match is " + course + "!");
    $("#course").show();

    event.preventDefault();


  });
});
