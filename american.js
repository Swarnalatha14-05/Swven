const american = [
  // Breakfast Recipes
  { id: 1, title: "Pancakes", category: "breakfast", image: "pancakes.jpg", instructions: "1. Mix flour, eggs, and milk. 2. Cook on a hot griddle. 3. Serve with syrup." },
  { id: 2, title: "Omelette", category: "breakfast", image: "omelette.jpg", instructions: "1. Beat eggs and add salt. 2. Cook in a pan with butter. 3. Add cheese or veggies." },
  { id: 3, title: "Avocado Toast", category: "breakfast", image: "Avocado-Toast.jpg ", instructions: "1. Toast bread. 2. Mash avocado and spread on toast. 3. Add toppings like eggs or tomatoes." },
  { id: 4, title: "Waffles", category: "breakfast", image: "waffles.jpg", instructions: "1. Mix batter with flour, eggs, and milk. 2. Cook in a waffle iron. 3. Serve with fruits or syrup." },
  { id: 5, title: "French Toast", category: "breakfast", image: "French-Toast.jpg",instructions: "1. Dip bread in egg mixture. 2. Fry until golden brown. 3. Top with syrup or powdered sugar." },
  { id: 6, title: "Smoothie Bowl", category: "breakfast", image: " smoothie-bowl.jpg",instructions: "1. Blend frozen fruits. 2. Pour into a bowl. 3. Add granola, nuts, or seeds." },
  { id: 7, title: "Bagel with Cream Cheese", category: "breakfast", image: "bagel-with-cream-cheese.jpg",instructions: "1. Toast bagel. 2. Spread cream cheese. 3. Add smoked salmon or veggies." },
  { id: 8, title: "Granola Parfait", category: "breakfast", image: "Granola-parfait.jpg",instructions: "1. Layer yogurt, granola, and fruits. 2. Repeat layers. 3. Serve chilled." },
  { id: 9, title: "Eggs Benedict", category: "breakfast", image: "egg-benedict.jpg" , instructions: "1. Poach eggs. 2. Place on toasted English muffins. 3. Drizzle with hollandaise sauce." },
  { id: 10, title: "Breakfast Burrito", category: "breakfast", image: "Breakfast-burrito.jpg", instructions: "1. Scramble eggs and cook sausage. 2. Wrap in a tortilla with cheese. 3. Serve warm." },

  // Lunch Recipes
  { id: 11, title: "Grilled Chicken Sandwich", category: "lunch", image: "grilled-chicken-sandwich.jpg", instructions: "1. Grill chicken breast. 2. Assemble sandwich with lettuce and mayo. 3. Serve warm." },
  { id: 12, title: "Caesar Salad", category: "lunch", image: "caesar-salad.jpg", instructions: "1. Toss romaine lettuce with dressing. 2. Add croutons and parmesan. 3. Top with grilled chicken." },
  { id: 13, title: "Tuna Salad Wrap", category: "lunch", image: "tuna-salad-wrap.jpg", instructions: "1. Mix tuna with mayo and spices. 2. Spread on a tortilla. 3. Roll and slice." },
  { id: 14, title: "Vegetable Stir-Fry", category: "lunch", image: "vegetable-stir-fry.jpg", instructions: "1. Stir-fry veggies in oil. 2. Add soy sauce and spices. 3. Serve with rice or noodles." },
  { id: 15, title: "Beef Tacos", category: "lunch", image: "beef-tacos.jpg", instructions: "1. Cook ground beef with taco seasoning. 2. Fill tortillas with beef and toppings. 3. Serve with salsa." },
  { id: 16, title: "Quinoa Salad", category: "lunch", image: "quinoa-salad.jpg", instructions: "1. Cook quinoa. 2. Mix with veggies and dressing. 3. Chill before serving." },
  { id: 17, title: "Chicken Caesar Wrap", category: "lunch", image: "chicken-caesar-salad.jpg", instructions: "1. Toss chicken with Caesar dressing. 2. Wrap in a tortilla with lettuce. 3. Slice and serve." },
  { id: 18, title: "Shrimp Avocado Salad", category: "lunch", image: "shrimp-avocado-salad.jpg", instructions: "1. Toss shrimp and avocado with lime juice. 2. Add greens and dressing. 3. Serve chilled." },
  { id: 19, title: "Veggie Burger", category: "lunch", image: "veggie-burger.jpg", instructions: "1. Grill veggie patty. 2. Assemble burger with toppings. 3. Serve with fries." },
  { id: 20, title: "Caprese Sandwich", category: "lunch", image: "caprese-sandwich.jpg", instructions: "1. Layer mozzarella, tomato, and basil. 2. Drizzle with olive oil. 3. Serve on ciabatta." },

  // Dinner Recipes
  { id: 21, title: "Spaghetti Carbonara", category: "dinner", image: "spaghetti-carbonara.jpg", instructions: "1. Cook spaghetti. 2. Mix eggs, cheese, and bacon. 3. Combine and serve." },
  { id: 22, title: "Steak with Garlic Butter", category: "dinner", image: "steak-with-garlicbutter.jpg", instructions: "1. Grill steak to desired doneness. 2. Top with garlic butter. 3. Serve with sides." },
  { id: 23, title: "Chicken Alfredo", category: "dinner", image: "chicken-alfredo.jpg", instructions: "1. Cook fettuccine. 2. Make Alfredo sauce with cream and cheese. 3. Add grilled chicken." },
  { id: 24, title: "Salmon with Asparagus", category: "dinner", image: "salmon.jpg", instructions: "1. Roast salmon and asparagus. 2. Season with lemon and herbs. 3. Serve warm." },
  { id: 25, title: "Beef Stew", category: "dinner", image: "beef-stew.jpg", instructions: "1. Brown beef chunks. 2. Simmer with veggies and broth. 3. Serve with bread." },
  { id: 26, title: "Shrimp Scampi", category: "dinner", image: "shrimp-scampi.jpg", instructions: "1. Sauté shrimp in garlic butter. 2. Add pasta and parsley. 3. Toss and serve." },
  { id: 27, title: "Vegetable Curry", category: "dinner", image: "vegetable-curry.jpg", instructions: "1. Cook curry paste with coconut milk. 2. Add veggies and simmer. 3. Serve with rice." },
  { id: 28, title: "Lamb Chops", category: "dinner", image: "lamb-chops.jpg", instructions: "1. Marinate lamb chops. 2. Grill or bake until tender. 3. Serve with mint sauce." },
  { id: 29, title: "Stuffed Peppers", category: "dinner", image: "stuffed-peppers.jpg", instructions: "1. Hollow out peppers. 2. Stuff with rice and meat mixture. 3. Bake until tender." },
  { id: 30, title: "Chicken Parmesan", category: "dinner", image: "chicken-parmesan.jpg", instructions: "1. Bread chicken cutlets. 2. Fry until golden. 3. Top with marinara and cheese." },

  // Dessert Recipes
  { id: 31, title: "Chocolate Lava Cake", category: "dessert", image: "lava-cake.jpg", instructions: "1. Bake chocolate batter. 2. Add molten chocolate center. 3. Serve with ice cream." },
  { id: 32, title: "Cheesecake", category: "dessert", image: "cheese-cake.jpg", instructions: "1. Mix cream cheese and sugar. 2. Bake in a crust. 3. Chill before serving." },
  { id: 33, title: "Apple Pie", category: "dessert", image: "apple-pies.jpg", instructions: "1. Fill pie crust with apples. 2. Add cinnamon and sugar. 3. Bake until golden." },
  { id: 34, title: "Tiramisu", category: "dessert", image: "tiramisu.jpg", instructions: "1. Layer coffee-soaked ladyfingers. 2. Add mascarpone cream. 3. Dust with cocoa powder." },
  { id: 35, title: "Brownies", category: "dessert", image: "brownies.jpg", instructions: "1. Mix chocolate batter. 2. Bake until set. 3. Cut into squares." },
  { id: 36, title: "Ice Cream Sundae", category: "dessert", image: "icecream-sundae.jpg", instructions: "1. Scoop ice cream into a bowl. 2. Add toppings like chocolate syrup and nuts. 3. Serve chilled." },
  { id: 37, title: "Fruit Tart", category: "dessert", image: "fruit-tart.jpg", instructions: "1. Fill tart shell with pastry cream. 2. Arrange fresh fruits on top. 3. Glaze with jelly." },
  { id: 38, title: "Macarons", category: "dessert", image: "macarons.jpg", instructions: "1. Whip meringue and fold in almond flour. 2. Pipe and bake. 3. Fill with ganache." },
  { id: 39, title: "Cupcakes", category: "dessert", image: "cupcakes.jpg", instructions: "1. Bake vanilla cupcakes. 2. Frost with buttercream. 3. Decorate with sprinkles." },
  { id: 40, title: "Banana Bread", category: "dessert", image: "banana-bread.jpg", instructions: "1. Mix bananas, flour, and sugar. 2. Bake in a loaf pan. 3. Slice and serve." },

  // Beverage Recipes
  { id: 41, title: "Iced Latte", category: "beverage", image: "Iced-latte.jpg", instructions: "1. Brew espresso. 2. Add cold milk and ice. 3. Stir and enjoy." },
  { id: 42, title: "Mojito", category: "beverage", image: "mojito.jpg", instructions: "1. Muddle mint leaves with lime juice. 2. Add rum and soda. 3. Serve with ice." },
  { id: 43, title: "Smoothie", category: "beverage", image: "smoothie.jpg", instructions: "1. Blend fruits and yogurt. 2. Add honey or protein powder. 3. Serve chilled." },
  { id: 44, title: "Hot Chocolate", category: "beverage", image: "hotchoco.jpg", instructions: "1. Heat milk and chocolate. 2. Whisk until smooth. 3. Top with marshmallows." },
  { id: 45, title: "Lemonade", category: "beverage", image: "lemonade.jpg", instructions: "1. Mix lemon juice, water, and sugar. 2. Chill. 3. Serve with ice and mint." },
  { id: 46, title: "Green Tea", category: "beverage", image: "green-tea.jpg", instructions: "1. Steep green tea leaves. 2. Add honey or lemon. 3. Serve hot or cold." },
  { id: 47, title: "Milkshake", category: "beverage", image: "milkshake.jpg", instructions: "1. Blend ice cream and milk. 2. Add flavoring like chocolate or strawberry. 3. Serve with whipped cream." },
  { id: 48, title: "Espresso Martini", category: "beverage", image: "espresso-martini.jpg", instructions: "1. Shake espresso, vodka, and coffee liqueur. 2. Strain into a glass. 3. Garnish with coffee beans." },
  { id: 49, title: "Berry Smoothie", category: "beverage", image: "berrysmoothie.jpg", instructions: "1. Blend berries with yogurt. 2. Add honey or chia seeds. 3. Serve chilled." },
  { id: 50, title: "Chai Tea", category: "beverage", image: "chaitea.jpg", instructions: "1. Boil water with spices and tea leaves. 2. Add milk and sugar. 3. Strain and serve hot." }
];

window.american = american;