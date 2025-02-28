// chinese.js

const chinese = [
    // Breakfast Recipes
    { id: 1, title: "Congee", category: "breakfast", image: "congee.jpg", instructions: "1. Cook rice with water until porridge-like. 2. Add toppings like pickles or eggs." },
    { id: 2, title: "Soy Milk and Youtiao", category: "breakfast", image: "soymilk-and-youtiao.jpg", instructions: "1. Serve warm soy milk. 2. Pair with fried dough sticks (youtiao)." },
    { id: 3, title: "Dim Sum", category: "breakfast", image: "dim-sum.jpg", instructions: "1. Steam dumplings and buns. 2. Serve with soy sauce or vinegar." },
    { id: 4, title: "Spring Rolls", category: "breakfast", image: "spring-rolls.jpg", instructions: "1. Fill wrappers with veggies. 2. Fry until crispy." },
    { id: 5, title: "Steamed Buns", category: "breakfast", image: "steamed-buns.jpg", instructions: "1. Steam buns filled with pork or veggies. 2. Serve warm." },
    { id: 6, title: "Rice Noodle Rolls", category: "breakfast", image: "rice-noodle-rolls.jpg", instructions: "1. Roll rice noodles with fillings. 2. Steam and serve with soy sauce." },
    { id: 7, title: "Tea Eggs", category: "breakfast", image: "tea-eggs.jpg", instructions: "1. Crack eggs and boil with tea and spices. 2. Let marinate overnight." },
    { id: 8, title: "Pork Dumplings", category: "breakfast", image: "pork-dumplings.jpg", instructions: "1. Fill dumpling wrappers with pork. 2. Steam or pan-fry." },
    { id: 9, title: "Scallion Pancakes", category: "breakfast", image: "Scallion-pancakes.jpg", instructions: "1. Make dough with scallions. 2. Pan-fry until crispy." },
    { id: 10, title: "Tofu Pudding", category: "breakfast", image: "tofu-pudding.jpg", instructions: "1. Set tofu pudding. 2. Top with soy sauce and chili oil." },
  
    // Lunch Recipes
    { id: 11, title: "Kung Pao Chicken", category: "lunch", image: "kung-pao-chicken.jpg", instructions: "1. Stir-fry chicken with peanuts and veggies. 2. Add spicy sauce." },
    { id: 12, title: "Mapo Tofu", category: "lunch", image: "mapo-tofu.jpg", instructions: "1. Cook tofu with ground pork. 2. Add spicy bean paste." },
    { id: 13, title: "Fried Rice", category: "lunch", image: "fried-rice.jpg", instructions: "1. Stir-fry rice with veggies and egg. 2. Add soy sauce." },
    { id: 14, title: "Hot Pot", category: "lunch", image: "hot-pot.jpg", instructions: "1. Boil broth. 2. Dip meats and veggies into broth." },
    { id: 15, title: "Sweet and Sour Pork", category: "lunch", image: "sweet-and-sour-pork.jpg", instructions: "1. Fry pork chunks. 2. Coat with sweet and sour sauce." },
    { id: 16, title: "Chow Mein", category: "lunch", image: "chow-mein.jpg", instructions: "1. Stir-fry noodles with veggies. 2. Add soy sauce." },
    { id: 17, title: "Dumpling Soup", category: "lunch", image: "dumpling-soup.jpg", instructions: "1. Boil dumplings in broth. 2. Add herbs and spices." },
    { id: 18, title: "Egg Fried Rice", category: "lunch", image: "egg-fried-rice.jpg", instructions: "1. Stir-fry rice with scrambled eggs. 2. Add green onions." },
    { id: 19, title: "Beef Noodle Soup", category: "lunch", image: "beef-noodle-soup.jpg", instructions: "1. Cook beef in broth. 2. Add noodles and spices." },
    { id: 20, title: "Shrimp Fried Rice", category: "lunch", image: "shrimp-fried-rice.jpg", instructions: "1. Stir-fry shrimp with rice. 2. Add soy sauce and veggies." },
  
    // Dinner Recipes
    { id: 21, title: "Peking Duck", category: "dinner", image: "peeking-duck.jpg", instructions: "1. Roast duck until crispy. 2. Serve with pancakes and hoisin sauce." },
    { id: 22, title: "General Tso's Chicken", category: "dinner", image: "general.jpg", instructions: "1. Fry chicken chunks. 2. Coat with spicy sauce." },
    { id: 23, title: "Buddha's Delight", category: "dinner", image: "buddha-delight.jpg", instructions: "1. Stir-fry mixed veggies. 2. Add soy sauce and spices." },
    { id: 24, title: "Orange Chicken", category: "dinner", image: "orange-chicken.jpg", instructions: "1. Fry chicken chunks. 2. Coat with orange glaze." },
    { id: 25, title: "Mongolian Beef", category: "dinner", image: "mongolian-beef.jpg", instructions: "1. Stir-fry beef with garlic and ginger. 2. Add soy sauce." },
    { id: 26, title: "Szechuan Shrimp", category: "dinner", image: "Szechuan-shrimp.jpg", instructions: "1. Stir-fry shrimp with chili and garlic. 2. Add Szechuan peppercorns." },
    { id: 27, title: "Hunan Chicken", category: "dinner", image: "hunan.jpg", instructions: "1. Stir-fry chicken with spicy Hunan sauce." },
    { id: 28, title: "Crispy Lemon Chicken", category: "dinner", image: "crispy-lemon-chicken.jpg", instructions: "1. Fry chicken chunks. 2. Coat with lemon sauce." },
    { id: 29, title: "Chicken Chow Fun", category: "dinner", image: "chicken-chow-fun.jpg", instructions: "1. Stir-fry wide noodles with chicken and veggies." },
    { id: 30, title: "Red-Cooked Pork Belly", category: "dinner", image: "red-cooked-porkbelly.jpg", instructions: "1. Slow-cook pork belly in soy sauce and spices." },
  
    // Dessert Recipes
    { id: 31, title: "Mooncakes", category: "dessert", image: "mooncakes.jpg", instructions: "1. Fill pastry with lotus seed paste. 2. Bake or steam." },
    { id: 32, title: "Sesame Balls", category: "dessert", image: "sesame-balls.jpg", instructions: "1. Roll glutinous rice balls in sesame seeds. 2. Fry until golden." },
    { id: 33, title: "Red Bean Paste Buns", category: "dessert", image: "redbean-pastebuns.jpg", instructions: "1. Fill buns with red bean paste. 2. Steam until soft." },
    { id: 34, title: "Lychee Jelly", category: "dessert", image: "lychee-jelly.jpg", instructions: "1. Set lychee jelly. 2. Chill before serving." },
    { id: 35, title: "Almond Cookies", category: "dessert", image: "almond-cookies.jpg", instructions: "1. Bake cookies with almond flour. 2. Decorate with almonds." },
    { id: 36, title: "Glutinous Rice Cake", category: "dessert", image: "ricecake.jpg", instructions: "1. Steam glutinous rice with sugar. 2. Cut into squares." },
    { id: 37, title: "Tangyuan", category: "dessert", image: "tangyuan.jpg", instructions: "1. Make glutinous rice balls. 2. Boil and serve in syrup." },
    { id: 38, title: "Coconut Pudding", category: "dessert", image: "coconutpudding.jpg", instructions: "1. Mix coconut milk with sugar. 2. Set in molds." },
    { id: 39, title: "Mango Pudding", category: "dessert", image: "mango-pudding.jpg", instructions: "1. Blend mango puree with gelatin. 2. Chill until set." },
    { id: 40, title: "Lotus Seed Paste Pastry", category: "dessert", image: "lotusseed-paste-pastry.jpg", instructions: "1. Fill pastry with lotus seed paste. 2. Bake until golden." },
  
    // Beverage Recipes
    { id: 41, title: "Jasmine Tea", category: "beverage", image: "jasmine-tea.jpg", instructions: "1. Steep jasmine tea leaves. 2. Serve hot or cold." },
    { id: 42, title: "Bubble Tea", category: "beverage", image: "bubbletea.jpg", instructions: "1. Brew tea. 2. Add milk and tapioca pearls." },
    { id: 43, title: "Lychee Martini", category: "beverage", image: "lynchee-martini.jpg", instructions: "1. Shake lychee juice with vodka. 2. Strain into a glass." },
    { id: 44, title: "Oolong Tea", category: "beverage", image: "oolongtea.jpg", instructions: "1. Steep oolong tea leaves. 2. Add honey or lemon." },
    { id: 45, title: "Green Tea Latte", category: "beverage", image: "greentealatte.png", instructions: "1. Mix green tea with steamed milk. 2. Sweeten to taste." },
    { id: 46, title: "Osmanthus Tea", category: "beverage", image: "Osmanthustea.png", instructions: "1. Steep osmanthus flowers. 2. Add honey if desired." },
    { id: 47, title: "Chrysanthemum Tea", category: "beverage", image: "chrysanthemumtea.jpg", instructions: "1. Steep chrysanthemum flowers. 2. Serve hot or cold." },
    { id: 48, title: "Longan Drink", category: "beverage", image: "longandrink.png", instructions: "1. Boil longan fruit. 2. Add sugar and chill." },
    { id: 49, title: "Mango Smoothie", category: "beverage", image: "mango-smoothie.jpg", instructions: "1. Blend mango with yogurt. 2. Add honey or ice." },
    { id: 50, title: "Ginger Tea", category: "beverage", image: "gingertea.jpg", instructions: "1. Boil ginger slices. 2. Add honey and lemon." }
  ];
  
  window.chinese = chinese;