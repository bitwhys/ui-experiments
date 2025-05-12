'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, InformationCircleIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

// Mock data for UI experiments
const experiments = [
  {
    id: 1,
    title: 'Glassmorphism Login',
    description: 'Modern login form with glass effect',
    thumbnail: 'https://via.placeholder.com/400x300',
    category: 'Forms',
    date: '2024-03-20',
    author: 'Jane Doe',
  },
  {
    id: 2,
    title: 'Animated Cards',
    description: 'Smooth card transitions and hover effects',
    thumbnail: 'https://via.placeholder.com/400x300',
    category: 'Animation',
    date: '2024-03-19',
    author: 'John Smith',
  },
  {
    id: 3,
    title: 'Dark Mode Toggle',
    description: 'Elegant theme switching implementation',
    thumbnail: 'https://via.placeholder.com/400x300',
    category: 'Components',
    date: '2024-03-18',
    author: 'Alex Johnson',
  },
]

export default function Gallery() {
  const [isGridView, setIsGridView] = useState(true)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-medium">UI Experiments</h1>
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="hover:bg-tertiary rounded-lg p-1.5 transition-colors"
          aria-label="Toggle view"
        >
          {isGridView ? (
            <Bars3Icon className="text-cnt-tertiary size-6" />
          ) : (
            <Squares2X2Icon className="text-cnt-tertiary size-6" />
          )}
        </button>
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className={`grid gap-6 ${
          isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {experiments.map((experiment) => (
          <motion.div
            layout
            key={experiment.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <Link href={`/experiment/${experiment.id}`}>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={experiment.thumbnail}
                  alt={experiment.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-2 text-xl font-medium">{experiment.title}</h2>
                <p className="line-clamp-2 text-gray-500">{experiment.description}</p>
              </div>

              {/* Metadata Overlay */}
              <div className="bg-opacity-70 absolute inset-0 flex items-center justify-center bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-6 text-center text-white">
                  <p className="mb-2 text-sm">{experiment.category}</p>
                  <p className="mb-2 text-sm">{experiment.date}</p>
                  <p className="text-sm">By {experiment.author}</p>
                </div>
              </div>

              {/* Info Button */}
              <button
                className="bg-opacity-80 hover:bg-opacity-100 absolute top-4 right-4 rounded-full bg-white p-2 transition-opacity"
                aria-label="Show information"
              >
                <InformationCircleIcon className="h-5 w-5 text-gray-600" />
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
