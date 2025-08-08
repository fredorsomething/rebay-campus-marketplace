import { Layout } from '@/components/layout/Layout'
import { ListingCard } from '@/components/listing/ListingCard'
import { CategoryCard } from '@/components/category/CategoryCard'
import { Button } from '@/components/ui/Button'
import { mockListings, mockCategories } from '@/data/mockData'
import { Search, TrendingUp, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredListings = mockListings.slice(0, 6)
  const popularCategories = mockCategories.slice(0, 8)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Campus Marketplace
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Buy and sell with your fellow boarding school students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/listings">
              <Button variant="secondary" size="lg">
                Browse Items
              </Button>
            </Link>
            <Link href="/create">
              <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-gray-50">
                Start Selling
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified student accounts and secure transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campus Community</h3>
              <p className="text-gray-600">Connect with students in your dorm and across campus</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Deals</h3>
              <p className="text-gray-600">Find amazing deals on textbooks, electronics, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
            <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <CategoryCard key={category.id} category={category} itemCount={Math.floor(Math.random() * 50) + 10} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Items</h2>
              <p className="text-lg text-gray-600">Handpicked items from your campus community</p>
            </div>
            <Link href="/listings">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of students already using ReBay
          </p>
          <Link href="/create">
            <Button variant="secondary" size="lg">
              Create Your First Listing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
