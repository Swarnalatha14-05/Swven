// indian.js

const indian = [
    // Breakfast Recipes
    { id: 1, title: "Masala Dosa", category: "breakfast", image: "masala-dosa.jpg", instructions: "1. Prepare dosa batter. 2. Spread on a hot griddle. 3. Add spiced potato filling." },
    { id: 2, title: "Poha", category: "breakfast", image: "poha.jpg", instructions: "1. Soak flattened rice. 2. Cook with spices and peanuts. 3. Garnish with coriander." },
    { id: 3, title: "Idli", category: "breakfast", image: "idli.jpg", instructions: "1. Ferment rice and lentil batter. 2. Steam in molds. 3. Serve with chutney." },
    { id: 4, title: "Upma", category: "breakfast", image: "upma.jpg", instructions: "1. Roast semolina. 2. Cook with water and spices. 3. Garnish with curry leaves." },
    { id: 5, title: "Paratha", category: "breakfast", image: "paratha.jpg", instructions: "1. Make dough with flour. 2. Stuff with potatoes or paneer. 3. Cook on a griddle." },
    { id: 6, title: "Aloo Puri", category: "breakfast", image: "aloopuri.jpg", instructions: "1. Fry puris in oil. 2. Serve with spiced potato curry." },
    { id: 7, title: "Chole Bhature", category: "breakfast", image: "cholebatura.jpg", instructions: "1. Cook chickpeas in gravy. 2. Serve with fried bread." },
    { id: 8, title: "Medu Vada", category: "breakfast", image: "medu-vada.jpg", instructions: "1. Make lentil batter. 2. Deep fry into donuts. 3. Serve with sambar." },
    { id: 9, title: "Appam", category: "breakfast", image: "Appam.jpg", instructions: "1. Ferment rice and coconut milk. 2. Cook on a griddle. 3. Serve with stew." },
    { id: 10, title: "Thalipeeth", category: "breakfast", image: "thalipeeth.png", instructions: "1. Mix multigrain flour. 2. Cook on a griddle. 3. Serve with yogurt." },
  
    // Lunch Recipes
    { id: 11, title: "Butter Chicken", category: "lunch", image: "butter-chicken.jpg", instructions: "1. Marinate chicken in spices. 2. Cook in tomato gravy. 3. Finish with butter." },
    { id: 12, title: "Paneer Tikka Masala", category: "lunch", image: "paneer-tikka-masala.jpg", instructions: "1. Grill paneer cubes. 2. Cook in spicy tomato sauce." },
    { id: 13, title: "Dal Tadka", category: "lunch", image: "dal-tadka.jpg", instructions: "1. Cook lentils. 2. Temper with spices. 3. Serve with rice." },
    { id: 14, title: "Chana Masala", category: "lunch", image: "chana-masala.jpg", instructions: "1. Cook chickpeas in gravy. 2. Add spices. 3. Serve with roti." },
    { id: 15, title: "Rajma", category: "lunch", image: "rajma.jpg", instructions: "1. Cook kidney beans in gravy. 2. Add spices. 3. Serve with rice." },
    { id: 16, title: "Palak Paneer", category: "lunch", image: "palak-paneer.png", instructions: "1. Cook spinach puree. 2. Add paneer cubes. 3. Serve with naan." },
    { id: 17, title: "Kadai Vegetable", category: "lunch", image: "kadai-vegetable.jpg", instructions: "1. Stir-fry veggies. 2. Add spices. 3. Serve with roti." },
    { id: 18, title: "Aloo Gobi", category: "lunch", image: "aloo-gobi.png", instructions: "1. Cook potatoes and cauliflower. 2. Add spices. 3. Serve with paratha." },
    { id: 19, title: "Baingan Bharta", category: "lunch", image: "baingan-bharta.png", instructions: "1. Roast eggplant. 2. Mash and cook with spices." },
    { id: 20, title: "Matar Paneer", category: "lunch", image: "matar-paneer.jpg", instructions: "1. Cook peas and paneer in gravy. 2. Add spices." },
  
    // Dinner Recipes
    { id: 21, title: "Hyderabadi Biryani", category: "dinner", image: "Hyderabadi-briyani.jpg", instructions: "1. Layer rice and marinated meat. 2. Cook on dum. 3. Serve with raita." },
    { id: 22, title: "Chicken Tikka", category: "dinner", image: "chicken-tikka.jpg", instructions: "1. Marinate chicken. 2. Grill in tandoor. 3. Serve with mint chutney." },
    { id: 23, title: "Malai Kofta", category: "dinner", image: "malai-kofta.jpg", instructions: "1. Make veggie balls. 2. Cook in creamy gravy." },
    { id: 24, title: "Tandoori Roti", category: "dinner", image: "tandoori-roti.jpg", instructions: "1. Make dough. 2. Cook in tandoor. 3. Serve with curry." },
    { id: 25, title: "Fish Curry", category: "dinner", image: "fish-curry.jpg", instructions: "1. Cook fish in coconut gravy. 2. Add spices." },
    { id: 26, title: "Keema Mattar", category: "dinner", image: "keema-mattar.jpg", instructions: "1. Cook minced meat with peas. 2. Add spices." },
    { id: 27, title: "Dum Aloo", category: "dinner", image: "dum-aloo.jpg", instructions: "1. Cook baby potatoes in gravy. 2. Add spices." },
    { id: 28, title: "Kashmiri Pulao", category: "dinner", image: "kashmiri-pulao.jpg", instructions: "1. Cook rice with dry fruits. 2. Add saffron." },
    { id: 29, title: "Shahi Paneer", category: "dinner", image: "shahi-paneer.jpg", instructions: "1. Cook paneer in rich gravy. 2. Add cream." },
    { id: 30, title: "Navratan Korma", category: "dinner", image: "navratan-korma.jpg", instructions: "1. Cook mixed veggies in creamy gravy." },
  
    // Dessert Recipes
    { id: 31, title: "Gulab Jamun", category: "dessert", image: "gulabjamun.jpg", instructions: "1. Fry dough balls. 2. Soak in sugar syrup." },
    { id: 32, title: "Rasmalai", category: "dessert", image: "rasmalai.png", instructions: "1. Cook paneer discs. 2. Soak in sweet milk." },
    { id: 33, title: "Jalebi", category: "dessert", image: "jalebi.jpg", instructions: "1. Fry batter in spirals. 2. Soak in syrup." },
    { id: 34, title: "Kheer", category: "dessert", image: "kheer.png", instructions: "1. Cook rice in milk. 2. Add sugar and nuts." },
    { id: 35, title: "Barfi", category: "dessert", image: "barfi.jpg", instructions: "1. Cook milk powder and sugar. 2. Set in a tray." },
    { id: 36, title: "Ladoo", category: "dessert", image: "ladoo.jpg", instructions: "1. Make dough. 2. Shape into balls. 3. Garnish with nuts." },
    { id: 37, title: "Halwa", category: "dessert", image: "halwa.jpg", instructions: "1. Cook semolina with ghee. 2. Add sugar and nuts." },
    { id: 38, title: "Phirni", category: "dessert", image: "phirni.png", instructions: "1. Cook rice paste in milk. 2. Add cardamom." },
    { id: 39, title: "Shrikhand", category: "dessert", image: "shirkhand.png", instructions: "1. Strain yogurt. 2. Add sugar and saffron." },
    { id: 40, title: "Payasam", category: "dessert", image: "payasam.png", instructions: "1. Cook rice in coconut milk. 2. Add jaggery." },
  
    // Beverage Recipes
    { id: 41, title: "Masala Chai", category: "beverage", image: "masalachai.jpg", instructions: "1. Boil tea with spices. 2. Add milk and sugar." },
    { id: 42, title: "Lassi", category: "beverage", image: "lassi.jpg", instructions: "1. Blend yogurt with sugar. 2. Add rose syrup." },
    { id: 43, title: "Nimbu Pani", category: "beverage", image: "lemonade.jpg", instructions: "1. Mix lemon juice and sugar. 2. Add water and ice." },
    { id: 44, title: "Badam Milk", category: "beverage", image: "badamilk.png", instructions: "1. Blend almonds with milk. 2. Add sugar and cardamom." },
    { id: 45, title: "Thandai", category: "beverage", image: "thandai.png", instructions: "1. Blend nuts and spices. 2. Add milk and sugar." },
    { id: 46, title: "Kokum Sherbet", category: "beverage", image: "kokum-sherbet.png", instructions: "1. Soak kokum in water. 2. Add sugar and salt." },
    { id: 47, title: "Sugarcane Juice", category: "beverage", image: "sugarcanejuice.png", instructions: "1. Extract juice from sugarcane. 2. Add lemon." },
    { id: 48, title: "Mango Lassi", category: "beverage", image: "mango-smoothie.jpg", instructions: "1. Blend mango pulp with yogurt. 2. Add sugar." },
    { id: 49, title: "Coconut Water", category: "beverage", image: "coconutwater.jpg", instructions: "1. Serve fresh coconut water." },
    { id: 50, title: "Jeera Water", category: "beverage", image: "jeerawater.png", instructions: "1. Boil cumin seeds. 2. Add water and cool." }
  ];
  
  window.indian = indian;