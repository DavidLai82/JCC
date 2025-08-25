import React from 'react'
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react'
import { events } from '../data/mockData'

const Events: React.FC = () => {
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const pastEvents = events.filter(event => new Date(event.date) < new Date()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Church Events</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Join us for exciting events, conferences, and activities that strengthen our faith and community bonds.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.category === 'conference' ? 'bg-purple-100 text-purple-800' :
                        event.category === 'youth' ? 'bg-green-100 text-green-800' :
                        event.category === 'outreach' ? 'bg-orange-100 text-orange-800' :
                        'bg-primary-100 text-primary-800'
                      }`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                      {event.isFeatured && (
                        <span className="ml-2 px-2 py-1 bg-secondary-100 text-secondary-800 text-xs font-semibold rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                          {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric' 
                          })}`}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {event.registrationRequired && (
                      <div className="border-t pt-4">
                        {event.registrationLink ? (
                          <a 
                            href={event.registrationLink}
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm"
                          >
                            <Users className="h-4 w-4 mr-2" />
                            Register Now
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center text-gray-500 text-sm">
                            <Users className="h-4 w-4 mr-2" />
                            Registration Required
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600">Check back soon for new events and activities!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom section-padding">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.slice(0, 6).map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden opacity-75 hover:opacity-100 transition-opacity">
                  <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-3 w-3 mr-2" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss Out!</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Stay connected with us to receive updates about upcoming events, conferences, and special activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Subscribe to Updates
            </a>
            <a href="/live" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Watch Live Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events