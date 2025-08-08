'use client'

import { Layout } from '@/components/layout/Layout'
import { ListingCard } from '@/components/listing/ListingCard'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { mockListings, mockCategories } from '@/data/mockData'
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import { useState, useMemo } from 'react'
import { SearchFilters } from '@/types'

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<SearchFilters>({})
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filteredListings = useMemo(() => {
    return mockListings.filter(listing => {
      // Search query filter
      if (searchQuery && !listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !listing.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Category filter
      if (filters.category && listing.category !== filters.category) {
        return false
      }

      // Price range filter
      if (filters.priceMin && listing.price < filters.priceMin) {
        return false
      }
      if (filters.priceMax && listing.price > filters.priceMax) {
        return false
      }

      // Condition filter
      if (filters.condition && filters.condition.length > 0 && 
          !filters.condition.includes(listing.condition)) {
        return false
      }

      // Location filter
      if (filters.location && listing.location !== filters.location) {
        return false
      }

      return true
    })
  }, [searchQuery, filters])

  const sortedListings = useMemo(() => {
    const sorted = [...filteredListings]
    
    switch (filters.sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'date-new':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      case 'date-old':
        return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      default:
        return sorted
    }
  }, [filteredListings, filters.sortBy])

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Listings</h1>
          <p className="text-gray-600">Find great deals from your campus community</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search listings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <select
                value={filters.sortBy || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                className="input-3d text-sm"
              >
                <option value="">Sort by</option>
                <option value="date-new">Newest first</option>
                <option value="date-old">Oldest first</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={filters.category || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    className="input-3d text-sm"
                  >
                    <option value="">All Categories</option>
                    {mockCategories.map(category => (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                  <Input
                    type="number"
                    placeholder="Min"
                    value={filters.priceMin || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, priceMin: Number(e.target.value) || undefined }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={filters.priceMax || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, priceMax: Number(e.target.value) || undefined }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                  <select
                    value={filters.condition?.[0] || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, condition: e.target.value ? [e.target.value] : undefined }))}
                    className="input-3d text-sm"
                  >
                    <option value="">Any Condition</option>
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {sortedListings.length} of {mockListings.length} listings
          </p>
        </div>

        {/* Listings Grid */}
        {sortedListings.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-4"
          }>
            {sortedListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No listings found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </Card>
        )}
      </div>
    </Layout>
  )
}
