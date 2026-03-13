export const formatCurrency = (amount: number, currency = "NGN") =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
  }).format(amount);

export const dummyCollection = [
    { tag: "New Season", image: "/app/assets/images/jersey.webp", clothingType: "jersey", title: "Blazers Home Kit 2025 — Orange Edition", price: 30000 },
    { image: "/app/assets/images/jersey.webp", clothingType: "apparel", title: "Blazers Demons Slayer T-Shirt", price: 18000 },
    { tag: "Bestseller", image: "/app/assets/images/baseball-hat.webp", clothingType: "headwear", title: "Blazers Snapback Cap", price: 20000 }
]