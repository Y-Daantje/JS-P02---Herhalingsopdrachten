//opdr1

const myInfo = [
    {
        name: 'Yannick ',
        achternaam: 'Daantje',
        hobby: 'gym',
    },

    {
        name: 'jope ',
        achternaam: 'jopje',
        hobby: 'fortnite',
    }
]
const htmlCode = document.querySelector('.container')
for (let i = 0; i < myInfo.length; i++) {
    const myInfo2 = myInfo[i];
    console.log(myInfo2);
    htmlCode.innerHTML += `
<div class= 'card'>
<li>${myInfo2.name}</li>
<li>${myInfo2.achternaam}</</li>
<li>${myInfo2.hobby}</</li>
</div>
`}

//opdr2

const cars = [
    {
        merk: 'tesla',
        model: 'model 3',
        bouwjaar: '2003',
        prijs: 50000,
    },
    {
        merk: 'tesla',
        model: 'cyber truck',
        bouwjaar: '2023',
        prijs: 50000,
    },
]

let total = 0

const carHtml = document.querySelector('.car')
for (let p = 0; p < cars.length; p++) {
    const element = cars[p];
    carHtml.innerHTML += `
    <div class='card'>
    <ul>
    <li>${element.merk}</li>
    <li>${element.bouwjaar}</li>
    <li>${element.model}</li>
    <li>${element.prijs}</li>
    </ul>
    </div>`;
    total += element.prijs
}

carHtml.innerHTML += `
<div class= "card">
<b>${total}</b>
</div>`;



