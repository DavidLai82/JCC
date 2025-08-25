import React, { useState } from 'react'
import { Camera, Play, Calendar, Eye } from 'lucide-react'

interface GalleryItem {
  id: string
  type: 'image' | 'video'
  url: string
  thumbnail: string
  caption: string
  category: string
  date: string
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      type: 'image',
      url: '/images/gallery/service1.jpg',
      thumbnail: '/images/gallery/service1-thumb.jpg',
      caption: 'Sunday Morning Worship Service',
      category: 'service',
      date: '2024-08-18'
    },
    {
      id: '2',
      type: 'image',
      url: '/images/gallery/youth-camp1.jpg',
      thumbnail: '/images/gallery/youth-camp1-thumb.jpg',
      caption: 'Youth Camp 2024 - Group Activities',
      category: 'youth',
      date: '2024-08-15'
    },
    {
      id: '3',
      type: 'video',
      url: '/videos/conference-highlight.mp4',
      thumbnail: '/images/gallery/conference-thumb.jpg',
      caption: 'Annual Conference Highlights',
      category: 'conference',
      date: '2024-08-10'
    },
    {
      id: '4',
      type: 'image',
      url: '/images/gallery/outreach1.jpg',
      thumbnail: '/images/gallery/outreach1-thumb.jpg',
      caption: 'Community Outreach Program',
      category: 'outreach',
      date: '2024-08-05'
    },
    {
      id: '5',
      type: 'image',
      url: '/images/gallery/baptism1.jpg',
      thumbnail: '/images/gallery/baptism1-thumb.jpg',
      caption: 'Baptism Service at the Beach',
      category: 'service',
      date: '2024-07-28'
    },
    {
      id: '6',
      type: 'image',
      url: '/images/gallery/children-ministry1.jpg',
      thumbnail: '/images/gallery/children-ministry1-thumb.jpg',
      caption: 'Children\'s Ministry Fun Day',
      category: 'ministry',
      date: '2024-07-20'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Photos & Videos' },
    { id: 'service', name: 'Church Services' },
    { id: 'ministry', name: 'Ministry Events' },
    { id: 'youth', name: 'Youth Activities' },
    { id: 'outreach', name: 'Community Outreach' },
    { id: 'conference', name: 'Conferences' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Photo Gallery</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Capturing moments of worship, fellowship, and community impact at JCC Mombasa
          </p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom section-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center relative cursor-pointer"
                    >
                      {item.type === 'image' ? (
                        <Camera className="h-16 w-16 text-primary-600 opacity-50" />
                      ) : (
                        <>
                          <Play className="h-16 w-16 text-primary-600 opacity-50" />
                          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                            VIDEO
                          </div>
                        </>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <Eye className="h-8 w-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">View {item.type === 'image' ? 'Photo' : 'Video'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                      {item.caption}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Items Found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later for new photos and videos!</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredItems.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-outline">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Photo Submission CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Share Your Photos</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have photos from our church events or activities? We'd love to feature them in our gallery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Submit Photos
            </a>
            <a href="/events" className="btn-outline">
              Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery