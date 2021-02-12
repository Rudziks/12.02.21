let imie = "Ala ma kota."
imie = "Ala ma psa"
console.log("imie", imie)

let zdrowie = "alkohol jest dobry"
zdrowie = "alkohol nie jest dobry"
console.log ("zdrowie", zdrowie)

const isDog = true

//zmienianie
let rodzic = "Roza ma tate"
rodzic = "Roza nie ma taty"
console.log ("rodzic", rodzic)

//dodawanie stringow
console.log ("45" + "56")

//dodawanie
console.log (45+56)

const num1 = 1
const num2 = 5
const num3 = 28
const wynik = num1 + num2 + num3 * num2
console.log (wynik)

//duze literys
const imie1 = "Jan"
const nazwisko1 = "Nowak"
const wynik1 = imie1.toUpperCase() + ' ' + nazwisko1.toUpperCase()
console.log (wynik1)

//male litery
const imie2 = "JAN"
const nazwisko2 = "ź"
const wynik2 = imie2.toLowerCase() + ' ' + nazwisko2.toLowerCase()
console.log (wynik2)

//tablica zawartosc
const tablica = [12, "Roman", wynik2]
console.log (tablica)
console.log (tablica [1])
console.log (tablica [0])
console.log (tablica [2])
console.log ([tablica])

//tablica imion, zastepuje imiona
const imiona = ["Kacper", "Róża", "Wiktoria", "Julka", "Iza", "Adam", "Rafał", "Janusz", "Tomasz", "Wioletta", "Robert", "Radek", "Staś", "Aleks", "Ola", "Natan", "Majka", "Arnold", "Franek", "Zuzia", "Piotrek", "Danuta", "Bogusia", "Maria","Marek", "Ania","Dawid", "Tadeusz", "Łukasz", "Łucja", "Oskar"]
console.log([imiona])
imiona.forEach(item => { 
    console.log("stary/a", item)
    item = "Henryk"
    console.log(item)
})

//powatrzanie nowych imion
const noweImiona = imiona.map(item => "Henryk")
console.log(noweImiona)

//szuka: tutaj imienia  Oskar
const oskar = imiona.find(item => {
    if(item === "Oskar") {
        return item
    }
})
console.log("find", oskar)


//deklaracja tablicy v2 poprzez new Array
const tablicaLiczb = new Array(1, 2, 5, 644, 64423, 271)
console.log(tablicaLiczb)

const wiekszeOdJedenSome =
tablicaLiczb.some(item => item > 1)
console.log(wiekszeOdJedenSome)

//dodawanie do tablicy
const tablicaLiczb1 = new Array(1, 2, 5, 644, 64423, 271)
console.log(tablicaLiczb1)

tablicaLiczb1.push(666)
console.log(tablicaLiczb1)

//petla for
for(let i = 0;i < 20; i ++){
console.log(i)  
}

//cwiczenia petla
const liczbyDoStu = new Array()
for(let i=0;i < 100; i ++){
    liczbyDoStu.push(i + 1 )
}
console.log(liczbyDoStu)

//dodawanie imion
const ImionaDodawanie = new Array()
for(let i=0;i < 100; i ++){
    ImionaDodawanie.push("Andrew" + i )
}
console.log(ImionaDodawanie)

//liczby parzyste
const liczbyDo = new Array()
for (let i = 0;  i < 200; i++){
    if ( i % 2 === 0) {
        liczbyDo.push(i)
    }
}
console.log(liczbyDo)

//index liczby
let indexLiczby88
liczbyDo.forEach((item,index) => {
    if (item === 88) {
    indexLiczby88 = index
    }
})
console.log(indexLiczby88)

//liczby nparzyste
const liczbyN = new Array()
for (let i = 0;  i < 1000; i++){
    if ( i % 2 !== 0) {
        liczbyN.push(i )
    }
}
console.log(liczbyN)

//liczby n / 3
//liczby nparzyste
const liczbyNn = new Array()
for (let i = 0;  i < 1000; i++){
    if ( i % 2 === 0) {
        liczbyNn.push(i + 1)
    }
}
console.log(liczbyNn)





