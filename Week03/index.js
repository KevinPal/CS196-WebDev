

function mul3(list) {
	return list.map(e => 3*e);
}

function concat(list) {
	return list.reduce( (p, e) => p + String(e)); 
}

console.log(concat( [1, 2, 3, 4]));

