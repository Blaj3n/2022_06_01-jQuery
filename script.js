// window.addEventListener("load", function(){

// })

$(function () {
  console.log("valami");
  $(".tartalom").html("<div>Első div tartalma")
  $(".tartalom").append("<div>Második div tartalma")
  let tartalom =$(".tartalom").text()
  console.log(tartalom)
});
