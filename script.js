const maharashtrianRecipes = [
    {
        name: "Puran Poli",
        image:"imges/images/puran poli.jpg",
        ingredients: [
            "Wheat flour",
            "Chana dal",
            "Jaggery",
            "Cardamom",
            "Ghee"
        ],
        instructions: "Prepare chana dal stuffing with jaggery and cardamom. Fill inside wheat dough and roll into polis. Cook on tawa with ghee."
    },
    {
        name: "Misal Pav",
        image: "imges/images/misal_pav.jpg",
        ingredients: [
            "Moth beans (matki)",
            "Onions",
            "Tomatoes",
            "Goda masala",
            "Pav buns"
        ],
        instructions: "Cook moth beans with spicy gravy. Top with farsan and onions. Serve hot with pav."
    },
    {
        name: "Vada Pav",
        image: "imges/images/vadapav.jpg",
        ingredients: [
            "Potatoes",
            "Besan (gram flour)",
            "Garlic chutney",
            "Green chilies",
            "Pav buns"
        ],
        instructions: "Make potato vadas dipped in besan batter and deep fry. Stuff inside pav with chutney."
    },
    {
        name: "Bharli Vangi",
        image: "imges/images/bharli_vangi.jpg",
        ingredients: [
            "Small brinjals",
            "Peanuts",
            "Sesame seeds",
            "Coconut",
            "Spices"
        ],
        instructions: "Stuff brinjals with a spicy coconut-peanut masala and cook till tender."
    },
    {
        name: "Ukadiche Modak",
        image: "",

        ingredients: [
            "Rice flour",
            "Fresh coconut",
            "Jaggery",
            "Cardamom powder",
            "Ghee"
        ],
        instructions: "Prepare sweet coconut jaggery stuffing. Make rice dough, shape into modaks, fill stuffing, and steam until cooked."
    },
    {
        name: "Sabudana Khichdi",
        image:"imges/images/shabu_khichadi.jpg",
        ingredients: [
            "Sabudana (sago)",
            "Potatoes",
            "Peanuts",
            "Green chilies",
            "Coriander leaves"
        ],
        instructions: "Soak sabudana, fry potatoes, mix with roasted peanuts and spices, cook until transparent."
    },
    {
        name: "Kothimbir Vadi",
        image: "imges/images/kothimbir_vadi.jpg",
        ingredients: [
            "Coriander leaves",
            "Besan (gram flour)",
            "Ginger",
            "Green chilies",
            "Spices"
        ],
        instructions: "Prepare thick coriander-besan batter, steam until set, cut into pieces and shallow fry."
    },
    {
        name: "Thalipeeth",
        image: "imges/images/thalipeeth.jpg",
        ingredients: [
            "Multigrain flour (bhajani)",
            "Onions",
            "Coriander",
            "Spices",
            "Ghee"
        ],
        instructions: "Mix flour with spices and onions, knead dough, pat into discs, and roast on tawa with ghee."
    },
    {
        name: "Shrikhand",
        image: "imges/images/shrikhand.jpg",
        ingredients: [
            "Hung curd",
            "Powdered sugar",
            "Cardamom powder",
            "Saffron",
            "Dry fruits"
        ],
        instructions: "Whisk hung curd with sugar, cardamom, and saffron. Chill and serve with dry fruits."
    },
    {
        name: "Poha",
        image: "imges/images/poha.jpg",
        ingredients: [
            "Flattened rice (poha)",
            "Onions",
            "Green chilies",
            "Mustard seeds",
            "Coriander leaves"
        ],
        instructions: "Soak poha, temper mustard seeds, fry onions and chilies, mix poha, cook lightly, and garnish with coriander."
    }
];

function searchRecipe() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipesContainer = document.getElementById('recipes');

    recipesContainer.innerHTML = '';

    const filteredRecipes = maharashtrianRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput)
    );

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';

            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <h4 >Instructions:</h4>
                <p>${recipe.instructions}</p>
            `;
            recipesContainer.appendChild(recipeCard);
        });
    } else {
        recipesContainer.innerHTML = `<h2 style="color: white;">No Maharashtrian recipe found</h2>`;
    }
}






 







 
 






