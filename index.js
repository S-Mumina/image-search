const accessKey = "lj-5CQ4tSUvKAvQlqOqUgw0c9gg3qi6wV8I5uW99Ieg"

const form = document.querySelector("form")
const searchInput = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more")

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInput.value;
   const url = `https://api.unsplash.com//search/photos?page=${page}
   &query=${inputData}&client_id=${accessKey}`;
   const response = await fetch(url);
   const data = await response.json();
   
   if(page === 1){
    searchResults.innerHTML= "";
   }

   const results = data.results;
   results.map ((result)=> {
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result")
    const image = document.createElement("img")
    image.src = result.urls.small;
    image.alt = result.alt_description;
   })
   
  
   if (page > 1){
    showMore.style.display = block;
   }
   
}


form.addEventListener("submit",(e) => {
    e.preventDefault()
    page = 1;
    searchImages();

});