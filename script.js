// window.addEventListener("load", function(){

// })

$(function () {
  console.log("valami");
  $(".tartalom").html("<div>Első div tartalma");
  $(".tartalom").append("<div>Második div tartalma");
  $(".tartalom").after("<img>");
  $(".tartalom").after("<img>");
  $(".tartalom").after("<img>");
  $(".tartalom").after("<img>");
  //   The eq() method returns an element with a specific index number of the selected elements.
  // The index numbers start at 0, so the first element will have the index number 0 (not 1).
  $("img").eq(0).attr("src", "img/motivation.jpg");
  $("img").css({ width: "50%", height: "50%", border: "1px solid gray" });
  $(".tartalom div").css("border", "1px solid gray");

  $(".tartalom div").on("click", function () {
    //az eseményt kiváltó elemre mutat $(this)
    console.log($(this));
    $(this).toggleClass("kiemel");
  });

  let tartalom = $(".tartalom").text();
  console.log(tartalom);
  //   document.getElementById("valami").html("Jsben írtam ide")
});
