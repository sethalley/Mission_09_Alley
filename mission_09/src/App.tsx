import React from "react";
import "./App.css";
import jsonData from "/Users/sethalley/Mission_09_Alley/mission_09/src/teams.json";

function Header() {
  return (
    <div>
      <h1>March Madness</h1>
      <p>Mission #9 | Seth Alley</p>
    </div>
  );
}

function SchoolList() {
  const teams = jsonData.teams;

  // Initialize an empty string to store the concatenated school names
  let schoolNamesString = "";

  // Iterate over each team and concatenate the school name to the string
  teams.forEach((team, index) => {
    // Add the school name to the string
    schoolNamesString += team.school;

    // If it's not the last team, add a comma and a space
    if (index < teams.length - 1) {
      schoolNamesString += ", ";
    }
  });

  return (
    <div>
      <h1>List of Schools:</h1>
      <p>{schoolNamesString}</p>
    </div>
  );
}

function SchoolCards() {
  const teams = jsonData.teams;

  return (
    <div>
      <h1>School Cards:</h1>
      {teams.map((team, index) => (
        <div key={index}>
          <h2>School Name: {team.school}</h2>
          <p>Mascot: {team.name}</p>
          <p>Abbreviation: {team.abbrev}</p>
          <p>City: {team.city}</p>
          <p>State: {team.state}</p>
          <hr /> {/* Adding a horizontal line between each team */}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <SchoolList />
      <br />
      <br />
      <SchoolCards />
    </div>
  );
}

export default App;
