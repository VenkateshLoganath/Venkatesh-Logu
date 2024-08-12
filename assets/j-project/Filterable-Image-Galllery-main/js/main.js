const filterButtons = document.querySelectorAll(".btn");
const filterImage = document.querySelectorAll('.product-item');


filterButtons.forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        e.preventDefault();
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')



        filterImage.forEach((item)=>{
            
            item.classList.add('hide')

            if( item.dataset.name === e.target.dataset.name ||  e.target.dataset.name === 'all'){

                item.classList.add('show');
                item.classList.remove('hide')

            } 

        })
    })
})