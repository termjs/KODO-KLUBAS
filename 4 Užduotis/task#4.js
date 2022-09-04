let text = `
A	C	G	D	S
F	Z	H	I	J
K	V	M	N	P
B	Q	R	E	L
U	O	W	X	T
`; // matrix 1 iš 3 (skaičiavimas dalimis)

text = text.trim();
let matrix = [];
let r = [];

for (let i = 0; i < 50; i++) {
    if (text[i] === "	") { continue; } // jei tarpas - skip
    if (r.length === 5) { // push to arr jei lenght yra 5
        matrix.push(r);
        r = [];
    } else {
        r.push(text[i]);
    }
}

function theNumber(matrix) {

    const coords = []; // T, G, S, L
    const coordsPos = []; // visi keliai
    const distances = [];

    // 5 x 5
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (['T', 'G', 'S', 'L'].includes(matrix[i][j])) { // patikrina ar arr turi T, G, S arba L
                coords.push([i, j]);
            }
        }
    }

    // visos įmanomos kombinacijos
    function permutations(arr, r = []) {
        if (arr.length === 0) {
            r.unshift([0, 0])
            coordsPos.push(r)
        } else {
            const first = arr[0] // pirma kordinatė
            for (let i = 0; i <= r.length; i++) {
                permutations(arr.slice(1), r.slice(0, i).concat([first]).concat(r.slice(i)))
            }
        }
    }

    permutations(coords);

    // skaičiuojamas kelių atstumas
    for (let i = 0; i < 24; i++) {
        let distance = 0;
        for (let j = 0; j < 4; j++) {
            const a = Math.abs(coordsPos[i][j + 1][0] - coordsPos[i][j][0]);
            const b = Math.abs(coordsPos[i][j + 1][1] - coordsPos[i][j][1]);
            distance += a + b;
        }
        distances.push(distance);
    }

    const min = Math.min(...distances); // randa mažiausią skaičių su spread operator
    return min;
}

console.log("Ats:", theNumber(matrix));
