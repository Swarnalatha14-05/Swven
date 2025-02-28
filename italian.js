const italian = [
    { id: 1, title: "Cappuccino and Cornetto", category: "breakfast", image: "capapuccino-and-cornetto.jpg", instructions: "1. Brew espresso. 2. Froth milk and pour over coffee. 3. Pair with a sweet croissant." },
    { id: 2, title: "Frittata", category: "breakfast", image: "frittata.jpg", instructions: "1. Beat eggs and add veggies or cheese. 2. Cook in a pan until set." },
    { id: 3, title: "Biscotti", category: "breakfast", image: "biscotti.jpg", instructions: "1. Bake twice for crunchy cookies. 2. Dip in coffee or tea." },
    { id: 4, title: "Panzanella", category: "breakfast", image: "panzanella.jpg", instructions: "1. Soak stale bread in tomato mixture. 2. Add olive oil and basil." },
    { id: 5, title: "Ricotta Pancakes", category: "breakfast", image: "ricotta-pancakes.jpg", instructions: "1. Mix ricotta into pancake batter. 2. Cook on a griddle." },
    { id: 6, title: "Ciabatta with Olive Oil", category: "breakfast", image: "ciabatta-with-oliveoil.jpg", instructions: "1. Toast ciabatta. 2. Drizzle with olive oil and sprinkle salt." },
    { id: 7, title: "Granola with Yogurt", category: "breakfast", image: "granola-with-breakfast.jpg", instructions: "1. Layer granola with yogurt and fruits. 2. Serve chilled." },
    { id: 8, title: "Espresso", category: "breakfast", image: "espresso.jpg", instructions: "1. Brew finely ground coffee. 2. Serve in small cups." },
    { id: 9, title: "Focaccia", category: "breakfast", image: "focaccia.jpg", instructions: "1. Bake flatbread with olive oil and herbs. 2. Serve warm." },
    { id: 10, title: "Strawberry Crostata", category: "breakfast", image: "strawberry-crostata.jpg",instructions: "1. Fill tart shell with jam. 2. Arrange strawberries on top." },
  
    // Lunch Recipes
    { id: 11, title: "Margherita Pizza", category: "lunch", image: "margherita-pizza.jpg", instructions: "1. Spread tomato sauce on dough. 2. Add mozzarella and basil. 3. Bake until bubbly." },
    { id: 12, title: "Caprese Salad", category: "lunch", image: "caprese-salad.jpg", instructions: "1. Slice tomatoes and mozzarella. 2. Drizzle with olive oil and balsamic." },
    { id: 13, title: "Minestrone Soup", category: "lunch", image: "minestrone-soup.jpg", instructions: "1. Simmer veggies and beans in broth. 2. Add pasta and herbs." },
    { id: 14, title: "Bruschetta", category: "lunch", image: "bruschetta.jpg", instructions: "1. Toast bread. 2. Top with diced tomatoes and basil." },
    { id: 15, title: "Pasta Primavera", category: "lunch", image: "pasta-primavera.jpg", instructions: "1. Cook pasta with seasonal veggies. 2. Toss with olive oil." },
    { id: 16, title: "Risotto", category: "lunch", image: "risotto.jpg", instructions: "1. Cook Arborio rice with broth. 2. Add Parmesan and butter." },
    { id: 17, title: "Panini", category: "lunch", image: "panini.jpg", instructions: "1. Fill bread with cheese and veggies. 2. Grill until melted." },
    { id: 18, title: "Lasagna", category: "lunch", image: "lasagna.jpg", instructions: "1. Layer pasta with meat sauce and cheese. 2. Bake until golden." },
    { id: 19, title: "Arancini", category: "lunch", image: "arancini.jpg", instructions: "1. Roll risotto into balls. 2. Stuff with cheese and fry." },
    { id: 20, title: "Prosciutto and Melon", category: "lunch", image: "prosciutto-melon.jpg", instructions: "1. Wrap melon slices with prosciutto. 2. Serve chilled." },
  
    // Dinner Recipes
    { id: 21, title: "Spaghetti Carbonara", category: "dinner", image: "spaghetti-carbonara.jpg", instructions: "1. Cook spaghetti. 2. Mix eggs, cheese, and pancetta. 3. Combine and serve." },
    { id: 22, title: "Osso Buco", category: "dinner", image: "osso-buco.png", instructions: "1. Braise veal shanks with veggies. 2. Add white wine and broth." },
    { id: 23, title: "Chicken Parmesan", category: "dinner", image: "chicken-parmesan.jpg", instructions: "1. Bread chicken cutlets. 2. Fry and top with marinara and cheese." },
    { id: 24, title: "Ravioli", category: "dinner", image: "ravioli.jpg", instructions: "1. Fill pasta with cheese or meat. 2. Boil and serve with sauce." },
    { id: 25, title: "Pollo alla Cacciatora", category: "dinner", image: "polla-alla-cacciatora.jpg", instructions: "1. Cook chicken with tomatoes and herbs. 2. Serve with bread." },
    { id: 26, title: "Seafood Risotto", category: "dinner", image: "seafood-risotto.jpg", instructions: "1. Cook Arborio rice with seafood. 2. Add white wine and herbs." },
    { id: 27, title: "Eggplant Parmesan", category: "dinner", image: "eggplant.jpg", instructions: "1. Bread eggplant slices. 2. Fry and layer with marinara and cheese." },
    { id: 28, title: "Beef Braciole", category: "dinner", image: "beef-braciola.jpg", instructions: "1. Roll beef slices with filling. 2. Braise in tomato sauce." },
    { id: 29, title: "Calamari Fritti", category: "dinner", image: "calamari-fritti.jpg", instructions: "1. Coat squid rings in batter. 2. Fry until crispy." },
    { id: 30, title: "Veal Scaloppine", category: "dinner", image: "veal-scaloppine.png", instructions: "1. Pound veal thin. 2. Cook with lemon and butter." },
  
    // Dessert Recipes
    { id: 31, title: "Tiramisu", category: "dessert", image: "tiramisu.jpg", instructions: "1. Layer coffee-soaked ladyfingers. 2. Add mascarpone cream. 3. Dust with cocoa powder." },
    { id: 32, title: "Cannoli", category: "dessert", image: "cannoli.jpg", instructions: "1. Fill pastry shells with ricotta cream. 2. Dust with powdered sugar." },
    { id: 33, title: "Panna Cotta", category: "dessert", image: "panna-cotta.jpg", instructions: "1. Mix cream and gelatin. 2. Chill until set." },
    { id: 34, title: "Gelato", category: "dessert", image: "gelato.jpg", instructions: "1. Churn ice cream base. 2. Freeze until firm." },
    { id: 35, title: "Zabaglione", category: "dessert", image: "zabaglione.png", instructions: "1. Whisk egg yolks, sugar, and Marsala wine. 2. Serve warm." },
    { id: 36, title: "Amaretti Cookies", category: "dessert", image: "amaretti-cookies.jpg", instructions: "1. Bake almond cookies. 2. Serve with coffee." },
    { id: 37, title: "Limoncello Tart", category: "dessert", image: "limoncello-tart.jpg", instructions: "1. Fill tart shell with limoncello custard. 2. Garnish with zest." },
    { id: 38, title: "Ricotta Cheesecake", category: "dessert", image: "cheese-cake.jpg", instructions: "1. Mix ricotta with sugar and eggs. 2. Bake in a crust." },
    { id: 39, title: "Biscotti al Cioccolato", category: "dessert", image: "biscotti.jpg", instructions: "1. Bake chocolate cookies. 2. Dip in coffee or tea." },
    { id: 40, title: "Struffoli", category: "dessert", image: "struffoli.png", instructions: "1. Fry dough balls. 2. Coat with honey and sprinkles." },
  
    // Beverage Recipes
    { id: 41, title: "Espresso", category: "beverage", image: "espresso.jpg", instructions: "1. Brew finely ground coffee. 2. Serve in small cups." },
    { id: 42, title: "Aperol Spritz", category: "beverage", image: "aperolspirtz.jpg", instructions: "1. Mix Aperol, prosecco, and soda. 2. Garnish with an orange slice." },
    { id: 43, title: "Negroni", category: "beverage", image: "negroni.jpg", instructions: "1. Mix gin, Campari, and vermouth. 2. Stir and serve with ice." },
    { id: 44, title: "Bellini", category: "beverage", image: "bellini.png", instructions: "1. Blend peach puree with prosecco. 2. Serve chilled." },
    { id: 45, title: "Caffè Shakerato", category: "beverage", image: "caffee-shakerato.jpg", instructions: "1. Shake espresso with ice. 2. Strain into a glass." },
    { id: 46, title: "Limoncello", category: "beverage", image: "limoncello.png", instructions: "1. Infuse lemon peels in alcohol. 2. Add sugar syrup." },
    { id: 47, title: "Grappa", category: "beverage", image: "grappa.png", instructions: "1. Distill grape pomace. 2. Serve as a digestif." },
    { id: 48, title: "Italian Soda", category: "beverage", image: "italiansoda.png", instructions: "1. Mix flavored syrup with soda water. 2. Add ice." },
    { id: 49, title: "Prosecco", category: "beverage", image: "prosecco.jpg", instructions: "1. Chill sparkling wine. 2. Serve in flutes." },
    { id: 50, title: "Campari Orange", category: "beverage", image: "campariorange.jpg", instructions: "1. Mix Campari with orange juice. 2. Serve over ice." }
  ];
  
  window.italian = italian;