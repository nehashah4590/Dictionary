const wordEL = document.getElementById("word")
const searchWd = document.getElementById("searchWord")
const phoneTs = document.getElementById("phonetics")
const btns = document.querySelector(".btn")

// function fetchApi(word){
// 	let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word }`;
// }

 function submit(){
    let val = document.querySelector('#myText').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
	.then(response => response.json())
    .then(response => phoneTs.textContent = response[0].phonetics[0].text)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
    .then(response => response.json())
	.then(response => wordEL.textContent = response[0].meanings[0].definitions[0].definition)
	
	.catch(err => console.error(err));
 }

 
 
 
 document.querySelector('#myText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      submit();
      searchWd.textContent =document.querySelector('#myText').value
      btns.style.display = 'block';
    }
});

btns.addEventListener('click', function () {
    document.querySelector('#myText').value='';
    wordEL.textContent='';
    searchWd.textContent='';
    phoneTs.textContent='';
}, false);
