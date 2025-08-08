'use client'

import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { mockListings } from '@/data/mockData'
import { formatPrice, formatDate } from '@/lib/utils'
import { Heart, Share2, MessageCircle, MapPin, Calendar, Star, Shield, Truck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { notFound } from 'next/navigation'

interface ListingPageProps {
  params: {
    id: string
  }
}

export default function ListingPage({ params }: ListingPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const listing = mockListings.find(l => l.id === params.id)
  
  if (!listing) {
    notFound()
  }

  const savingsPercentage = listing.originalPrice 
    ? Math.round(((listing.originalPrice - listing.price) / listing.originalPrice) * 100)
    : 0

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
              {listing.images[selectedImage] ? (
                <Image
                  src={listing.images[selectedImage]}
                  alt={listing.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {listing.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {listing.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${listing.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Title and Actions */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{listing.title}</h1>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Share2 className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(listing.price)}
                </span>
                {listing.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(listing.originalPrice)}
                    </span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      Save {savingsPercentage}%
                    </span>
                  </>
                )}
              </div>

              {/* Condition and Location */}
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <span className="capitalize">{listing.condition}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Listed {formatDate(listing.createdAt)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button variant="primary" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Seller
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Make Offer
              </Button>
            </div>

            {/* Seller Info */}
            <Card>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-medium">
                    {listing.seller.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{listing.seller.name}</h3>
                  <p className="text-sm text-gray-600">{listing.seller.dorm} • {listing.seller.grade}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8 (24 reviews)</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>
            </Card>

            {/* Safety Features */}
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Safety & Trust</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Verified student account</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">Local pickup available</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">{listing.description}</p>
            </div>
          </Card>
        </div>

        {/* Tags */}
        {listing.tags.length > 0 && (
          <div className="mt-8">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {listing.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  )
}
