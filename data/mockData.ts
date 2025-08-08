import { Category, Listing, User } from '@/types'

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    icon: '📱',
    color: '#3B82F6'
  },
  {
    id: '2',
    name: 'Books',
    icon: '📚',
    color: '#10B981'
  },
  {
    id: '3',
    name: 'Clothing',
    icon: '👕',
    color: '#F59E0B'
  },
  {
    id: '4',
    name: 'Sports',
    icon: '⚽',
    color: '#EF4444'
  },
  {
    id: '5',
    name: 'Furniture',
    icon: '🪑',
    color: '#8B5CF6'
  },
  {
    id: '6',
    name: 'Art & Crafts',
    icon: '🎨',
    color: '#EC4899'
  },
  {
    id: '7',
    name: 'Musical Instruments',
    icon: '🎸',
    color: '#06B6D4'
  },
  {
    id: '8',
    name: 'Other',
    icon: '📦',
    color: '#6B7280'
  }
]

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@school.edu',
    dorm: 'West Hall',
    grade: 'Senior',
    avatar: '/avatars/alex.jpg',
    bio: 'Selling my old stuff before graduation!',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah.chen@school.edu',
    dorm: 'East Hall',
    grade: 'Junior',
    avatar: '/avatars/sarah.jpg',
    bio: 'Love finding great deals on campus!',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    email: 'mike.rodriguez@school.edu',
    dorm: 'North Hall',
    grade: 'Sophomore',
    avatar: '/avatars/mike.jpg',
    bio: 'Always looking for electronics and books',
    createdAt: new Date('2024-01-20')
  }
]

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'MacBook Pro 2022 - Excellent Condition',
    description: 'Selling my MacBook Pro 2022 with M1 chip. 13-inch, 256GB SSD, 8GB RAM. Perfect for school work and coding. Comes with original charger and case.',
    price: 899,
    originalPrice: 1299,
    images: ['/listings/macbook-1.jpg', '/listings/macbook-2.jpg'],
    category: 'Electronics',
    condition: 'like-new',
    sellerId: '1',
    seller: mockUsers[0],
    status: 'active',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
    tags: ['laptop', 'apple', 'macbook', 'computer'],
    location: 'West Hall'
  },
  {
    id: '2',
    title: 'Calculus Textbook - AP Calculus BC',
    description: 'Stewart Calculus: Early Transcendentals, 8th Edition. Used for AP Calculus BC. Some highlighting but in good condition.',
    price: 25,
    originalPrice: 120,
    images: ['/listings/calculus-book.jpg'],
    category: 'Books',
    condition: 'good',
    sellerId: '2',
    seller: mockUsers[1],
    status: 'active',
    createdAt: new Date('2024-01-24'),
    updatedAt: new Date('2024-01-24'),
    tags: ['textbook', 'calculus', 'math', 'ap'],
    location: 'East Hall'
  },
  {
    id: '3',
    title: 'Nike Air Force 1 - Size 10',
    description: 'White Nike Air Force 1 sneakers. Size 10, worn a few times but still look new. Perfect for casual wear.',
    price: 65,
    originalPrice: 100,
    images: ['/listings/nike-shoes-1.jpg', '/listings/nike-shoes-2.jpg'],
    category: 'Clothing',
    condition: 'like-new',
    sellerId: '3',
    seller: mockUsers[2],
    status: 'active',
    createdAt: new Date('2024-01-23'),
    updatedAt: new Date('2024-01-23'),
    tags: ['shoes', 'nike', 'sneakers', 'white'],
    location: 'North Hall'
  },
  {
    id: '4',
    title: 'Basketball - Wilson Official Size',
    description: 'Wilson basketball, official size and weight. Used for school games but still in great condition.',
    price: 15,
    originalPrice: 35,
    images: ['/listings/basketball.jpg'],
    category: 'Sports',
    condition: 'good',
    sellerId: '1',
    seller: mockUsers[0],
    status: 'active',
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22'),
    tags: ['basketball', 'wilson', 'sports', 'ball'],
    location: 'West Hall'
  },
  {
    id: '5',
    title: 'Desk Lamp - LED with USB Port',
    description: 'Modern LED desk lamp with USB charging port. Perfect for studying. Adjustable brightness and color temperature.',
    price: 20,
    originalPrice: 45,
    images: ['/listings/desk-lamp.jpg'],
    category: 'Other',
    condition: 'good',
    sellerId: '2',
    seller: mockUsers[1],
    status: 'active',
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21'),
    tags: ['lamp', 'led', 'desk', 'usb'],
    location: 'East Hall'
  },
  {
    id: '6',
    title: 'Guitar - Acoustic Yamaha',
    description: 'Yamaha acoustic guitar, perfect for beginners. Comes with case and extra strings. Great sound quality.',
    price: 150,
    originalPrice: 250,
    images: ['/listings/guitar-1.jpg', '/listings/guitar-2.jpg'],
    category: 'Musical Instruments',
    condition: 'good',
    sellerId: '3',
    seller: mockUsers[2],
    status: 'active',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    tags: ['guitar', 'acoustic', 'yamaha', 'music'],
    location: 'North Hall'
  }
]
