	const circle = document.querySelector(".circle");
	const move = (e) => {
		console.log(e.keyCode)  //keyCode- pokazuje cyfry na stronie za pomocą (badaj)

		switch (e.keyCode){
			case 37:
				circle.style.left = circle.offsetLeft - 25 + "px";
			break;
			case 38:
				circle.style.top = circle.offsetTop - 25 + "px";
			break;
			case 39:
				circle.style.left = circle.offsetLeft + 25 + "px";
			break;
			case 40:
				circle.style.top = circle.offsetTop + 25 + "px";
			break;

			}
		}
	window.addEventListener("keydown", move)





//37 to w lewo
//38 to w górę
//39 to w prawo
//40 to w dół