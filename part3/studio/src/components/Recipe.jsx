import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.saltandlavender.com/";
   let authorPhoto = "https://i.kym-cdn.com/entries/icons/original/000/020/115/idiot_sandwich.jpg";
   let authorName = "Smart Sandwich";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Salami", "American Cheese", "Bacon", "Turkey", "Mayo"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_gE6N-7D2UAXf63KIUvL9zbKeHnHTF2JNw&usqp=CAU" alt="text" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
