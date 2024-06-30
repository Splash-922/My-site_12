const lightThemeBtn = document.getElementById('light')
const darkThemeBtn = document.getElementById('dark')
const html = document.querySelector('html')


const eventFont = document.getElementById('eventTitle')


function switch_font_size(){
    eventFont.style.fontSize = "90px";
}
function how_are_you(){
    prompt("Как дела?")
}
function delat(){
    prompt("Что делаешь?")
}
function date(){
    prompt("Какая сегодня дата?")
}
function changeThemeToDark(){
    html.setAttribute("theme", "dark");
    eventTitle.style.color = "white"
}
function changeThemeToLight(){
    html.setAttribute("theme", "light");
}

lightThemeBtn.onclick = changeThemeToLight
darkThemeBtn.onclick = changeThemeToDark

const titleCreator = document.getElementById('titleCreator');
const addTitle = document.getElementById('addTitle');
const imgCreator = document.getElementById('imgCreator');
const addImage = document.getElementById('addImage');
const textCreator = document.getElementById('textCreator');
const addText = document.getElementById('addText');



const projectSection = document.getElementById('project');
const projectTitle = document.getElementById('projectTitle');
const projectText = document.getElementById('projectText');
const projectImg = document.getElementById('projectImg');





function addTitleFunc() {
    projectTitle.textContent = titleCreator.value;
    titleCreator.value = '';
};


function addTextFunc() {
    projectText.textContent = textCreator.value;
    projectText.style.backgroundColor = 'darkslategrey';
    textCreator.value = '';
};

function addImgFunc() {
    projectImg.style.backgroundImage = imgCreator.value;
    imgCreator.value = '';
}





addImage.onclick = addImgFunc;

addText.onclick = addTextFunc;

addTitle.onclick = addTitleFunc;