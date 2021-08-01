const main = document.querySelector('.grid-container');
const fragment = document.createDocumentFragment();

function colocarImagen(){
	for(let i = 0; i < 56; i++){
		const img = document.createElement('IMG');
		img.setAttribute('src',`img/img${Math.round(Math.random()*20+1)}.jpg`);
		if(img.outerHTML == `<img src="img/img6.jpg">` || img.outerHTML == `<img src="img/img12.jpg">`){
			img.classList.add('img-row');
		}else if(img.outerHTML == `<img src="img/img21.jpg">` || img.outerHTML == `<img src="img/img20.jpg">` || img.outerHTML == `<img src="img/img11.jpg">`){
			img.classList.add('img-rowcol');
		}else {
			img.classList.add('img');
		}
		fragment.appendChild(img);
	}
}
colocarImagen();
main.appendChild(fragment);
