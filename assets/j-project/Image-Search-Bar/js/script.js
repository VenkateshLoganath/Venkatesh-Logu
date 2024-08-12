 const accessKey = 'Fsiarf6DHrTPPZzj6TJnYluTgvjLwDFai2iu0PYCVGY';


 const formEl = document.getElementById('form-Id');
 const formIN = document.querySelector('.input-Text');
 const searchContent = document.querySelector('.search-products');
 const showMore = document.querySelector('.show-more-btn')


 let inputData = '';
 let page=1;

 async function showImages(){
  inputData= formIN.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

  const response = await fetch(url)
  const data =await response.json();

  const results = data.results;

  if(page === 1){
    searchContent.innerHTML = "";
  }

  results.map((result)=>{
      const ImageWrapper = document.createElement('div');
      ImageWrapper.classList.add('search-product');
      const image = document.createElement('img');
      image.src = result.urls.small;
      image.alt = result.alt_description;

      const ImageLinks = document.createElement('a')
      ImageLinks.href = result.links.html;
      ImageLinks.target = '_blank';
      ImageLinks.textContent = result.alt_description;
      
      ImageWrapper.appendChild(image);
      ImageWrapper.appendChild(ImageLinks);
 
      searchContent.appendChild(ImageWrapper);

  })  

  page++;
  if(page > 1){
    showMore.style.display = 'block';
  }
 }

 formEl.addEventListener('submit', (e)=>{
    e.preventDefault();  
    page =1;
    showImages();
 })

 showMore.addEventListener('click', ()=>{
    showImages();
})
