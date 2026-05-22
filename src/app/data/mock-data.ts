export interface Product {
  id: string;
  name: string;
  store: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  size: 'Small' | 'Medium' | 'Large';
  style: string;
  stock: 'In Stock' | 'Limited' | 'Out of Stock';
  rating: number;
  reviews: number;
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
  description: string;
  suitableFor: string[];
  images: string[];
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Fabric Sofa',
    store: 'Mamburao Home Furniture',
    price: 18500,
    image: 'sofa-modern',
    category: 'Sofa',
    colors: ['Brown', 'Gray', 'Beige'],
    size: 'Large',
    style: 'Modern',
    stock: 'In Stock',
    rating: 4.5,
    reviews: 23,
    dimensions: { width: 200, depth: 90, height: 85 },
    description: 'Comfortable 3-seater sofa with premium fabric upholstery. Perfect for modern Filipino homes with spacious living rooms.',
    suitableFor: ['Living Room', 'Studio'],
    images: ['sofa-modern', 'sofa-modern', 'sofa-modern', 'sofa-modern'],
  },
  {
    id: '2',
    name: 'Rustic Wooden Dining Table',
    store: 'Mindoro Wood Craft',
    price: 25000,
    image: 'dining-rustic',
    category: 'Dining Table',
    colors: ['Natural', 'Brown'],
    size: 'Large',
    style: 'Rustic',
    stock: 'In Stock',
    rating: 4.8,
    reviews: 34,
    dimensions: { width: 180, depth: 90, height: 75 },
    description: 'Handcrafted dining table made from local hardwood. Seats 6-8 people comfortably.',
    suitableFor: ['Dining Room', 'Kitchen'],
    images: ['dining-rustic', 'dining-rustic', 'dining-rustic', 'dining-rustic'],
  },
  {
    id: '3',
    name: 'Minimalist Bed Frame',
    store: 'Sleep Haven Mamburao',
    price: 12800,
    image: 'bed-minimal',
    category: 'Bed',
    colors: ['White', 'Natural'],
    size: 'Medium',
    style: 'Minimalist',
    stock: 'Limited',
    rating: 4.2,
    reviews: 18,
    dimensions: { width: 160, depth: 200, height: 40 },
    description: 'Clean-lined queen size bed frame with low profile design. Made from sustainable wood.',
    suitableFor: ['Bedroom'],
    images: ['bed-minimal', 'bed-minimal', 'bed-minimal', 'bed-minimal'],
  },
  {
    id: '4',
    name: 'Classic Wooden Cabinet',
    store: 'Mamburao Home Furniture',
    price: 15600,
    image: 'cabinet-classic',
    category: 'Cabinet',
    colors: ['Brown', 'Natural'],
    size: 'Medium',
    style: 'Classic',
    stock: 'In Stock',
    rating: 4.4,
    reviews: 21,
    dimensions: { width: 120, depth: 50, height: 180 },
    description: 'Traditional Filipino-style cabinet with intricate detailing. Perfect for storage and display.',
    suitableFor: ['Living Room', 'Bedroom', 'Dining Room'],
    images: ['cabinet-classic', 'cabinet-classic', 'cabinet-classic', 'cabinet-classic'],
  },
  {
    id: '5',
    name: 'Modern Office Chair',
    store: 'Workspace Solutions',
    price: 4500,
    image: 'chair-office',
    category: 'Chair',
    colors: ['Black', 'Gray'],
    size: 'Small',
    style: 'Modern',
    stock: 'In Stock',
    rating: 4.3,
    reviews: 45,
    dimensions: { width: 60, depth: 60, height: 110 },
    description: 'Ergonomic office chair with adjustable height and lumbar support.',
    suitableFor: ['Office', 'Study Room'],
    images: ['chair-office', 'chair-office', 'chair-office', 'chair-office'],
  },
  {
    id: '6',
    name: 'Wall-Mounted Shelf',
    store: 'Mindoro Wood Craft',
    price: 3200,
    image: 'shelf-wall',
    category: 'Shelf',
    colors: ['Natural', 'White', 'Brown'],
    size: 'Small',
    style: 'Minimalist',
    stock: 'In Stock',
    rating: 4.6,
    reviews: 29,
    dimensions: { width: 100, depth: 25, height: 15 },
    description: 'Floating shelf made from solid wood. Perfect for displaying books and decorations.',
    suitableFor: ['Living Room', 'Bedroom', 'Office'],
    images: ['shelf-wall', 'shelf-wall', 'shelf-wall', 'shelf-wall'],
  },
  {
    id: '7',
    name: 'Bamboo Lounge Chair',
    store: 'Eco Living Mamburao',
    price: 5800,
    image: 'chair-bamboo',
    category: 'Chair',
    colors: ['Natural', 'Brown'],
    size: 'Medium',
    style: 'Rustic',
    stock: 'In Stock',
    rating: 4.7,
    reviews: 16,
    dimensions: { width: 75, depth: 85, height: 95 },
    description: 'Sustainable bamboo lounge chair with comfortable cushioning. Locally crafted in Mamburao.',
    suitableFor: ['Living Room', 'Patio', 'Studio'],
    images: ['chair-bamboo', 'chair-bamboo', 'chair-bamboo', 'chair-bamboo'],
  },
  {
    id: '8',
    name: 'Glass Top Coffee Table',
    store: 'Workspace Solutions',
    price: 8900,
    image: 'table-coffee',
    category: 'Dining Table',
    colors: ['Black', 'Natural'],
    size: 'Medium',
    style: 'Modern',
    stock: 'In Stock',
    rating: 4.1,
    reviews: 12,
    dimensions: { width: 120, depth: 60, height: 45 },
    description: 'Contemporary coffee table with tempered glass top and wooden base.',
    suitableFor: ['Living Room', 'Studio'],
    images: ['table-coffee', 'table-coffee', 'table-coffee', 'table-coffee'],
  },
  {
    id: '9',
    name: 'Traditional Narra Sofa',
    store: 'Heritage Furniture',
    price: 32000,
    image: 'sofa-narra',
    category: 'Sofa',
    colors: ['Brown'],
    size: 'Large',
    style: 'Classic',
    stock: 'Limited',
    rating: 4.9,
    reviews: 8,
    dimensions: { width: 210, depth: 95, height: 90 },
    description: 'Premium sofa crafted from authentic narra wood. A timeless piece of Filipino furniture heritage.',
    suitableFor: ['Living Room'],
    images: ['sofa-narra', 'sofa-narra', 'sofa-narra', 'sofa-narra'],
  },
];

export const mockStores = [
  'Mamburao Home Furniture',
  'Mindoro Wood Craft',
  'Sleep Haven Mamburao',
  'Workspace Solutions',
  'Eco Living Mamburao',
  'Heritage Furniture',
];

export interface Inquiry {
  id: string;
  productName: string;
  productImage: string;
  store: string;
  status: 'Pending' | 'Responded' | 'Closed';
  date: string;
  message: string;
}

export const mockInquiries: Inquiry[] = [
  {
    id: '1',
    productName: 'Modern Fabric Sofa',
    productImage: 'sofa-modern',
    store: 'Mamburao Home Furniture',
    status: 'Responded',
    date: '2026-05-18',
    message: 'Is this available in dark gray?',
  },
  {
    id: '2',
    productName: 'Rustic Wooden Dining Table',
    productImage: 'dining-rustic',
    store: 'Mindoro Wood Craft',
    status: 'Pending',
    date: '2026-05-20',
    message: 'Can I visit your showroom?',
  },
];
