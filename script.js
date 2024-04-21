let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#default-search");
let CityName = document.querySelector("#locationShow");

inputForm.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let getCityName = input.value ;
    console.log(getCityName)
    CityName.innerHTML += getCityName
    
})
