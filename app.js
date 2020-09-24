const auth = "563492ad6f917000010000019febed2150574f30a0d9f0dc810283b4"; 
const next = document.querySelector(".next-btn");
const input = document.querySelector("input"); 
const searchBtn = document.querySelector(".search-btn");

let pagenum = 1; 
let search = false; 
let query = "";

input.addEventListener("input", (e) => {
    e.preventDefault(); 
    query = e.target.value;
}); 

async function CuratedPhotos(pagenum)
{
    const data = await fetch(`https://api.pexels.com/v1/curated?per_page=15&page=${pagenum}`,
    {   method:"GET", 
        headers: {
            Accept: "application/json",
            Authorization: auth, 
        },
    }
    );

    const result = await data.json(); 
        result.photos.forEach((photo) => {
            const pic = document.createElement("div"); 
            pic.innerHTML= `<img src=${photo.src.large}>
                    <p>Photo : ${photo.photographer}</p>
                    <a href=${photo.src.large}>Download</a> 
                    `;
                document.querySelector(".gallery").appendChild(pic); 
        });
}

async function SearchPhotos(query, pagenum)
{
    const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=${pagenum}`,
    {   method:"GET", 
        headers: {
            Accept: "application/json",
            Authorization: auth, 
        },
    }
    );

    const result = await data.json(); 
        result.photos.forEach((photo) => {
            const pic = document.createElement("div"); 
            pic.innerHTML= `<img src=${photo.src.large}>
                    <p>Photo : ${photo.photographer}</p>
                    <a href=${photo.src.large}>Download</a> 
                    `;
                document.querySelector(".gallery").appendChild(pic); 
        });
}

searchBtn.addEventListener("click", () => {
    if(input.value === "") return;
    clear();  
    search = true; 
    SearchPhotos(query, pagenum); 
}); 

function clear()
{
    input.value=""; 
    document.querySelector(".gallery").innerHTML = "";
    pagenum1 = 1; 
}
next.addEventListener("click", () =>{
    if(!search)
    {
        pagenum++; 
        CuratedPhotos(pagenum); 
    }

    else
    {
        if(query.value === "") return; 
        pagenum++; 
        SearchPhotos(query, pagenum); 
    }
})
CuratedPhotos(pagenum); 
