"use strict";

// declaring teacher objects

// Birgitte
let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "72286316",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
};

// Gertie
let teacher2 = {
  name: "Gertie Margrethe Kolding Jensen",
  initials: "gkj",
  mail: "gkj@baaa.dk",
  phone: "72286349",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/iabpvdga/gertie-kolding.jpg"
};

let teacher3 = {
  name: "Kim Elkjær Marcher-Jepsen",
  initials: "kije",
  mail: "kije@baaa.dk",
  phone: "7228 6325",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg"
};

let teacher4 = {
  name: "Rasmus Cederdorff",
  initials: "race",
  mail: "race@baaa.dk",
  phone: "72286318",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Lecturer",
  department: "Multimediedesigner & Professionsbachelor i digital konceptudvikling",
  img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg"
};

// log objects to the developer console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);

// Appending objects to the DOM

// teacher1 - Birgitte
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "</article>";

//teacher2 - Gertie
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher2.img + "'>" +
  "<h3>" + teacher2.name + "</h3>" +
  teacher2.position + "<br>" +
  "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" +
  "</article>";

//teacher3 - Kim
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher3.img + "'>" +
  "<h3>" + teacher3.name + "</h3>" +
  teacher3.position + "<br>" +
  "<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" +
  "</article>";

//teacher4 - Rasmus
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher4.img + "'>" +
  "<h3>" + teacher4.name + "</h3>" +
  teacher4.position + "<br>" +
  "<a href='mailto:" + teacher4.mail + "'>" + teacher4.mail + "</a>" +
  "</article>";