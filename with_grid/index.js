const squares = document.querySelectorAll('.square');
const hand = [];


const squareHandler = (e) => {
	const piece = e.target;
	if (piece.innerHTML === ""){
		piece.innerHTML = hand.pop();
		hand = [];
	} else {
		console.log(piece.innerHTML);
		hand.push(piece.innerHTML);
		piece.innerHTML = "";
	}
};

squares.forEach( square => {
	square.addEventListener('click', squareHandler)
});
