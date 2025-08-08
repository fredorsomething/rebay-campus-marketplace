'use client'

import { Card } from '@/components/ui/Card'
import { Category } from '@/types'
import Link from 'next/link'

interface CategoryCardProps {
  category: Category
  itemCount?: number
}

export function CategoryCard({ category, itemCount = 0 }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="text-center space-y-4">
          {/* Icon */}
          <div 
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl"
            style={{ backgroundColor: `${category.color}20`, color: category.color }}
          >
            {category.icon}
          </div>
          
          {/* Name */}
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {category.name}
          </h3>
          
          {/* Item count */}
          <p className="text-sm text-gray-600">
            {itemCount} items
          </p>
        </div>
      </Card>
    </Link>
  )
}
