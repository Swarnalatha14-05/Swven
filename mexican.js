
const mexican = [
    // Breakfast Recipes
    { id: 1, title: "Chilaquiles", category: "breakfast", image: "chilaquiles.jpg", instructions: "1. Fry tortilla chips. 2. Top with salsa and cheese." },
    { id: 2, title: "Huevos Rancheros", category: "breakfast", image: "huevos-rancheros.jpg", instructions: "1. Fry eggs. 2. Serve on tortillas with salsa." },
    { id: 3, title: "Breakfast Burrito", category: "breakfast", image: "Breakfast-burrito.jpg", instructions: "1. Wrap scrambled eggs and beans in a tortilla." },
    { id: 4, title: "Tostadas", category: "breakfast", image: "tostada.jpg", instructions: "1. Fry tortillas. 2. Top with beans and avocado." },
    { id: 5, title: "Avocado Toast", category: "breakfast", image: "Avocado-Toast.jpg", instructions: "1. Mash avocado. 2. Spread on toast. 3. Add toppings." },
    { id: 6, title: "Mexican Omelette", category: "breakfast", image: "mexican-omelette.jpg", instructions: "1. Beat eggs. 2. Add cheese and salsa." },
    { id: 7, title: "Pozole", category: "breakfast", image: "pozole.jpg", instructions: "1. Cook hominy with broth. 2. Add spices." },
    { id: 8, title: "Tamales", category: "breakfast", image: "tamales.jpg", instructions: "1. Wrap masa in corn husks. 2. Steam until cooked." },
    { id: 9, title: "Enchiladas", category: "breakfast", image: "enchiladas.jpg", instructions: "1. Fill tortillas with cheese. 2. Cover with sauce." },
    { id: 10, title: "Quesadilla", category: "breakfast", image: "quesadilla.jpg", instructions: "1. Fill tortilla with cheese. 2. Grill until melted." },
  
    // Lunch Recipes
    { id: 11, title: "Taco Salad", category: "lunch", image: "tacosalad.jpg", instructions: "1. Mix lettuce, beans, and salsa. 2. Top with cheese." },
    { id: 12, title: "Fajitas", category: "lunch", image: "fajitass.jpg", instructions: "1. Stir-fry veggies and meat. 2. Serve with tortillas." },
    { id: 13, title: "Burrito Bowl", category: "lunch", image: "burritobowl.jpg", instructions: "1. Layer rice, beans, and salsa. 2. Add toppings." },
    { id: 14, title: "Nachos", category: "lunch", image: "nachoss.jpg", instructions: "1. Bake tortilla chips. 2. Top with cheese and salsa." },
    { id: 15, title: "Guacamole", category: "lunch", image: "guacaamole.jpg", instructions: "1. Mash avocados. 2. Add lime and spices." },
    { id: 16, title: "Chili Con Carne", category: "lunch", image: "chiiliconcarne.jpg", instructions: "1. Cook beef with beans. 2. Add spices." },
    { id: 17, title: "Salsa Verde", category: "lunch", image: "salsa-verde.jpg", instructions: "1. Blend tomatillos. 2. Add spices." },
    { id: 18, title: "Queso Dip", category: "lunch", image: "queso-dip.jpg", instructions: "1. Melt cheese. 2. Add spices." },
    { id: 19, title: "Elote", category: "lunch", image: "elote.jpg", instructions: "1. Grill corn. 2. Add mayo and cheese." },
    { id: 20, title: "Pico de Gallo", category: "lunch", image: "pico-de-gallo.jpg", instructions: "1. Chop tomatoes and onions. 2. Add lime." },
  
    // Dinner Recipes
    { id: 21, title: "Carne Asada", category: "dinner", image: "carne-asada.jpg", instructions: "1. Grill marinated steak. 2. Serve with tortillas." },
    { id: 22, title: "Mole Poblano", category: "dinner", image: "mole-poblano.png", instructions: "1. Cook chocolate sauce. 2. Add chicken." },
    { id: 23, title: "Chiles Rellenos", category: "dinner", image: "chilles-rellenos.png", instructions: "1. Stuff peppers with cheese. 2. Fry until golden." },
    { id: 24, title: "Carnitas", category: "dinner", image: "carnitas.jpg", instructions: "1. Slow-cook pork. 2. Fry until crispy." },
    { id: 25, title: "Tacos Al Pastor", category: "dinner", image: "tacos-al-pastor.jpg", instructions: "1. Marinate pork. 2. Grill and serve with pineapple." },
    { id: 26, title: "Pozole Rojo", category: "dinner", image: "pozole-rojo.jpg", instructions: "1. Cook hominy with broth. 2. Add spices." },
    { id: 27, title: "Flautas", category: "dinner", image: "flautas.jpg", instructions: "1. Roll tortillas with filling. 2. Fry until crispy." },
    { id: 28, title: "Sopes", category: "dinner", image: "sopes.jpg", instructions: "1. Top masa cakes with beans and toppings." },
    { id: 29, title: "Tamales", category: "dinner", image: "tamales.jpg", instructions: "1. Wrap masa in corn husks. 2. Steam until cooked." },
    { id: 30, title: "Enchiladas Suizas", category: "dinner", image: "enchiladas-suizas.jpg", instructions: "1. Fill tortillas with cheese. 2. Cover with sauce." },
  
    // Dessert Recipes
    { id: 31, title: "Flan", category: "dessert", image: "flan.jpg", instructions: "1. Bake custard. 2. Add caramel topping." },
    { id: 32, title: "Churros", category: "dessert", image: "churros.jpg", instructions: "1. Fry dough sticks. 2. Coat with cinnamon sugar." },
    { id: 33, title: "Arroz con Leche", category: "dessert", image: "arroz-con-leche.png", instructions: "1. Cook rice with milk. 2. Add sugar and cinnamon." },
    { id: 34, title: "Tres Leches Cake", category: "dessert", image: "tres-leches-cake.png", instructions: "1. Soak cake in milk. 2. Top with whipped cream." },
    { id: 35, title: "Mexican Hot Chocolate", category: "dessert", image: "mexican-hotchocolate.jpg", instructions: "1. Heat chocolate with spices. 2. Add milk." },
    { id: 36, title: "Cajeta", category: "dessert", image: "cajeta.png", instructions: "1. Cook goat's milk. 2. Add sugar." },
    { id: 37, title: "Buñuelos", category: "dessert", image: "bunuelos.png", instructions: "1. Fry dough balls. 2. Coat with syrup." },
    { id: 38, title: "Pan Dulce", category: "dessert", image: "pan-dulce.jpg", instructions: "1. Bake sweet bread. 2. Add sugar topping." },
    { id: 39, title: "Pastel de Tres Leches", category: "dessert", image: "pastel-de-tres-leches.png", instructions: "1. Soak cake in milk. 2. Top with cream." },
    { id: 40, title: "Empanadas", category: "dessert", image: "empanadas.jpg", instructions: "1. Fill pastry with fruit. 2. Bake until golden." },
  
    // Beverage Recipes
    { id: 41, title: "Horchata", category: "beverage", image: "horchata.png", instructions: "1. Blend rice and cinnamon. 2. Add sugar." },
    { id: 42, title: "Agua Fresca", category: "beverage", image: "agua-fresca.png", instructions: "1. Blend fruits with water. 2. Add sugar." },
    { id: 43, title: "Michelada", category: "beverage", image: "michelada.jpg", instructions: "1. Mix beer with lime and spices." },
    { id: 44, title: "Margarita", category: "beverage", image: "margarita.jpg", instructions: "1. Mix tequila, lime, and triple sec." },
    { id: 45, title: "Tequila Sunrise", category: "beverage", image: "tequilesunrise.jpg", instructions: "1. Mix tequila and orange juice. 2. Add grenadine." },
    { id: 46, title: "Paloma", category: "beverage", image: "paloma.jpg", instructions: "1. Mix tequila and grapefruit soda." },
    { id: 47, title: "Mexican Coffee", category: "beverage", image: "mexican-coffee.jpg", instructions: "1. Brew coffee. 2. Add cinnamon." },
    { id: 48, title: "Jamaica Agua Fresca", category: "beverage", image: "jamaica-agua-fresca.png", instructions: "1. Boil hibiscus flowers. 2. Add sugar." },
    { id: 49, title: "Tamarindo Drink", category: "beverage", image: "tamarindo-drink.png", instructions: "1. Blend tamarind paste. 2. Add sugar." },
    { id: 50, title: "Chocolate Caliente", category: "beverage", image: "chocolate-caliente.jpg", instructions: "1. Heat chocolate with milk. 2. Add spices." }
  ];
  
  window.mexican = mexican;