document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btnBuscar");
  const cont = document.getElementById("contenedor");
  const userInput = document.getElementById("inputBuscar");

  button.addEventListener("click", function () {
    
    cont.innerHTML = "";
    let x = userInput.value;
    const url = `https://images-api.nasa.gov/search?q=${x}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        data.collection.items.forEach((item) => {
          const element = item.data[0];

          const divCon = document.createElement("div");
          divCon.classList.add("prueba");
          cont.appendChild(divCon);

          const images = document.createElement("img");
          images.src = item.links[0].href;
          divCon.appendChild(images);

          const description = document.createElement("textarea");
          description.textContent = `${element.title}\n${element.description}`;
          divCon.appendChild(description);

          const date = document.createElement("p");
          date.textContent = element.date_created;
          divCon.appendChild(date);

        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  });
});
