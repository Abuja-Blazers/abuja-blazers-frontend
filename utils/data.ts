import BaseballHat from "@/app/assets/images/baseball-hat.webp";
import Jersey from "@/app/assets/images/jersey.webp";

export const formatCurrency = (amount: number, currency = "NGN") =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
  }).format(amount);

export function formatCompact(value: number, currency = "₦") {
  const formatted = Intl.NumberFormat("en", { notation: "compact" }).format(value);
  return `${currency}${formatted}`;
}

export function formatInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export type PlayerStatus = "available" | "negotiating" | "unavailable" | "signed";

export function filterByStatus(players: typeof playerMarket, status: PlayerStatus | "all") {
  if (status === "all") return players;
  return players.filter((p) => p.status === status);
}

export const dummyCollection = [
  {
    tag: "New Season",
    image: Jersey,
    clothingType: "jersey",
    title: "Blazers Home Kit 2025 — Orange Edition",
    price: 30000,
  },
  { image: Jersey, clothingType: "apparel", title: "Blazers Demons Slayer T-Shirt", price: 18000 },
  { tag: "Bestseller", image: BaseballHat, clothingType: "headwear", title: "Blazers Snapback Cap", price: 20000 },
];

export const players = [
  { title: "wide receiver", name: "Ali J", position: "7" },
  { title: "quarterback", name: "G Sent", position: "3" },
  { title: "wide receiver", name: "tolu", position: "27" },
  { title: "corner", name: "valerie", position: "31" },
  { title: "wide receiver", name: "mizu", position: "4" },
  { title: "centre back", name: "olaolu", position: "39" },
];

export const playerMarket = [
  { id: "1", metadata: { name: "Valerie", position: "corner" }, appearances: 8, status: "available" },
  { id: "2", metadata: { name: "Hassan Abdullahi", position: "safety" }, appearances: 4, status: "negotiating" },
  { id: "3", metadata: { name: "Judy", position: "wide receiver" }, appearances: 8, status: "available" },
  { id: "4", metadata: { name: "Psycho", position: "centre" }, appearances: 11, status: "available" },
];
