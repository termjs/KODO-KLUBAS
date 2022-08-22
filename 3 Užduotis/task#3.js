//setup

const string = "A5 B4 C12 D8 E8 F3 G2 H5 I9 J7";
const teams = `ABFEG AB CDI I
ABC BE C HIJ
BFG AJI C C
B IJ
ABC DEF BC
CD CE
IJ
ABD D AI
HG AB
BC CJ I`;

const arr = string.split(" ");
const obj = {}; //{A: 5, B: 3, ...}

for (let inst of arr) {
  //console.log(inst, inst[0])
  obj[inst[0]] = Number(inst.slice(1));
}

console.log(obj);

const steps = teams.split("\n");
//console.log(steps);

//['ABFEG AB CDI I, 'B IJ', ...]

const teamCounts = steps.map((el) => {
  let t = el.split(" ").join(""); // ABCCAII | 0/4
  //POSSIBILITY CHECK
  console.log("Before: ", obj, t);
  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) {
      t = t.slice(0, i) + t.slice(i + 1);
      i--;
    } else {
      obj[t[i]]--;
    }
  }
  console.log("After: ", obj, t);
  let fake = [];
  for (let i = 0; i < t.length; i++) { //ABCCAII
    //COUNT CHECK
    // for (let j = 0; j < t.length; j++) {
    //   if (i === j) continue;
    //   if (t[i] === t[j]) {t = t.slice(0, i + 1) + t.slice(j + 1); j--;}
    // }
    if(!fake.includes(t[i])) fake.push(t[i]);
  }
  console.log("final:", fake.join(""));
  return fake.length;
});

console.log(teamCounts);

let term = 1;

for(let i=0; i<teamCounts.length; i++){
  term *= teamCounts[i];
}

console.log(term);
