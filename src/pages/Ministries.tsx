import React, { useState } from 'react'
import { Users, Heart, Calendar, MapPin, Clock, Mail, ArrowRight } from 'lucide-react'
import { ministries } from '../data/mockData'

const Ministries: React.FC = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<string | null>(null)

  const allMinistries = [
    ...ministries,
    {
      id: '5',
      name: 'Evangelism & Outreach',
      description: 'Taking the Gospel to the streets and reaching out to our community with God\'s love.',
      leader: 'Pastor Michael Otieno',
      image: '/images/ministries/evangelism.jpg',
      meetings: [
        {
          day: 'Saturday',
          time: '2:00 PM',
          location: 'Community Centers'
        }
      ],
      activities: ['Street evangelism', 'Hospital visits', 'Prison ministry', 'Community service'],
      contactEmail: 'outreach@jccmombasa.org'
    },
    {
      id: '6',
      name: 'Music & Worship',
      description: 'Leading the congregation in praise and worship through various musical expressions.',
      leader: 'Pastor Michael Otieno',
      image: '/images/ministries/music.jpg',
      meetings: [
        {
          day: 'Tuesday & Thursday',
          time: '6:00 PM',
          location: 'Main Sanctuary'
        }
      ],
      activities: ['Choir practice', 'Instrument training', 'Worship team', 'Special performances'],
      contactEmail: 'worship@jccmombasa.org'
    },
    {
      id: '7',
      name: 'Prayer Ministry',
      description: 'Dedicated to intercession, prayer, and spiritual warfare for the church and community.',
      leader: 'Elder Ruth Muthoni',
      image: '/images/ministries/prayer.jpg',
      meetings: [
        {
          day: 'Monday & Friday',
          time: '5:00 AM',
          location: 'Prayer Room'
        },
        {
          day: 'Friday',
          time: '6:00 PM',
          location: 'Main Sanctuary'
        }
      ],
      activities: ['Early morning prayer', 'Intercession groups', 'Prayer walks', 'Fasting programs'],
      contactEmail: 'prayer@jccmombasa.org'
    },
    {
      id: '8',
      name: 'Hospitality & Ushering',
      description: 'Creating a welcoming environment for all who visit and worship with us.',
      leader: 'Deacon James Kimani',
      image: '/images/ministries/hospitality.jpg',
      meetings: [
        {
          day: 'Saturday',
          time: '4:00 PM',
          location: 'Fellowship Hall'
        }
      ],
      activities: ['Welcome services', 'Event coordination', 'Guest relations', 'Facility management'],
      contactEmail: 'hospitality@jccmombasa.org'
    }
  ]

  const ministryCategories = [
    { id: 'all', name: 'All Ministries', count: allMinistries.length },
    { id: 'age-based', name: 'Age-Based', count: 4 },
    { id: 'service', name: 'Service & Outreach', count: 2 },
    { id: 'worship', name: 'Worship & Prayer', count: 2 }
  ]

  const getFilteredMinistries = (category: string) => {
    switch (category) {
      case 'age-based':
        return allMinistries.filter(m => ['1', '2', '3', '4'].includes(m.id))
      case 'service':
        return allMinistries.filter(m => ['5', '8'].includes(m.id))
      case 'worship':
        return allMinistries.filter(m => ['6', '7'].includes(m.id))
      default:
        return allMinistries
    }
  }

  const [activeCategory, setActiveCategory] = useState('all')
  const filteredMinistries = getFilteredMinistries(activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Ministries</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover your place in God's kingdom through our diverse ministries designed to help you grow, serve, and make a difference.
          </p>
        </div>
      </section>

      {/* Ministry Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom section-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {ministryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinistries.map((ministry) => (
              <div key={ministry.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold opacity-90">{ministry.name}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{ministry.description}</p>
                  
                  {/* Leader */}
                  <div className="flex items-center mb-4">
                    <Heart className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-sm text-gray-700">
                      <strong>Led by:</strong> {ministry.leader}
                    </span>
                  </div>

                  {/* Meeting Times */}
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Meeting Times:</h4>
                    {ministry.meetings.map((meeting, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-3 w-3 mr-2" />
                        <span>{meeting.day} • {meeting.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Activities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ministry.activities.slice(0, 2).map((activity, idx) => (
                        <span key={idx} className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">
                          {activity}
                        </span>
                      ))}
                      {ministry.activities.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{ministry.activities.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setSelectedMinistry(ministry.id)}
                      className="w-full btn-primary text-sm py-2"
                    >
                      Learn More
                    </button>
                    {ministry.contactEmail && (
                      <a
                        href={`mailto:${ministry.contactEmail}`}
                        className="w-full btn-outline text-sm py-2 text-center"
                      >
                        Contact Ministry
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Detail Modal */}
      {selectedMinistry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {(() => {
              const ministry = allMinistries.find(m => m.id === selectedMinistry)
              if (!ministry) return null

              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{ministry.name}</h2>
                    <button
                      onClick={() => setSelectedMinistry(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Ministry</h3>
                      <p className="text-gray-700 leading-relaxed">{ministry.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Meeting Schedule</h3>
                      <div className="space-y-3">
                        {ministry.meetings.map((meeting, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Calendar className="h-4 w-4 text-primary-600 mr-2" />
                              <span className="font-medium">{meeting.day}</span>
                            </div>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 text-primary-600 mr-2" />
                              <span>{meeting.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-primary-600 mr-2" />
                              <span>{meeting.location}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Ministry Activities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {ministry.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary-600 mr-3" />
                          <span><strong>Leader:</strong> {ministry.leader}</span>
                        </div>
                        {ministry.contactEmail && (
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-primary-600 mr-3" />
                            <a href={`mailto:${ministry.contactEmail}`} className="text-primary-600 hover:text-primary-700">
                              {ministry.contactEmail}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t">
                      <a
                        href="/contact"
                        className="flex-1 btn-primary text-center"
                      >
                        Join This Ministry
                      </a>
                      {ministry.contactEmail && (
                        <a
                          href={`mailto:${ministry.contactEmail}`}
                          className="flex-1 btn-outline text-center"
                        >
                          Ask Questions
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Get Involved Section */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Place</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              God has gifted each person uniquely to serve in His kingdom. Discover how your gifts and passions can make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discover Your Gifts</h3>
              <p className="text-gray-600 leading-relaxed">
                Take our spiritual gifts assessment to discover how God has uniquely equipped you to serve in His kingdom and bless others.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with Leaders</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet with ministry leaders to learn more about opportunities and find the best fit for your interests and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Serving</h3>
              <p className="text-gray-600 leading-relaxed">
                Begin your ministry journey with training and mentorship. Make a difference while growing in your faith and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Your gifts are needed in God's kingdom. Take the first step and connect with one of our ministries today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Join a Ministry
            </a>
            <a href="mailto:ministries@jccmombasa.org" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Contact Ministries Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ministries