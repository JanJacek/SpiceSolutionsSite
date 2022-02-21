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
    console.log("objekt json: ", data);

    // language changer support
    const langEl = document.querySelector('.langWrap');
    const link = document.querySelectorAll('a');
    const titleSes = document.querySelector('.titleSes');
    const descrSes = document.querySelector('.descriptionSes');
    //ec
    const titleEc = document.querySelector('.titleEc');
    const descrEc = document.querySelector('.descriptionEc');
    //ew
    const titleEw = document.querySelector('.titleEw');
    const descrEw = document.querySelector('.descriptionEw');
    //eg
    const titleEg = document.querySelector('.titleEg');
    const descrEg = document.querySelector('.descriptionEg');
    //es
    const titleEs = document.querySelector('.titleEs');
    const descrEs = document.querySelector('.descriptionEs');
    
    link.forEach(el => {
        el.addEventListener('click', () => {
            langEl.querySelector('.active').classList.remove('active');
            el.classList.add('active');
            
            const attr = el.getAttribute('language');
            const ses = 'ses'
            const ec = 'ec'
            const ew = 'ew'
            const eg = 'eg'
            const es = 'es'

            console.log("tu ma być tytuł po japońsku",data["lang"]['ses']['japanese']);
            console.log("tu ma być tytuł po japońsku",data["lang"][ses][attr]);
            console.log("tu ma być tytuł po angielsku",data["lang"][ec][attr]);
            //Spicesolution translation
            titleSes.textContent = data["lang"][ses][attr].title;
            descrSes.textContent = data["lang"][ses][attr].description;
            //eCurucuma translation
            titleEc.textContent = data["lang"][ec][attr].title;
            descrEc.textContent = data["lang"][ec][attr].description;
            //eWasabi translation
            titleEw.textContent = data["lang"][ew][attr].title;
            descrEw.textContent = data["lang"][ew][attr].description;
            //eGinger translation
            titleEg.textContent = data["lang"][eg][attr].title;
            descrEg.textContent = data["lang"][eg][attr].description;
            //eSaffron translation
            titleEs.textContent = data["lang"][es][attr].title;
            descrEs.textContent = data["lang"][es][attr].description;
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