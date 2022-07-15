
let text = `A9 08000915-4 10201415-9 15001530-10 16301645-3

B5 08150845-1 10251115-2 14001530-2 16301645-4 17001710-5

C1 10151020-3 10451215-3 14001430-1 16301645-2 17001720-4

D3 09300955-3 11201225-2 15101530-2 15301650-4

E8 09000945-8 12001255-7 15101530-3 17301820-8

F2 09000905-2 11201355-6 15101530-3 15401740-3 17501825-2

G3 08001015-4 11201305-3 14101435-2 15301540-2

H5 08201035-5 11201245-1 15201545-5 16201740-7 18001825-2

I9 07450915-6 11201135-6 13201430-7 16501740-8 17001720-4

J6 09100915-2 11201345-2 15101530-7 15351640-4 17201855-1
`; // Registras

let roomArr = []; // Masyvas į kurį bus sudėta data apie kiekvieną kambarį. 'text' suskaidyta po eilutę
let temp = ''; // Laikinas kintamasis kurti masyvo elementams

// Ciklas skirtas sukurti roomArr masyvui. Suka per kiekvieną char ir prideda prie temp string kol prieina tarpą arba new line ir tada įdedą į masyvą
for(let char of text){
    //Patikrina ar char yra new line ir temp yra netuščias, jei taip tai reiškia, kad tai yra eilutės pabaiga ir prideda sukurtą string į masyvą bei nunulina laikiną kintamąjį
    if(char === '\n' && temp !== '') {
        roomArr.push(temp);
        temp = '';
        continue;
    } else if (char === '\n' && temp === '') {
        //Patikrina ar char yra new line ir temp tuščias. Jei taip, tai reiškia, kad tai yra tarpas tarp eilučių ir mes tiesiog praleidžiam šitą char
        continue;
    } else {
        // Jei nei viena sąlyga neatitinka, reiškia tai yra paprastas char ir jį prideda prie laikinojo kintamojo
        temp += char;
    }
}

//Sumos kintamasis, jame skaičiuojama meetingų minučių suma
let sum = 0;
//Ciklas eiti per roomArr masyvą, t.y., kiekvieną kambarį ir jo laikus, ir suskaičiuoti laiką bei pridėti prie sum kintamojo
roomArr.forEach(el => {
    let capacity = el.slice(1,3).trim(); // Išsaugom kambario talpą
    let times = el.slice(3) + ' '; // Išsaugom visus laikus
    let temp = ''; // Laikinas kintamasis skirtas atskiriems laikams
    let time = []; // Masyvas iš atskirų kambario laikų
    let lengthSum = 0; // Vieno kambario minučių suma
    // Ciklas, kuris praeina per visus char times kintamajame ir supjausto į atskirus laikus ir sudeda į time masyvą
    for(let i=0; i<times.length; i++){
        if(times[i] === ' '){
            time.push(temp);
            temp = '';
            continue;
        }
        temp += times[i];
    }
    //Ciklas, kuris eina per kiekvieną masyvo elementą ir suskaičuoja laiką
    time.forEach(elTime => {
        let length = (elTime.slice(4,6)*60+elTime.slice(6,8)*1)-(elTime.slice(0,2)*60+elTime.slice(2,4)*1); // Suskaičiuoja laiką atimant pabaigą iš pradžios ir valandas paverčiant į minutes
        lengthSum += elTime.slice(9)*1 > capacity*1 ? length*1*capacity*1 : length*1*elTime.slice(9)*1; // Prideda laiką padauginta iš dalyvių skaičių, o jei jų daugiau nei talpa, daugina iš talpos
    });

    sum += lengthSum; // Kambario laiką prideda prie bendros sumos
});

console.log("Atsakymas:", sum); // Duoda atsakymą

