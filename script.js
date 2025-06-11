const ø = (selector) => document.querySelector(selector);
const æ = (selector) => console.log(selector);
// æ(ø(".flexCenterRow"))
// console.log(document.querySelector(".flexCenterRow"))

// 
const superstitiousStoreItems = [
    {
      gtin: "0123456789123",
      name: "Lucky Rabbit's Foot",
      category: "Charms",
      price: 9.99,
      description: "A classic good luck charm believed to bring fortune and protection.",
      stock: 25
    },
    {
      gtin: "0987654321098",
      name: "Black Tourmaline Crystal",
      category: "Crystals",
      price: 15.50,
      description: "Protective stone that absorbs negative energy.",
      stock: 40
    },
    {
      gtin: "1234509876543",
      name: "Tarot Deck - Rider Waite",
      category: "Tarot & Cards",
      price: 24.99,
      description: "Popular tarot deck for divination and insight.",
      stock: 12
    },
    {
      gtin: "5678901234567",
      name: "White Sage Smudge Stick",
      category: "Incense & Smudging",
      price: 7.00,
      description: "Used to cleanse spaces of negative energy.",
      stock: 50
    },
    {
      gtin: "3456789012345",
      name: "Horseshoe Wall Hanging",
      category: "Home Decor",
      price: 12.75,
      description: "Traditional symbol of good luck, to hang above doors.",
      stock: 30
    },
    {
      gtin: "7890123456789",
      name: "Four-Leaf Clover Pendant",
      category: "Jewelry",
      price: 19.99,
      description: "Wearable charm representing luck and prosperity.",
      stock: 18
    },
    {
      gtin: "2345678901234",
      name: "Amethyst Cluster",
      category: "Crystals",
      price: 22.50,
      description: "A calming crystal that promotes spiritual growth.",
      stock: 22
    },
    {
      gtin: "8901234567890",
      name: "Fortune Telling Dice",
      category: "Games & Tools",
      price: 14.99,
      description: "Dice used for divination and fortune-telling games.",
      stock: 15
    },
    {
      gtin: "4567890123456",
      name: "Evil Eye Bracelet",
      category: "Jewelry",
      price: 16.50,
      description: "Protects against negative energy and bad luck.",
      stock: 28
    },
    {
      gtin: "9012345678901",
      name: "Lucky Bamboo Plant",
      category: "Plants",
      price: 10.00,
      description: "Believed to bring luck and positive energy to your home.",
      stock: 35
    }
  ];

  let itemCart = []
  const itemSelect = ø("#itemSelect")
  æ("#itemSelect")

  const item = document.createElement("option")
  // console.log(todoItem)
  item.textContent = 
  itemSelect.push(itemCart)
  console.log(item)