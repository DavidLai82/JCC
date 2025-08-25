import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Heart, BookOpen, Clock, MapPin, Play, ArrowRight } from 'lucide-react'
import { events, services, testimonials, announcements, churchStats } from '../data/mockData'

const Home: React.FC = () => {
  const featuredEvents = events.filter(event => event.isFeatured).slice(0, 3)
  const recentTestimonials = testimonials.slice(0, 3)
  const currentAnnouncements = announcements.filter(announcement => announcement.isActive).slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Welcome to{' '}
                <span className="block text-gradient bg-gradient-to-r from-secondary-400 to-yellow-400 bg-clip-text text-transparent">
                  Jesus Celebration Centre
                </span>
                Mombasa
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                To fulfill its mandate of harvesting as many souls to Christ and be the light house of Africa and many other continents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/live" className="btn-secondary text-center">
                  <Play className="inline-block h-5 w-5 mr-2" />
                  Watch Live
                </Link>
                <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Join Us This Sunday</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-secondary-400" />
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-secondary-400" />
                    <span>Main Sanctuary, Mombasa Road</span>
                  </div>
                </div>
                <Link to="/services" className="block mt-4 text-secondary-400 hover:text-secondary-300 transition-colors">
                  View All Service Times →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{churchStats.members}</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{churchStats.branches}</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{churchStats.ministries}</div>
              <div className="text-gray-600">Ministries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{churchStats.established}</div>
              <div className="text-gray-600">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      {currentAnnouncements.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Announcements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                      announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {announcement.priority.toUpperCase()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{announcement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <Link to="/events" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-semibold">
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life Testimonies</h2>
            <p className="text-xl text-gray-600">Hear how God is transforming lives at JCC Mombasa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 card-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="mt-4">
                  <span className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-sm">
                    {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline">
              Read More Testimonies
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you're new to faith or looking to grow deeper, we'd love to connect with you and help you on your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Connected
            </Link>
            <Link to="/give" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Give Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home