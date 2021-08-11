document.getElementById('searchBtn').addEventListener('click',()=>{                 // Add a n addEvenListener...
    displayMeals();
    document.getElementById('food').innerHTML = '';
    document.getElementById('foodFullDetails').innerHTML = '';

})


const displayMeals = () => {
    let searchMeal = document.getElementById('searchMeal').value
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchMeal+'')        // Add a json file and link with searchbar...
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const mealName = data.meals
            pushMeals(mealName)
        })
}

const pushMeals = foods => {
    const innerDiv = document.getElementById('food');                              
    foods.forEach(food => {
        const newDiv = document.createElement('div');
        newDiv.className = 'all-food'
        const foodDetails = `
            <img onclick="eachFoodDetails(${food.idMeal})" title="Click to See Details" id="foodImage" src="${food.strMealThumb}">      
            <h3 onclick="eachFoodDetails(${food.idMeal})" title="Click to See Details" id ="foodText">${food.strMeal}</h3>

        `;
        newDiv.innerHTML = foodDetails;
        innerDiv.appendChild(newDiv);
    });
}

const eachFoodDetails = foodId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const allFoodDetails = data.meals
        foodDetailsPush(allFoodDetails);
    })
} 

const foodDetailsPush = food => {
    const innerDetailsDiv = document.getElementById('foodFullDetails');                                     // Add Ingredients List of All Meal....
        food.forEach(foodDetail =>{
            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'food-details'
            const fullDetails =`
            <img id="foodImageDetails" src="${foodDetail.strMealThumb}">
            <h2 class="foodTextDetails">${foodDetail.strMeal}</h2>
            <h5>Ingredients</h5>
            <ul>
                <li>${foodDetail.strIngredient1}--${foodDetail.strMeasure1}</li>
                <li>${foodDetail.strIngredient2}--${foodDetail.strMeasure2}</li>
                <li>${foodDetail.strIngredient3}--${foodDetail.strMeasure3}</li>
                <li>${foodDetail.strIngredient4}--${foodDetail.strMeasure4}</li>
                <li>${foodDetail.strIngredient5}--${foodDetail.strMeasure5}</li>
                <li>${foodDetail.strIngredient6}--${foodDetail.strMeasure6}</li>
                <li>${foodDetail.strIngredient7}--${foodDetail.strMeasure7}</li>
                <li>${foodDetail.strIngredient8}--${foodDetail.strMeasure8}</li>
                <li>${foodDetail.strIngredient9}--${foodDetail.strMeasure9}</li>
                <li>${foodDetail.strIngredient10}--${foodDetail.strMeasure10}</li>
                <li>${foodDetail.strIngredient11}--${foodDetail.strMeasure11}</li>
                <li>${foodDetail.strIngredient12}--${foodDetail.strMeasure12}</li>
                <li>${foodDetail.strIngredient13}--${foodDetail.strMeasure13}</li>
                <li>${foodDetail.strIngredient14}--${foodDetail.strMeasure14}</li>
                <li>${foodDetail.strIngredient15}--${foodDetail.strMeasure15}</li>
                <li>${foodDetail.strIngredient16}--${foodDetail.strMeasure16}</li>
            </ul>
            `;
            detailsDiv.innerHTML = fullDetails;
            innerDetailsDiv.appendChild(detailsDiv);
        })
}


  

