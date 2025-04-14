
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise Cancelling Headphones",
    description: "Premium wireless headphones with active noise cancelling technology.",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format",
    category: "Audio",
    badge: "Sale",
    rating: 4.8
  },
  {
    id: "2",
    name: "Smartphone Pro Max",
    description: "The latest smartphone with cutting-edge features and camera technology.",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1227&auto=format",
    category: "Electronics",
    badge: "New",
    rating: 4.9
  },
  {
    id: "3",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging for all your compatible devices.",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format",
    category: "Accessories",
    badge: "Sale",
    rating: 4.5
  },
  {
    id: "4",
    name: "Smart Watch Series 5",
    description: "Track your fitness, monitor your health, and stay connected.",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format",
    category: "Wearables",
    rating: 4.7
  },
  {
    id: "5",
    name: "Ultra HD Smart TV 55\"",
    description: "Crystal clear picture quality and smart features for the ultimate entertainment.",
    price: 699.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1170&auto=format",
    category: "Electronics",
    badge: "Sale",
    rating: 4.6
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    description: "Premium sound that goes anywhere with you.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1164&auto=format",
    category: "Audio",
    rating: 4.4
  },
  {
    id: "7",
    name: "Gaming Laptop Pro",
    description: "Powerful gaming laptop for the ultimate gaming experience.",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1168&auto=format",
    category: "Computers",
    rating: 4.9
  },
  {
    id: "8",
    name: "Digital Camera DSLR",
    description: "Professional grade camera for stunning photography.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1164&auto=format",
    category: "Photography",
    rating: 4.7
  }
];

export const categories = [
  {
    id: "1",
    name: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format",
    count: 43
  },
  {
    id: "2",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1227&auto=format",
    count: 67
  },
  {
    id: "3",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format",
    count: 32
  },
  {
    id: "4",
    name: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format",
    count: 25
  }
];
