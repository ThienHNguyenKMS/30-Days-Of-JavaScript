var listPlanet = [
  "earth",
  "jupiter",
  "mars",
  "mercury",
  "moon",
  "neptune",
  "pluto",
  "saturn",
  "uranus",
  "venus",
];
var listPlanetExt = ".png";

listPlanet.forEach((element, idx) => {
  let option = document.createElement("option");
  option.value = idx + 1;
  option.text = element.toUpperCase();
  document.getElementById("planet-select").appendChild(option);
});

function changePlanet() {
  let selectedBox = document.getElementById("planet-select");
  let selectedValue = selectedBox.options[selectedBox.selectedIndex].text;
  // console.log(selectedValue)
  let src = `images/${selectedValue}` + listPlanetExt;
  document.getElementsByClassName("planet-image")[0].src = src;
}

function calculatePlanet() {
  let mass = document.getElementById("mass").value;
  let selectedBox = document.getElementById("planet-select");
  let planetValue = parseFloat(selectedBox.options[selectedBox.selectedIndex].value);
  if (mass.trim() == "" || isNaN(mass)) {
    alert("Please input mass and mass must be a number");
    return;
  }
  if (isNaN(planetValue)){
    alert("Please select planet");
    return;
  }
  let weight = planetValue * mass;
  document.getElementById("planet-weight").textContent = Math.round(weight * 100) / 100
}
