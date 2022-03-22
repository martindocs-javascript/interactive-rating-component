const boxContainer = document.querySelector('.box-container');
const rating = document.querySelector('#rating');
const allRatings = document.querySelectorAll('#rating div');
const selectedRating = document.querySelector('#selected-rating');
const submit = document.querySelector('.submit');
const thankYouMsg = document.querySelector('.thank-you-container');

function updateRating(ratingID){    
    
    [...allRatings].map((rating)=> {
        if(rating.id != ratingID){
            return rating.classList.remove('selected');
        }
    });
}

function addRating(e){
    const ratingID = e.target.id;

    updateRating(ratingID);

    if(ratingID != 'rating'){   
        e.target.classList.toggle('selected');
    }
}

function submitRating(){
    // return selected rating
    const tempArr = [...allRatings].filter((rating)=> rating.classList.contains('selected'));

    if(tempArr.length > 0){
        selectedRating.innerHTML = `You selected ${tempArr[0].innerText} out of 5`;
        boxContainer.style.display = 'none';
        thankYouMsg.style.display = 'block';
    }
}

rating.addEventListener('click', addRating);
submit.addEventListener('click', submitRating);
