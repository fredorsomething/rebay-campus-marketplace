'use client'

import { Layout } from '@/components/layout/Layout'
import { ListingCard } from '@/components/listing/ListingCard'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { mockListings, mockUsers } from '@/data/mockData'
import { Edit, MapPin, Calendar, Mail, Phone, Star } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'listings' | 'sold' | 'favorites'>('listings')
  
  // Mock current user
  const currentUser = mockUsers[0]
  const userListings = mockListings.filter(listing => listing.sellerId === currentUser.id)
  const soldListings = userListings.filter(listing => listing.status === 'sold')
  const activeListings = userListings.filter(listing => listing.status === 'active')

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  currentUser.name.charAt(0)
                )}
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{currentUser.name}</h1>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentUser.dorm}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentUser.grade}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{currentUser.email}</span>
                  </div>
                </div>

                {currentUser.bio && (
                  <p className="text-gray-700 mt-4">{currentUser.bio}</p>
                )}

                {/* Stats */}
                <div className="flex items-center space-x-6 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{activeListings.length}</div>
                    <div className="text-sm text-gray-600">Active Listings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{soldListings.length}</div>
                    <div className="text-sm text-gray-600">Items Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold text-gray-900">4.8</span>
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('listings')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'listings'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Active Listings ({activeListings.length})
              </button>
              <button
                onClick={() => setActiveTab('sold')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'sold'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sold Items ({soldListings.length})
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'favorites'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Favorites (0)
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'listings' && (
            <div>
              {activeListings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Edit className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No active listings</h3>
                  <p className="text-gray-600 mb-4">Start selling your items to the campus community</p>
                  <Button variant="primary">Create Listing</Button>
                </Card>
              )}
            </div>
          )}

          {activeTab === 'sold' && (
            <div>
              {soldListings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {soldListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Star className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No sold items yet</h3>
                  <p className="text-gray-600">Your sold items will appear here</p>
                </Card>
              )}
            </div>
          )}

          {activeTab === 'favorites' && (
            <Card className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Star className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorites yet</h3>
              <p className="text-gray-600">Items you like will appear here</p>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  )
}
