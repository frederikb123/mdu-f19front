"use strict";

let _users = [
  {
    name: "Megan Wong",
    age: "43",
    address: "Oak St 4023",
    city: "Belmont",
    country: "Canada",
    gender: "female",
    email: "megan.wong@example.com",
    phone: "679-188-3922",
    picture: "https://randomuser.me/api/portraits/women/89.jpg"
  },
  {
    name: "Gunhild Reiff",
    age: "51",
    address: "Parkstraße 7229",
    city: "Berka/Werra",
    country: "Germany",
    gender: "female",
    email: "gunhild.reiff@example.com",
    phone: "0247-9169313",
    picture: "https://randomuser.me/api/portraits/women/93.jpg"
  },
  {
    name: "Tristan Chow",
    age: "56",
    address: "Dufferin St 4647",
    city: "Port Elgin",
    country: "Canada",
    gender: "male",
    email: "tristan.chow@example.com",
    phone: "733-090-3382",
    picture: "https://randomuser.me/api/portraits/men/70.jpg"
  },
  {
    name: "Dale Mccoy",
    age: "30",
    address: "Grafton Street 6761",
    city: "Ballinasloe",
    country: "Ireland",
    gender: "male",
    email: "dale.mccoy@example.com",
    phone: "061-611-9302",
    picture: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    name: "Purificacion Rojas",
    age: "51",
    address: "Calle del Arenal 5252",
    city: "Granada",
    country: "Spain",
    gender: "female",
    email: "purificacion.rojas@example.com",
    phone: "061-611-9302",
    picture: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Sebastian Nielsen",
    age: "57",
    address: "Lundevej 52",
    city: "Randers Nv",
    country: "Denmark",
    gender: "male",
    email: "sebastian.nielsen@example.com",
    phone: "36753760",
    picture: "https://randomuser.me/api/portraits/men/53.jpg"
  }
];

console.log(_users);


// Adds persons to the DOM by giving parameter, persons
function appendPersons(persons) {
  for (let index = 0; index < persons.length; index++) { // looping trough all persons
    let person = persons[index]; // save the exact person we are look at in the local varianle person

    //creating person data, HTML tags and adding to the DOM, the element #gridPersons
    document.querySelector("#grid-persons").innerHTML += `
      <article onclick="showDetailView(${index})">
        <h4>${person.name}</h4>
      </article>
      `;
  }
}

// call appendPersons with the parameter _users
appendPersons(_users);

// Show the details view of the user
function showDetailView(index){
  let selectedUser = _users[index];
  console.log(selectedUser);
  
  // todo: display user details

  // navigate to the detail view
  // navigateTo("detail-view");
}