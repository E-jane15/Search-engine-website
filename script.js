const accessKey = "NfYUE5LXZ08YOvzDod6pUCaavG_uU9ysxVKyZglGiKw";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.ariaValueMax;
    const url ='https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';


}