async function my_languages(){
    return (await fetch("./seslang.json")).json()
}

document.addEventListener("DOMContentLoaded", async () => {
    let data = [];

    try{
        data = await my_languages();
    }catch(e){
        console.log("error !!!");
        console.log(e);
    }
    console.log(data);

    // language changer support
    const langEl = document.querySelector('.langWrap');
    const link = document.querySelectorAll('a');
    const titleEl = document.querySelector('.title');
    const descrEl = document.querySelector('.description');

    link.forEach(el => {
        el.addEventListener('click', () => {
            langEl.querySelector('.active').classList.remove('active');
            el.classList.add('active');

            const attr = el.getAttribute('language');
            const ses = 'ses'
            titleEl.textContent = data[ses][attr].title;
            descrEl.textContent = data[ses][attr].description;
        });
    });
})

















// async function my_languages(){
//     return (await fetch("./seslang.json")).json()
//   }
//   document.addEventListener("DOMContentLoaded", async () => {
//     var seslang = [];
  
//     try{
//         seslang = await my_languages();
//     }catch(e){
//         console.log("error !!!");
//         console.log(e);
//     }
//     console.log(seslang);

//   })

  

// console.log('test');
// let seslang = fetch("./seslang.json")
// .then(res => res.json())
// .then((allang) => {
// console.log(allang)
// return allang
// })
// .catch(error => console.log('error!', error))

// console.log('co to jest : ', seslang);