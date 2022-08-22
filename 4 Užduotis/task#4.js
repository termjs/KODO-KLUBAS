// const testmatrix = [['Z', 'K', 'T', 'M', 'G'], ['A', 'B', 'C', 'D', 'E'], ['Y', 'S', 'R', 'Q', 'X'], ['L', 'J', 'H', 'P', 'O'], ['A', 'B', 'Y', 'J', 'P']];

// const matrix = [['A', 'B', 'C', 'D', 'S'],
//                 ['F', 'Z', 'H', 'I', 'J'],
//                 ['K', 'L', 'M', 'N', 'O'],
//                 ['P', 'Q', 'T', 'E', 'R'],
//                 ['U', 'V', 'W', 'X', 'G']];

// const matrix1 = [['A', 'Z', 'C', 'D', 'O'], ['F', 'G', 'H', 'J', 'I'], ['K', 'V', 'M', 'N', 'T'], ['P', 'Q', 'R', 'E', 'S'], ['U', 'L', 'W', 'X', 'B']];
// const matrix2 = [['A', 'B', 'C', 'D', 'S'], ['F', 'Z', 'H', 'I', 'J'], ['K', 'P', 'M', 'N', 'O'], ['L', 'G', 'R', 'E', 'T'], ['U', 'V', 'W', 'X', 'Q']];

let text = `
A	C	G	D	S
F	Z	H	I	J
K	V	M	N	P
B	Q	R	E	L
U	O	W	X	T`;

text = text.trim();
let matrix = [];
let r = [];


for(let i =0; i<50; i++){
    if(text[i] === "	") {continue;}
    if(r.length === 5){
        matrix.push(r);
        r = [];
    } else {
        r.push(text[i]);
    }
}

// console.log(matrix);

function theNumber(matrix){

const coords = [];
const coordsPos = [];
const distances = [];

for(let i =0; i<5; i++){
    for(let j=0; j<5; j++){
        if(['T', 'G', 'S', 'L'].includes(matrix[i][j])){
            coords.push([i, j]);
        }
    }
}

console.log(coords);

function permutations(arr, r=[]) {
  if (arr.length === 0) {
      r.unshift([0,0])
    coordsPos.push(r)
  } else {
    const first = arr[0]
    for (let i = 0; i <= r.length; i++) {
      permutations(arr.slice(1), r.slice(0, i).concat([first]).concat(r.slice(i)))
    }
  }
}

permutations(coords);

console.log(coordsPos);
for (let i = 0; i < 24; i++) {
    let distance = 0;
    for(let j=0; j<4; j++){
        const a = Math.abs(coordsPos[i][j+1][0] - coordsPos[i][j][0]);
        const b = Math.abs(coordsPos[i][j+1][1] - coordsPos[i][j][1]);
        distance += a+b;
    }
    distances.push(distance);
}

const min = Math.min(...distances);
console.log(min);

    return min;
}

console.log(theNumber(matrix));
