const flashCards = document.querySelector(".flashcards");
const flashContainerBox = document.querySelector(".flashcontainer-box");
const word = document.getElementById("word");
const meaning = document.getElementById("meaning");
const del = document.querySelector(".del");
const cancel = document.querySelector(".cancel");
const addcard = document.querySelector(".addcard");
const addNew = document.querySelector(".addnew");
const play = document.querySelector(".play");

console.log(flashContainerBox);

////getitem or empty array
let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log(contentArray);

////to show the flaschcrads everytime
contentArray.forEach(flashDiv);

///delete card and clear local storage
del.addEventListener("click", function () {
  localStorage.clear();
  flashCards.innerHTML = "";
  contentArray = [];
});

///close flash container box
cancel.addEventListener("click", function () {
  flashContainerBox.style.display = "none";
});

////add new card
addNew.addEventListener("click", function () {
  flashContainerBox.style.display = "block";
});

///function displaying local storage data in a div
function flashDiv(text) {
  let div = document.createElement("div");
  let divWord = document.createElement("h2");
  let divMean = document.createElement("h2");
  div.className = "flashcard";

  divWord.setAttribute(
    "style",
    "border-top:1px solid red; padding: 15px; margin-top:30px"
  );
  divWord.innerHTML = text.word;

  divMean.setAttribute("style", "text-align:center; display:none; color:red");
  divMean.innerHTML = text.meaning;

  div.appendChild(divWord);
  div.appendChild(divMean);
  div.addEventListener("click", function () {
    if (divMean.style.display == "none") {
      divMean.style.display = "block";
    } else {
      divMean.style.display = "none";
    }
  });

  flashCards.appendChild(div);
}

addcard.addEventListener("click", function () {
  let flashInfo = {
    word: word.value,
    meaning: meaning.value,
  };

  contentArray.push(flashInfo);
  localStorage.setItem("items", JSON.stringify(contentArray));
  flashDiv(contentArray[contentArray.length - 1]);
  word.value = "";
  meaning.value = "";
});

play.addEventListener("click", function (text) {
  flashContainerBox.style.display = "none";
  flashCards.innerHTML = "";
  let div = document.createElement("div");
  let divWord = document.createElement("h2");
  let divMean = document.createElement("h2");
  div.className = "flashcard";
  div.style.width = "80%";
  const getLocal = localStorage.getItem("items");
  const parsedGet = JSON.parse(getLocal);
  parsedGet.forEach((ele) => {
    console.log(ele);
  });
  div.appendChild(divWord);
  div.appendChild(divMean);

  divMean.innerHTML = "goofdfd";
  flashCards.appendChild(div);
});

const lorz = [];
lorz.push("mango");
console.log(lorz);
