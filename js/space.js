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

        data.collection.items.forEach((item) => { // Recorremos cada elemento de data.collection.items
          const element = item.data[0]; // accedemos al primer elemento del objeto coleccion y accedemos al primer item

          const divCon = document.createElement("div"); // Crea un div para cada elemento
          divCon.classList.add("prueba");
          cont.appendChild(divCon);

          const name = document.createElement("p"); // Crea un parrafo para el nombre
          divCon.appendChild(name);
          name.textContent = element.title;

          const description = document.createElement("p"); // Crea parrafo para la descripcion y la fecha
          description.textContent = element.description;
          divCon.appendChild(description);

          const date = document.createElement("p");
          date.textContent = element.date_created;
          divCon.appendChild(date);

          const images = document.createElement("img"); // Crea imagen
          images.src = item.links[0].href;
          divCon.appendChild(images);
        });
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  });
});
