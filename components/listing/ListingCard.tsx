'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { Listing } from '@/types'
import { Heart, Eye, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ListingCardProps {
  listing: Listing
}

export function ListingCard({ listing }: ListingCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const savingsPercentage = listing.originalPrice 
    ? Math.round(((listing.originalPrice - listing.price) / listing.originalPrice) * 100)
    : 0

  return (
    <Card className="group hover:scale-105 transition-transform duration-300">
      <div className="relative">
        {/* Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
          {!imageError && listing.images[0] ? (
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
          
          {/* Like button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart 
              className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
            />
          </button>

          {/* Savings badge */}
          {listing.originalPrice && savingsPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Save {savingsPercentage}%
            </div>
          )}

          {/* Condition badge */}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-full text-xs">
            {listing.condition}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <Link href={`/listing/${listing.id}`}>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
              {listing.title}
            </h3>
          </Link>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>{listing.location}</span>
            <span>•</span>
            <span>{listing.category}</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(listing.price)}
            </span>
            {listing.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(listing.originalPrice)}
              </span>
            )}
          </div>

          {/* Seller info */}
          <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 text-xs font-medium">
                {listing.seller.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm text-gray-600">{listing.seller.name}</span>
            <div className="flex items-center space-x-1 ml-auto">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-600">4.8</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-2">
            <Link href={`/listing/${listing.id}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
            <Button variant="primary" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
