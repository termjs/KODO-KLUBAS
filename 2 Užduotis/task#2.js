const str="13U2U3D1D5U7U2D3D3U2D3D8D2U1U1D2D5U6U1U2U3D2D1D2U1U2D18D2U1U9U9D3D1U1D4U2D1D1D2U1U2U3D4D13U2U3D1D5U7U2D4D3U2U1D1D2D4U1D2U1U1D2D3D8D2U1U1D2D5U6U1U2U4D2U1D2D1D2D1D4U1D1D2D3D8D2U1D";

const arr=[-1,-2, 1,2,3,4,5,6,7,8,9];

let start=Number(str.substring(0,1));
let index = arr.findIndex((el) => el===start);
console.log("start: ", start, index)

let count = 0;

let substr = "";

for(let i=1; i<str.length; i++){
    let dir = str.substring(i, i+1);
    substr += dir;
    if(Number.isInteger(Number(substr))) continue;
    let crease = substr.substring(0,substr.length-1);
    if(substr.endsWith("D") && index - Number(crease) >= 0){
		index -= Number(crease);
		if([4,5,6,7].includes(arr[index])){
			count++;
		}
	} else if(substr.endsWith("U") && index + Number(crease) <= arr.length-1 ) {
		index += Number(crease);
		if([4,5,6,7].includes(arr[index])){
			count++;
		}
	}
    substr = "";
}

console.log("count: ", count);
