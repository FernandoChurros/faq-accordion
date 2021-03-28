const askTitle = document.querySelectorAll('.title_ask_faq');
const askParagrafo = document.querySelectorAll('.ask_paragrafo');

for (let i = 0; i < askParagrafo.length; i++) {
   askTitle[i].onclick = () => { askParagrafo[i].classList.toggle('active'); }
}