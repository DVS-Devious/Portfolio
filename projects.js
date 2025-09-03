const PROJECTS_DATA = {    
    "Click Game" : {
        "Description" : "A clicker game to play when you are bored.",
        "Image" : "Click Icon.png",
        "Link" : "ClickGame/index.html",
    },
    "Roblox Game" : {
        "Description" : "An incremental game about getting the biggest gorilla.",
        "Image" : "Gorilla Game Icon.png",
        "Link" : "https://www.roblox.com/games/74112807754242/1-Gorilla-Size-Every-Second",
    },
};
const PROJECTS_GRID = document.getElementById("ProjectsGrid");

function CreateProject(projectName, projectData) {
    let projectCard = document.createElement("div");

    let projectImageDiv = document.createElement("div");
    let projectImage = document.createElement("img");

    let projectDetails = document.createElement("div");
    let projectNameText = document.createElement("text");
    let projectDescription = document.createElement("text");

    projectCard.className = "ProjectCard";
    projectImageDiv.className = "ProjectImage";
    projectImage.src = "images/" + projectData["Image"];

    projectDetails.className = "ProjectDetails";
    projectNameText.className = "ProjectName";
    projectDescription.className = "ProjectDescription";

    projectNameText.textContent = projectName;
    projectDescription.textContent = projectData["Description"];

    projectDetails.appendChild(projectNameText);
    projectDetails.appendChild(projectDescription);

    projectImageDiv.appendChild(projectImage);

    projectCard.appendChild(projectImageDiv);
    projectCard.appendChild(projectDetails);

    PROJECTS_GRID.appendChild(projectCard);

    projectCard.addEventListener("click", function(){
        window.open(projectData["Link"]);
    })
}

for (let projectName in PROJECTS_DATA) {
  CreateProject(projectName, PROJECTS_DATA[projectName]);
}

