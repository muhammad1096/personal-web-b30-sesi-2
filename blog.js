// let name1 = "Banu"
// let name2 = "Alifia"
// let name3 = "Farhan"


// // console.log(name1)
// // console.log(name2)
// // console.log(name3)

// //Array
// let year = 2021;

// let names = ["Banu","Alifia","Farhan","Evan","Raka",year]

// console.log(names)
// console.log(names[1]);
// console.log(names[3]);

// //Object

// let dataBanu = {
//     name: "Banu Ridwan",
//     email: "banu@mail.com",
//     address: "Bogor"
// }

// console.log(dataBanu)


// //Ingin menampung nama merk mobil

// //Array menyimpan beberapa nama-nama mobil
// // let nameCar = ["Avanza","Yaris","Jazz","Ayla"]

// // let colorAvanza = ["Red","Blue","Yellow","White"]

// // //Object menyimpan data yang dimiliki avanza  //Object digunakan apabila data yang dimasukkan membutuhkan lebih dari satu penjelasan
// // let avanza = {
// //     name: "Avanza",
// //     color: "red",
// //     transmisi: "Otomatis",
// //     year: "2022"
// // }

// let dataStudent1 = {
//     name: "Banu",
//     email: "banu@mail.com",
//     address: "Bogor"
// }

// let dataStudent2 = {
//     name: "Evans Dimas",
//     email: "evans@mail.com",
//     address: ["Bandung","Jakarta"] //Object berisikan Array
// }

// // console.log(dataStudent1.email);

// //Array of Object
// let allDataStudent = [
//     dataStudent1,
//     dataStudent2,
//     {
//         name: "Andi",
//         email: "andi@mail.com",
//         address: "Depok"
//     },  //lebih baik dimasukkan langsung dalam bentuk object tidak perlu buat object diluar
//     {
//         name: "Andi",
//         email: "andi@mail.com",
//         address: "Depok"
//     }
// ]
    
// console.log(allDataStudent)

//Menyimpan hanya nama merk hp

//Array
// let merkHp = ["Samsung","Xiaomi","Oppo","Iphone"]

// //Object
// let dataSamsung = {
//     name: "Samsung",
//     color: "red",
//     year: 2022
// }

// //Array of Object
// let allData = [
//     {
//         name: "Samsung",
//         color: "red",
//         year: 2022
//     },
//     {
//         name: "Xiaomi",
//         color: "blue",
//         year: 2022
//     },
//     {
//         name: "Oppo",
//         color: "red",
//         year: 2022
//     }
// ]
// console.log(allData);

let blogs = []
function addBlog(event) {

    event.preventDefault();

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files
    console.log(image);
    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title: title,
        content: content,
        image: image,
        author: "Muhammad Abiyyu Rama",
        postAt: new Date()
    }

    blogs.push(blog)

    // console.log(blog);
    // console.log(blogs);

    // for(let i = 0; i < blogs.length; i++){
    //     console.log(blogs[i]);
    // }

    renderBlog()
}

// //looping
// for (let angka = 1; angka <= 100; angka+=5 ){
//     console.log("Pengulangan ke " + angka);
// }

//Manipulation HTML / DOM      //CAri tahu lagi tentang DOM

function renderBlog() {
    let contentContainer = document.getElementById("contents")

    contentContainer.innerHTML = ""

    for(let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right;">
              <span style="font-size: 13px;color: grey;">
                ${getDistanceTime(blogs[i].postAt)}
              </span>
            </div>
        </div>
      </div>`
    }

}

// let time = newDate()

// console.log(time);
// console.log(time.getData());
// console.log(time.getFullYear());
// console.log(time.getMonth());

let month = ["January", "Februari", "March", "April", "May", "June", "August", "September", "October", "November", "December"]

function getFullTime(time){

  console.log(time);

  let date = time.getDate()
  console.log(date);

  let monthIndex = time.getMonth()
  console.log(month[monthIndex]);

  let year = time.getFullYear()
  console.log(year);

  let hours = time.getHours()
  let minutes = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
  return fullTime; 
}


function getDistanceTime(time){

  // console.log(time);

  let timePost = time
  let timeNow = new Date()

  let distance = timeNow - timePost

  // console.log(distance);

  let milisecond = 1000 //milisecond dalam satu detik
  let secondInHours = 3600 //second dalam satu jam
  let hoursInDay = 23 //karena hitungan hours dari 0 - 23

  let minutes = 60
  let seconds = 60

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
  let distanceHours = Math.floor(distance / (milisecond * minutes * seconds))
  let distanceMinutes = Math.floor(distance / (milisecond * minutes))
  let distanceSeconds = Math.floor(distance/ (milisecond))

  // distanceDay = Math.floor(distanceDay)//membulatkan bilangan desimal

  // console.log(distanceDay+ " day ago");

  if (distanceDay >= 1){
    return(`${distanceDay} day ago`);
    } else if(distanceHours >= 1){
    return(`${distanceHours} hours ago`);    
    } else if(distanceMinutes >= 1){
      return(`${distanceMinutes} minutes ago`)
    } else{
      return(`${distanceSeconds} seconds ago`)
    }
  }

  setInterval(() =>{

    renderBlog()
  } ,3000)
// getDistanceTime(new Date())
