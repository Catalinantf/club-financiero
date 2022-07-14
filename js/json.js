$(document).ready(function () {
    // const arrProject = ["ceePjRu7", "WC9WAdKV", "l35NuozK", "gT5ZS5V5", "wv0ZYS6Y", "VKV38nNk", "6lvo0IgP" , "WeedMjzb", "HmS0HtwI", "SXT9erXD", "a3tteY6a", "LJoyNzRo", "TcBNfm9h", "iLDmNFZ6", "M51ACDQD", "BYPUYbP3", "ebssA6Ar", "D0OC39cj", "N0u7IPch", "5vsdB050", "7gJYjmt2", "we9g6omR", "CQiYjB4k", "vKcK56YM", "bBoA58Ne", "JGXlloxF", "NQADAVpd", "7dj12KVV", "BnWU73VV", "daJWwIDb", "lXci4652", "aaYytcy8", "8its7K0a", "ZZNNYKPD", "MjS1J7Ee", "BLit9o1o", "cn8ZRW0K", "7ZlisBSM", "rU2r4e0A", "RAgLW2gH", "ZWRQ4lOO", "X9VhLBC5", "pSCrhdNs", "ZhMjwpDO", "uslloC4w", "g9xCcZlf", "26b4xf9O", "z7q5pwGB", "pLivLTJ1", "iWCMXB1v", "NlSJ33af", "DzFczHjp", "79dhGGoq", "Kbv3taRu", "TPWAjR3X", "A4qAkbdC", "I9rbgcL7", "aTcJraro", "wpe1UnOH", "Cb2aSjPa", "UferWM5v", "zeGTMzSe", "fhUvVmf7", "994EcrrQ", "twDajkVT"];
  
    callApi(arrProject);
  });
  
  async function callApi(projects){
    for (let i = 0; i < projects.length; i++) {
      $.ajax(`https://api.jetbrokers.io/api/gallery/details/u1RDEkTX/${projects[i]}/u4POo3wO`)
      .done(function (data) {
        // probaPintarCard(data);
      });
    }
  };
  
  function probaPintarCard(project) {
    console.log(project);

    cardProject = project.name;
    $('#card-propiedades').append(`
    <div class="card" style="width: 18rem">
 
    <div class="card-body">
      <h5 class="card-title" id="nombre">${project.name}</h5>
      <p class="card-text" id="constructora">${project.developerName}</p>
      <p class="card-text" id="comuna">${project.locality}</p>
      <p class="card-text" id="fecha-entrega">${project.dateOfDelivery} ${project.yearOfDelivery}</p>
      <p class="card-text" id="precio-desde">Reserva <br> $${project.reserveCLP}</p>
      <p class="card-text" id="reserva">Desde <br> $${project.apartmentFrom} UF</p>
 
    </div>
    </div>`);

  };


// console.log("first")

//   let allprojectId;
//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: `https://api.jetbrokers.io/api/gallery/details/u1RDEkTX/${element}/u4POo3wO`,
//   }).done(function (data) {
//     probaPintarCard(data);
//     // console.log(data);
//   });
// });
//   let projectId = ["ceePjRu7", "WC9WAdKV", "l35NuozK", "gT5ZS5V5", "wv0ZYS6Y", "VKV38nNk"];

//   allprojectId= projectId.forEach((element) => console.log(element));
  
  // for (let i = 0; i < array.length; i++) {
  //   allprojectId+=
  //   `https://api.jetbrokers.io/api/gallery/details/u1RDEkTX/${element}/u4POo3wO`
  // }

   
// console.log(allprojectId)

//   function probaPintarCard(project) {
//     const cardProject = $("#card-propiedades");
//     cardProject.html(`
//      <div class="card" style="width: 18rem">
  
//      <div class="card-body">
//        <h5 class="card-title" id="nombre">${project.name}</h5>
//        <p class="card-text" id="constructora">${project.developerName}</p>
//        <p class="card-text" id="comuna">${project.locality}</p>
//        <p class="card-text" id="fecha-entrega">${project.dateOfDelivery} ${project.yearOfDelivery}</p>
//        <p class="card-text" id="precio-desde">Reserva <br> $${project.reserveCLP}</p>
//        <p class="card-text" id="reserva">Desde <br> $${project.apartmentFrom} UF</p>
  
//      </div>
//      </div>`);
//   };


 // function renderProjectCard(project) {
  // const imagen = document.getElementById("imagen");
  //   const nombre = $("#nombre");

  //   const constructora = $("#constructora");
  //   const comuna = $("#comuna");
  //   const fechaEntrega = $("#fecha-entrega");
  //   const precioDesde = $("#precio-desde");
  //   const reserva = $("#reserva");
  //   const descripcion = $("#descripcion");

  //   imagen.setAttribute("src", project.files[0].id+'.png');
  // nombre.innerHTML = `${project.name}`;
  // nombre.innerHTML = `${project.files[0].id + '.png'}`;
  //   nombre.html(project.name);
  //   constructora.html(project.developerName);
  //   comuna.html(project.locality);
  //   fechaEntrega.html(`${project.dateOfDelivery} ${project.yearOfDelivery}`);
  //   precioDesde.html(`Reserva <br> $${project.reserveCLP}`)
  //   reserva.html(`Desde <br> $${project.apartmentFrom} UF`)
  //   descripcion.html(project.description);
  // };

  // //---------------
  // for (let i = 0; i < allprojectId; i++) {
  //   cardProject += `
  //     <div class="card" style="width: 18rem">

  //     <div class="card-body">
  //       <h5 class="card-title" id="nombre">${project.name}</h5>
  //       <p class="card-text" id="constructora">${project.developerName}</p>
  //       <p class="card-text" id="comuna">${project.locality}</p>
  //       <p class="card-text" id="fecha-entrega">${project.dateOfDelivery} ${project.yearOfDelivery}</p>
  //       <p class="card-text" id="precio-desde">Reserva <br> $${project.reserveCLP}</p>
  //       <p class="card-text" id="reserva">Desde <br> $${project.apartmentFrom} UF</p>

  //     </div>
  //     </div>`;
  //   document.getElementById("card-propiedades").innerHTML = cardProject
  // };


/* <p class="card-text" id="descripcion"></p>
       <img src="..." class="card-img-top" alt="..." id="iamgen" />
<a href="#" class="btn btn-primary">Go somewhere</a> */