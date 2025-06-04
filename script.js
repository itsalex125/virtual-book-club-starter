const loadReview=() =>{
    console.log('Loading Reviews');
    const container = document.getElementById('reviews-list');
    for(const review of reviews){
        const elem = createReviewElement(review);
        container.appendChild(elem);
    }
}

document.addEventListener("DOMContentLoaded", loadReview);

const handleReviewSumbit=()=>{
    console.log('Loading Reviews');
}

const createReviewElement=(review)=>{
    console.log(review);
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-item';
    reviewElement.innerHTML = `
    <p class = "book-title"}>${review.title}</p>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button> Reposts (5) </button>
    <button>Likes (5) </button>`
    ;
    return reviewElement;
}

