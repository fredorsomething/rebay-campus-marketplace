'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Search, ShoppingCart, User, Plus, Bell } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ReBay</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link href="/create">
              <Button variant="primary" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Sell Item
              </Button>
            </Link>
            
            <Link href="/notifications">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link href="/cart">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>
            
            <Link href="/profile">
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
