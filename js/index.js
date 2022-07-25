function doSearch(firstSearch) {
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "https://api.jetbrokers.io/api/gallery/projects/",
    data: JSON.stringify({
      organizationId: "u1RDEkTX",
      bestPriceTo:
        $("#bestPriceTo").val() === "" ? 0 : parseInt($("#bestPriceTo").val()),
      stage: $("#stage").val() === "" ? null : $("#stage").val(),
      dateOfDelivery:
        $("#dateOfDelivery").val() === "" ? null : $("#dateOfDelivery").val(),
      locality: $("#locality").val() === "" ? null : $("#locality").val(),
    }),
    success: function (response) {
      console.log(response)
      $("#result").html(response);
      var counter = 0;
      for (var key in response) {
        counter++;

        var stageFriendlyName = "";
        if (response[key].stage == "privateSale") {
          stageFriendlyName = "Venta Privada";
        }
        if (response[key].stage == "deliveryReady") {
          stageFriendlyName = "Entrega Inmediata";
        }
        if (response[key].stage == "null") {
          stageFriendlyName = "";
        }
        if (response[key].stage == "green") {
          stageFriendlyName = "Verde";
        }
        if (response[key].stage == "white") {
          stageFriendlyName = "Blanco";
        }
        var projectHTML = "";
        projectHTML += `<div class="card" style="width: 18rem;" >`;
        projectHTML += `<img class="card-img-top" src="https://api.jetbrokers.io/api/gallery/download/u1RDEkTX/${response[key].cover} "/>`;
        projectHTML += `<div class="card-body">`;
        projectHTML += `<span><h5 class="card-title text-secondary">${response[key].locality}</h5></span>`;
        projectHTML += `<div class="card-desc">`;
        projectHTML += `<h5 class="font-weight-bold text-primary text-uppercase" style="overflow:hidden; white-space:nowrap; text-overflow: ellipsis;"> ${response[key].name}</h5>`;
        projectHTML += `<span class="text-left">Constructora : ${response[key].developer}</span><br>`;
        projectHTML += `<span class="text-left"> Estado: ${stageFriendlyName}</span><br>`;
        projectHTML += `<div class="mt-2" style="padding: 10px; background-color: #eee;">`;
        projectHTML += `<center><i class="bx bx-purchase-tag"></i> DESDE: &nbsp;&nbsp;&nbsp;&nbsp; ${response[key].bestPrice} UF</center>`;
        projectHTML += ` </div>`;
        projectHTML += `<br>`;
        projectHTML += `<div style="padding: 10px; background-color: #eee;">`;
        projectHTML += `<center><i class="bx bx-money"></i> RESERVA: &nbsp;&nbsp;&nbsp;&nbsp; ${String(
          response[key].reservaCLP
        ).replace(/(.)(?=(\d{3})+$)/g, "$1,")}</center>`;
        projectHTML += ` </div>`;
        projectHTML += `<br>`;
        projectHTML += `<center>Entrega: ${response[key].dateOfDelivery}</center>`;
        projectHTML += `<br>`;
        projectHTML += ` <div class="text-center"><a type="button" class="btn btn-info py-2 px-3" href="https://jetgallery.jetbrokers.io/u1RDEkTX/${response[key].id}/u4POo3wO/" target="_blank">Más Información</a></div> `;
        projectHTML += ` </div>`;
        projectHTML += `</div>`;
        projectHTML += ` </div>`;

        //update the search
        if (firstSearch == 0) {
          $(projectHTML).appendTo("#projects_results");
        } else {
          if (counter <= 100) {
            $(projectHTML).appendTo("#projects_results");
          }
        }
      }
      //update the proyects counter
      $("#projectsCounter1").html(counter);  //this updates on every search, so the search results total gets updated
      if (firstSearch == 1) {
        //only update on first search, so the total number of proyects show up
        $("#projectsCounter2").html(counter);
      }
    },
  });
}

// const d = document;
// function searchFilters(input, selector) {
//   d.addEventListener("keyup", (e) => {
// if(e.target.matches(input)){
//   d.querySelector(selector).forEach((el)=>
//   el.textContent.toLowerCase().includes(e.target.value)
//   ?el.classList.remove("filter")
//   :el.classList.add("filter")
//   );
// }
//   });
// }


$(document).ready(function () {
  doSearch(1);
});
