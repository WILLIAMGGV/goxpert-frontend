// Script original para fondoServicios
const div = document.getElementById("fondoServicios");
const menu1 = document.getElementById("servicemenu1");
const menu2 = document.getElementById("servicemenu2");
const menu3 = document.getElementById("servicemenu3");
const menu4 = document.getElementById("servicemenu4");
const menu5 = document.getElementById("servicemenu5");
const menu6 = document.getElementById("servicemenu6");
const menu7 = document.getElementById("servicemenu7");

menu1.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
  div.classList.add("hover1");
});
menu1.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu2.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover1",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
  div.classList.add("hover2");
});
menu2.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu3.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
  div.classList.add("hover3");
});
menu3.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu4.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover5",
    "hover6",
    "hover7"
  );
  div.classList.add("hover4");
});
menu4.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu5.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover6",
    "hover7"
  );
  div.classList.add("hover5");
});
menu5.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu6.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover7"
  );
  div.classList.add("hover6");
});
menu6.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu7.addEventListener("mouseover", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6"
  );
  div.classList.add("hover7");
});
menu7.addEventListener("mouseout", function () {
  div.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

// Script duplicado para fondoServicios2
const div2 = document.getElementById("fondoServicios2");

menu1.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
  div2.classList.add("hover1");
});
menu1.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu2.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover1",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
  div2.classList.add("hover2");
});
menu2.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu3.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
  div2.classList.add("hover3");
});
menu3.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu4.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover5",
    "hover6",
    "hover7"
  );
  div2.classList.add("hover4");
});
menu4.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu5.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover6",
    "hover7"
  );
  div2.classList.add("hover5");
});
menu5.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu6.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover7"
  );
  div2.classList.add("hover6");
});
menu6.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});

menu7.addEventListener("mouseover", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6"
  );
  div2.classList.add("hover7");
});
menu7.addEventListener("mouseout", function () {
  div2.classList.remove(
    "hover1",
    "hover2",
    "hover3",
    "hover4",
    "hover5",
    "hover6",
    "hover7"
  );
});
