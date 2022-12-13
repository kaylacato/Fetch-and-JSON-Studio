window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(json){
        const container = document.getElementById("container");
        for (let i=0; i < json.length; i++){
        container.innerHTML +=
        `
        <div class ="astornaut">
            <h1>${json[i].firstName} ${json[i].lastName}</h1>
            <ul>
            <li>Hours in space: ${json[i].hoursInSpace}</li>
            <li>Active: ${json[i].active}</li>
            <li>Skills: ${json[i].skills}</li>
            </ul>
            <img class ="avatar" src=${json[i].picture} height=250 position></img>
        </div>
            `
        }
      })
    })
})