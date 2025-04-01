const div = document.getElementById("fondoServicios");
const menu1 = document.getElementById("servicemenu1");
const menu2 = document.getElementById("servicemenu2");
const menu3 = document.getElementById("servicemenu3");
const menu4 = document.getElementById("servicemenu4");
const menu5 = document.getElementById("servicemenu5");
const menu6 = document.getElementById("servicemenu6");
const menu7 = document.getElementById("servicemenu7");

menu1.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover4");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.add("hover1"); // Agrega la clase para cambiar la imagen
});

menu1.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});

menu2.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover1");
  div.classList.remove("hover4");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.add("hover2"); // Agrega la clase para cambiar la imagen
});

menu2.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});

menu3.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover1");
  div.classList.remove("hover4");
  div.classList.remove("hover2");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.add("hover3"); // Agrega la clase para cambiar la imagen
});

menu3.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});

menu4.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover1");
  div.classList.remove("hover3");
  div.classList.remove("hover2");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.add("hover4"); // Agrega la clase para cambiar la imagen
});

menu4.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});

menu5.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover1");
  div.classList.remove("hover3");
  div.classList.remove("hover2");
  div.classList.remove("hover4");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.add("hover5"); // Agrega la clase para cambiar la imagen
});

menu5.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});

menu6.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover1");
  div.classList.remove("hover3");
  div.classList.remove("hover2");
  div.classList.remove("hover4");
  div.classList.remove("hover5");
  div.classList.remove("hover7");
  div.classList.add("hover6"); // Agrega la clase para cambiar la imagen
});

menu6.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});

menu7.addEventListener("mouseover", function () {
  console.log("Mouse sobre el div");
  div.classList.remove("hover1");
  div.classList.remove("hover3");
  div.classList.remove("hover2");
  div.classList.remove("hover4");
  div.classList.remove("hover6");
  div.classList.remove("hover5");
  div.classList.add("hover7"); // Agrega la clase para cambiar la imagen
});

menu7.addEventListener("mouseout", function () {
  console.log("Mouse fuera del div");
  div.classList.remove("hover1");
  div.classList.remove("hover2");
  div.classList.remove("hover3");
  div.classList.remove("hover5");
  div.classList.remove("hover6");
  div.classList.remove("hover7");
  div.classList.remove("hover4"); // Quita la clase para volver a la imagen inicial
});
