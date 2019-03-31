// Random paragraph

newParagraph = (index) => {
  let i;
  let x = document.getElementsByClassName("paragraph");
  if (index > x.length) { index = 1 }
  if (index < 1) { index = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[Math.floor(Math.random() * x.length)].style.display = "block";
}
newParagraph()

// SECTION TO ADD NEW PROJECTS //////////////

let projectIndexes = {
  project1: 1,
  project2: 1,
  project3: 1,
  project4: 1,
  project5: 1,
  // project6: 1,   // Remove // from the beginning of line to unlock it
  // project7: 1,
  // project8: 1,
  // project9: 1,
}
showDivs("project1", projectIndexes.project1);
showDivs("project2", projectIndexes.project2);
showDivs("project3", projectIndexes.project3);
showDivs("project4", projectIndexes.project4);
showDivs("project5", projectIndexes.project5);
// showDivs("project6", projectIndexes.project6);   // Remove // from the beginning of line to unlock it
// showDivs("project7", projectIndexes.project7);
// showDivs("project8", projectIndexes.project8);
// showDivs("project9", projectIndexes.project9);

// Image library 
function plusDivs(project, n) {
  showDivs(project, projectIndexes[project] += n);
}

function showDivs(project, index) {
  let i;
  let x = document.getElementById(project).getElementsByClassName("slides");
  if (index > x.length) { index = 1 }
  if (index < 1) { index = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[index - 1].style.display = "block";
  document.getElementById(project).getElementsByClassName("pagination")[0].innerText = index + ' / ' + x.length;
  projectIndexes[project] = index;
  let elements = document.getElementById(project).querySelector('.imgslide').children;
  let imgNames = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].src !== undefined) {
      imgNames.push(elements[i].alt);
      document.getElementById(project).getElementsByClassName("img-name")[0].innerText = imgNames[index - 1];
    }
  }
}
