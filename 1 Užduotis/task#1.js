const sifruote = "VGPKČ OŠFŠ OPZEČŲ ŲĄGKOKSČ LĄGKOZŲ ZCFZŠVL KU ŲOČVKSČ VŠPKČZ NZFIVK L TUKGOL"; // Šifruojamas hashas
const abc = ["A", "Ą", "B", "C", "Č", "D", "E", "Ę", "Ė", "F", "G", "H", "I", "Į", "Y", "J", "K", "L", "M", "N", "O", "P", "R", "S", "Š", "T", "U", "Ų", "Ū", "V", "Z", "Ž"]; // Šifravimo abecelė

let isifruota = ""; // Būsimas atsakymas

const raidziuSeka = sifruote.charAt(0), indikatorius = 'T'; // Pirma raidė ir ieškoma raidė
const skaiciausTarpas = () => {
    // Rasti abi (Pirmą ir indikatoriaus raides)
    const xIndex = abc.indexOf(raidziuSeka);
    const yIndex = abc.indexOf(indikatorius);
    return Math.abs(xIndex - yIndex); // Gaunamas tarpas tarp raidžių abecelėje
};

const atsakymas = skaiciausTarpas(raidziuSeka, indikatorius); // Konstantoj prisiskiriame funkcijos išaukimą

for (let i = 0; i < sifruote.length; i++) {
    let rasti = abc.findIndex(el => el === sifruote[i]); // Rasti vieną raidę [i] iš šifruotės
    if (rasti === -1) isifruota += " "; // Jei elementas išeina iš array pridedam tarpą
    else isifruota += abc.at(rasti - atsakymas); // Jei ne, šifruojam kitą raidę
}

console.log(isifruota);
console.log("Atsakymas: ", atsakymas);
