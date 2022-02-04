const squares = document.querySelectorAll('.square');
const hand = [];


const squareHandler = (e) => {
	const piece = e.target;
	if (piece.innerHTML === "" && hand.length !== 0){
		piece.innerHTML = hand.pop();
		hand = [];
	} else if (piece.innerHTML !== "" && hand.length === 0) {
		console.log(piece.innerHTML);
		hand.push(piece.innerHTML);
		piece.innerHTML = "";
	}
};

squares.forEach( square => {
	square.addEventListener('click', squareHandler)
});
