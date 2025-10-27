const menuItems = [
  {
    category: "Coffee",
    name: "Espresso",
    desc: "Strong concentrated shot of coffee",
    price: "115",
  },
  {
    category: "Coffee",
    name: "Doppio",
    desc: "Double shot of espresso",
    price: "145",
  },
  {
    category: "Coffee",
    name: "Americano (S/D)",
    desc: "Espresso diluted with hot water",
    price: "150/185",
  },
  {
    category: "Coffee",
    name: "Cappuccino",
    desc: "Espresso with equal parts steamed milk and foam",
    price: "180",
  },
  {
    category: "Coffee",
    name: "Cafe Latte (S/D)",
    desc: "Espresso with steamed milk and a thin layer of foam",
    price: "190/215",
  },
  {
    category: "Coffee",
    name: "Cafe Mocha",
    desc: "Espresso mixed with chocolate and steamed milk",
    price: "280",
  },
  {
    category: "Coffee",
    name: "Espresso Macchiato (S/D)",
    desc: "Espresso topped with a small amount of milk foam",
    price: "125/155",
  },
  {
    category: "Coffee",
    name: "Latte Macchiato (S/D)",
    desc: "Steamed milk topped with a shot of espresso",
    price: "200/220",
  },
  {
    category: "Coffee",
    name: "Caramel Macchiato",
    desc: "Espresso mixed with caramel and steamed milk",
    price: "280",
  },
  {
    category: "Coffee",
    name: "Affogato",
    desc: "A scoop of vanilla ice cream topped with espresso",
    price: "250",
  },
  {
    category: "Coffee",
    name: "Mocha Madness",
    desc: "Blend of espresso, chocolate, caramel, and steamed milk",
    price: "350",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Americano",
    desc: "",
    price: "200",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Cappuccino",
    desc: "",
    price: "220",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Latte",
    desc: "",
    price: "230",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Mocha",
    desc: "",
    price: "300",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Mocha Madness",
    desc: "",
    price: "380",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Caramel Macchiato",
    desc: "",
    price: "300",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Frappé",
    desc: "",
    price: "335",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Virgin Mojito",
    desc: "",
    price: "250",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Lemonade/Mint Lemonade",
    desc: "",
    price: "140/170",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Milk Shake (Vanilla, Chocolate, Strawberry)",
    desc: "",
    price: "200",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Seasonal Smoothie",
    desc: "",
    price: "220",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Lassi (Plain/Sweet)",
    desc: "",
    price: "200",
  },
  {
    category: "Iced/Blended Beverage",
    name: "Iced Tea (Peach/Lemon)",
    desc: "",
    price: "160",
  },
  {
    category: "Tea",
    name: "Milk Tea (Masala)",
    desc: "",
    price: "100",
  },
  {
    category: "Tea",
    name: "Black Tea (Masala)",
    desc: "",
    price: "50",
  },
  {
    category: "Tea",
    name: "Green Tea/Tulsi Tea",
    desc: "",
    price: "100",
  },
  {
    category: "Tea",
    name: "Lemon Tea/Hot Lemon (Ginger, Honey)",
    desc: "",
    price: "70",
  },
  {
    category: "Tea",
    name: "Hot Chocolate",
    desc: "",
    price: "175",
  },

  // Breakfast
  {
    category: "Breakfast",
    name: "Breakfast Set",
    desc: "toast, plain omelette, aalu jeera, butter, jam, seasonal fruits, chicken sausage, tea or coffee",
    price: "450",
  },
  {
    category: "Breakfast",
    name: "Boiled Egg",
    price: "50",
  },
  {
    category: "Breakfast",
    name: "Masala Omelette",
    price: "100",
  },
  {
    category: "Breakfast",
    name: "Plain Omelette",
    price: "70",
  },
  {
    category: "Breakfast",
    name: "Toast",
    price: "30",
  },

  // Soups and Salads
  {
    category: "Soups and Salads",
    name: "Green Salad",
    price: "200",
  },
  {
    category: "Soups and Salads",
    name: "Fruit Salad",
    price: "400",
  },
  {
    category: "Soups and Salads",
    name: "Mushroom Soup",
    price: "200",
  },
  {
    category: "Soups and Salads",
    name: "Veg Soup",
    price: "180",
  },
  {
    category: "Soups and Salads",
    name: "Chicken Soup",
    price: "270",
  },

  // Noodles
  {
    category: "Noodles",
    name: "Veg Chowmein",
    price: "180",
  },
  {
    category: "Noodles",
    name: "Egg Chowmein",
    price: "200",
  },
  {
    category: "Noodles",
    name: "Chicken Chowmein",
    price: "220",
  },
  {
    category: "Noodles",
    name: "Mixed Chowmein",
    price: "230",
  },
  {
    category: "Noodles",
    name: "Veg Keema Noodles",
    price: "250",
  },
  {
    category: "Noodles",
    name: "Chicken Keema Noodles",
    price: "300",
  },

  // Burgers and Sandwiches
  {
    category: "Burgers and Sandwiches",
    name: "Egg Burger",
    desc: "toasted bun, tomato, onion, cucumber, lettuce, egg, mayo, sliced cheese",
    price: "230",
  },
  {
    category: "Burgers and Sandwiches",
    name: "Veg Burger",
    desc: "toasted bun, tomato, onion, cucumber, lettuce, veg patty, mayo, sliced cheese",
    price: "250",
  },
  {
    category: "Burgers and Sandwiches",
    name: "Chicken Burger",
    desc: "toasted bun, tomato, onion, cucumber, lettuce, chicken patty, mayo, sliced cheese",
    price: "280",
  },
  {
    category: "Burgers and Sandwiches",
    name: "Crunchy Chicken Burger",
    desc: "toasted bun, tomato, onion, cucumber, lettuce, crispy chicken, mayo, sliced cheese",
    price: "300",
  },
  {
    category: "Burgers and Sandwiches",
    name: "Egg Sandwich",
    desc: "toasted bun, lettuce, cucumber, onion, tomato, mayo, egg, sliced cheese",
    price: "230",
  },
  {
    category: "Burgers and Sandwiches",
    name: "Veg Sandwich",
    desc: "toasted bun, lettuce, cucumber, onion, tomato, mayo, sliced cheese",
    price: "200",
  },
  {
    category: "Burgers and Sandwiches",
    name: "Chicken Sandwich",
    desc: "toasted bun, lettuce, cucumber, onion, tomato, mayo, sliced cheese",
    price: "250",
  },

  // Momo
  {
    category: "Momo",
    name: "Veg Momo",
    price: "220",
  },
  {
    category: "Momo",
    name: "Chicken Momo",
    price: "220",
  },

  // Veg Snacks
  {
    category: "Veg Snacks",
    name: "Wai Wai Sadeko (Veg)",
    price: "120",
  },
  {
    category: "Veg Snacks",
    name: "Aalu Sadeko",
    price: "150",
  },
  {
    category: "Veg Snacks",
    name: "Peanuts Sadeko",
    price: "180",
  },
  {
    category: "Veg Snacks",
    name: "French Fries",
    price: "200",
  },
  {
    category: "Veg Snacks",
    name: "Chips Chilly",
    price: "220",
  },
  {
    category: "Veg Snacks",
    name: "Veg Pakoda",
    price: "200",
  },
  {
    category: "Veg Snacks",
    name: "Paneer Pakoda",
    price: "230",
  },
  {
    category: "Veg Snacks",
    name: "Paneer Chilly",
    price: "250",
  },

  // Non-Veg Snacks
  {
    category: "Non-Veg Snacks",
    name: "Wai Wai Sadeko (Non-Veg)",
    price: "150",
  },
  {
    category: "Non-Veg Snacks",
    name: "Chicken Roast",
    price: "250",
  },
  {
    category: "Non-Veg Snacks",
    name: "Crispy Chicken",
    price: "280",
  },
  {
    category: "Non-Veg Snacks",
    name: "Chicken Chilly",
    price: "250",
  },
  {
    category: "Non-Veg Snacks",
    name: "Chicken Sadeko",
    price: "250",
  },
  {
    category: "Non-Veg Snacks",
    name: "Chicken Sausage Fry (Per Piece)",
    price: "70",
  },
  {
    category: "Non-Veg Snacks",
    name: "Chicken Sausage Chilly",
    price: "250",
  },
];

const menuList = document.getElementById("menu-list");
const categories = [...new Set(menuItems.map((item) => item.category))];

categories.forEach((cat) => {
  const catDiv = document.createElement("div");
  catDiv.className = "category-block";

  const title = document.createElement("h2");
  title.textContent = cat;
  catDiv.appendChild(title);

  const itemsDiv = document.createElement("div");
  itemsDiv.className = "menu-items";

  menuItems
    .filter((i) => i.category === cat)
    .forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      const left = document.createElement("div");
      left.className = "menu-left";
      const name = document.createElement("div");
      name.className = "item-name";
      name.textContent = item.name;
      left.appendChild(name);
      if (item.desc && item.desc.trim()) {
        const desc = document.createElement("div");
        desc.className = "item-desc";
        desc.textContent = item.desc;
        left.appendChild(desc);
      }

      const right = document.createElement("div");
      right.className = "menu-right";
      const price = document.createElement("div");
      price.className = "item-price";
      price.textContent = `${item.price}`;
      right.appendChild(price);

      itemDiv.appendChild(left);
      itemDiv.appendChild(right);

      itemsDiv.appendChild(itemDiv);
    });

  catDiv.appendChild(itemsDiv);
  menuList.appendChild(catDiv);

  // Mobile toggle behavior
  title.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      catDiv.classList.toggle("active");
    }
  });
});
