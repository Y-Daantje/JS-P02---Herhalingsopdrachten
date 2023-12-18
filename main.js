// opdr1

const myInfo = [
    {
        name: 'Yannick ',
        achternaam: 'Daantje',
        hobby: 'gym',
    },

    {
        name: 'sunny',
        achternaam: 'pooran',
        hobby: 'voetball',
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
        prijs: 67000,
    },
    {
        merk: 'tesla',
        model: 'cyber truck',
        bouwjaar: '2023',
        prijs: 87000,
    },
]

let total = 0

const carHtml = document.querySelector('.car')
for (let p = 0; p < cars.length; p++) {
    const element = cars[p];
    carHtml.innerHTML += `
    <div class='card'>
    <ul>
    <li>Brand ${element.merk}</li>
    <li>Year ${element.bouwjaar}</li>
    <li>Model ${element.model}</li>
    <li>Price ${element.prijs}</li>
    </ul>
    </div>`;
    total += element.prijs
}

carHtml.innerHTML += `
<div class= "card">
<b>totaal: ${total}</b>
</div>`;




// opdr3

// const course = [
//     {
//         firstname: "Mohammed",
//         classname: "B1N",
//         course: "ICT",
//     },
//     {
//         firstname: "Amer",
//         classname: "B1H",
//         course: "IB",
//     },
//     {
//         firstname: "Ahmed",
//         classname: "B1k",
//         course: "CS",
//     },
// ];
// const container = document.querySelector('.container')
// for (let i = 0; i < course.length; i++) {
//     const element = course[i];
//     container.innerHTML += `
//     <div class="card">
//     <li>firstname:${element.firstname}</li>
//     <li>classname:${element.classname}</li>
//     <li>course:${element.course}</li>
//     </div>`;
// };


// function createCard(item, list) {
//     const li = document.createElement("li");
//     li.className = "card";

//     const title = document.createElement("h3");
//     title.textContent = item.title;

//     const image = document.createElement("img");
//     image.src = item.url;

//     const content = document.createElement("p");
//     content.textContent = item.description || "Description not available"; // Assuming there is a description property

//     li.appendChild(title);
//     li.appendChild(image);
//     li.appendChild(content);
//     list.appendChild(li);
// }

const students = [
    {
        firstname: "yannick",
        classname: "B1N",
        course: "ICT",
    },
    {
        firstname: "sunny",
        classname: "B1t",
        course: "IB",
    },
    {
        firstname: "mike",
        classname: "B1k",
        course: "CS",
    },
];

const container = document.querySelector('.container');

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    container.innerHTML += `
        <div class="card">
            <li>Firstname: ${student.firstname}</li>
            <li>Classname: ${student.classname}</li>
            <li>Course: ${student.course}</li>
        </div>
    `;
}

//opdr4

fetch('https://meme-api.com/gimme/5')
    .then(response => response.json())
    .then(data => {
        console.log('meme: ', data);
        const memes = data.memes
        for (let m = 0; m < memes.length; m++) {
            const memepost = memes[m];
            console.log('your meme posts are: ', memepost);
            container.innerHTML += `
            <div class= card-memes>
            <li>${memepost.title}</li>
            <li>${memepost.author}</li>
            <li>${memepost.subreddit}</li>
            </div>
            `
        };
    });