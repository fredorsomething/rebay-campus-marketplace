export interface User {
  id: string
  name: string
  email: string
  dorm: string
  grade: string
  avatar?: string
  bio?: string
  createdAt: Date
}

export interface Listing {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor'
  sellerId: string
  seller: User
  status: 'active' | 'sold' | 'expired'
  createdAt: Date
  updatedAt: Date
  tags: string[]
  location: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export interface SearchFilters {
  category?: string
  priceMin?: number
  priceMax?: number
  condition?: string[]
  location?: string
  sortBy?: 'price-low' | 'price-high' | 'date-new' | 'date-old'
}
