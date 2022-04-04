
document.querySelectorAll("a[href^='#'").forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const destination = document.querySelector(href).offsetTop;
    scroll({
      top: destination,
      behavior: "smooth"
    });
  });
});

const listOfImages = document.getElementsByTagName('img');
const listOfRotateDivs = document.getElementsByClassName("rotateDiv");
[...listOfRotateDivs].forEach((elem, i) => {
  elem.style.width = (listOfImages[i].naturalWidth - 3) + "px";
  elem.style.height = (listOfImages[i].naturalHeight - 4) + "px";
});

const rotateDes = [
  {
    name: "Gingerbell",
    age: "Age: 1 year 3 months",
    height: "Height: 1' 2\"",
    favFood: "Favorite Food: CatFood"
  }, {
    name: "Boss",
    age: "Age: 1 year 8 months",
    height: "Height: 1' 3\"",
    favFood: "Favorite Food: Vegan CatFood"
  }, {
    name: "Solo",
    age: "Age: 1 year 1 month",
    height: "Height: 1' 1\"",
    favFood: "Favorite Food: Rats and meat"
  }
];

document.querySelectorAll('.rotateBack').forEach((elem, i) => {
  elem.querySelector('h1').textContent = rotateDes[i].name;
  let allTxt = elem.querySelectorAll('p');
  allTxt[0].innerText = rotateDes[i].age;
  allTxt[1].innerText = rotateDes[i].height;
  allTxt[2].innerText = rotateDes[i].favFood;
});

// moving background
const moveBgDiv = document.querySelector("#headContent");
moveBgDiv.addEventListener("mousemove", (e) => {
  var rect = e.currentTarget.getBoundingClientRect(),
    offsetX = e.clientX - rect.left,
    offsetY = e.clientY - rect.top;
  moveBgDiv.style.backgroundPositionX = -offsetX / 3 + "px";
  moveBgDiv.style.backgroundPositionY = -offsetY / 2 + "px";
});

let bossDiv = document.querySelector('.thisclss');
bossDiv.addEventListener('mousemove', e => {
  let rect = e.currentTarget.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  bossDiv.style.setProperty('--x', x + 'px');
  bossDiv.style.setProperty('--y', y + 'px');
});