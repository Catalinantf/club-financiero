function doSearch(firstSearch) {

  $.ajax({
     method: "POST",
     contentType: "application/json",
     url: "https://api.jetbrokers.io/api/gallery/projects/",
     data: 
     JSON.stringify({
       organizationId: "u1RDEkTX",
       bestPriceTo: ($("#bestPriceTo").val() === '' ? 0 : parseInt($("#bestPriceTo").val())),
       stage: ($("#stage").val() === '' ? null : $("#stage").val()),
       dateOfDelivery: ($("#dateOfDelivery").val() === '' ? null : $("#dateOfDelivery").val()),
       locality: ($("#locality").val() === '' ? null : $("#locality").val())
     }),
     success: function(response) {
       console.log(response)
       $("#result").html(response);
 ;
 
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
         projectHTML += `<div class="card m-2" style="width: 18rem;" >`;
         projectHTML += `<img src="https://api.jetbrokers.io/api/gallery/download/u1RDEkTX/${response[key].cover} ">`;
         projectHTML += `<div class="card-body">`;
         projectHTML += `<div class="card-img">`;
         projectHTML += `<span><h5 class="card-title">${response[key].locality}</h5></span>`;
         projectHTML += `</div>`;
         projectHTML += `<div class="card-desc">`;
         projectHTML += `<h3 style="height: 2.2em;"> ${response[key].name}</h3>`;
         projectHTML += `<p>Constructora : ${response[key].developer}</p>`;
         projectHTML += `<p> Estado: ${stageFriendlyName}</p>`;
         projectHTML += `<div style="padding: 10px; background-color: #eee;">`;
         projectHTML += `<center><i class="bx bx-purchase-tag"></i> DESDE: &nbsp;&nbsp;&nbsp;&nbsp; ${response[key].bestPrice} UF</center>`;
         projectHTML += ` </div>`;
         projectHTML += `<br>`;
         projectHTML += `<div style="padding: 10px; background-color: #eee;">`;
         projectHTML += `<center><i class="bx bx-money"></i> RESERVA: &nbsp;&nbsp;&nbsp;&nbsp; ${String(response[key].reservaCLP).replace(/(.)(?=(\d{3})+$)/g, '$1,')}</center>`;
         projectHTML += ` </div>`;
         projectHTML += `<br>`;
         projectHTML += `<center>Entrega: ${response[key].dateOfDelivery}</center>`;
         projectHTML += `<br>`;
         projectHTML += ` <div class="text-center"><button type="button" class="btn btn-info btn-sm">Más Información</button></div> `;
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
 //only update on first search, so the total number of proyects show up
         $("#projectsCounter2").html(counter); 
 
       
 
     },
   });
 }
 
 $(document).ready(function() {
   doSearch(1);
 });