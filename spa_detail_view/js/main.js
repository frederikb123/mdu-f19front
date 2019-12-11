"use strict";

let _users;
let _selectedUser;

async function loadData() {
  let response = await fetch("https://randomuser.me/api/?results=9");
  let jsonData = await response.json();
  _users = jsonData.results;
  appendPersons(jsonData.results);
}

loadData();

// Adds persons to the DOM by giving parameter, persons
function appendPersons(persons) {
  for (let index = 0; index < persons.length; index++) { // looping trough all persons
    let person = persons[index];
    //creating person data, HTML tags and adding to the DOM, the element #gridPersons
    document.querySelector("#grid-persons").innerHTML += `
      <article onclick="showDetailView(${index})">
      <img src="${person.picture.large}">
      <h4>${person.name.first} ${person.name.last}</h4>
      <p><a href="mailto:${person.email}">${person.email}</a></p>
      </article>
      `;
  }
}

function showDetailView(index){
  _selectedUser = _users[index];
  document.querySelector("#detail-view").innerHTML = `
  <header class="topbar">
      <h2>${_selectedUser.name.first} ${_selectedUser.name.last}</h2>
    </header>
  <article>
      <img src="${_selectedUser.picture.large}">
      <h4>${_selectedUser.name.first} ${_selectedUser.name.last}</h4>
      <p><a href="mailto:${_selectedUser.email}">${_selectedUser.email}</a></p>
      </article>
  `;
  navigateTo("detail-view");
}

// if no selected user navigate to home
if(!_selectedUser){ 
  navigateTo("home");
}