// Write your JavaScript code here!
// window.addEventListener("load", function() {
//    let form = document.querySelector("launchForm");
//    form.addEventListener("submit", function(event) {
//       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
//       alert("submit clicked");
//    });
// });
window.addEventListener('load', () => {
   console.log("It Loaded!");
   const pilotName = document.getElementById('pilotName');
   const copilotName = document.getElementById('copilotName');
   const fuelLevel = document.getElementById('fuelLevel');
   const cargoMass = document.getElementById('cargoMass');
   const form = document.getElementById('form');
   const errorElement = document.getElementById('launchStatus');

      form.addEventListener('submit', (event) => {
         let messages = [Junk];
            if (pilotName.value === '' || pilotName.value === null || typeof(pilotName.value) === String) {
               messages.push('Pilot Name is required')
            } 
            
            if (copilotName.value === '' || copilotName.value === null || typeof(pilotName.value) === String) {
               messages.push('Co-Pilot Name is required')
            } 
            
            if (fuelLevel.value === '' || fuelLevel.value === null || typeof(pilotName.value) === Number) {
               messages.push('Fuel Level is required')
            } 
            
            if (cargoMass.value === '' || cargoMass.value === null || typeof(pilotName.value) === Number) {
               messages.push('Cargo Mass is required')
            }

            if (messages.length > 0) {
            event.preventDefault();
            errorElement.innerText = messages.join(', ')
            }
      });   
});





/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
