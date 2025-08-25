import React from 'react'
import { Clock, MapPin, Calendar, Users, Heart, Book } from 'lucide-react'
import { services, branches } from '../data/mockData'

const Services: React.FC = () => {
  const regularServices = services.filter(service => service.isRegular)

  const serviceDetails = [
    {
      name: 'Sunday Morning Service',
      time: '9:00 AM - 12:00 PM',
      description: 'Our main worship service featuring vibrant praise and worship, powerful prayer, and life-transforming biblical teaching. Perfect for families and individuals seeking spiritual growth.',
      whatToExpect: [
        'Contemporary worship music',
        'Biblical preaching and teaching',
        'Prayer and ministry time',
        'Fellowship and community'
      ],
      icon: Users
    },
    {
      name: 'Wednesday Bible Study',
      time: '6:00 PM - 8:00 PM',
      description: 'Join us for in-depth study of God\'s Word in a more intimate setting. Great for spiritual growth and building deeper relationships with fellow believers.',
      whatToExpected: [
        'Verse-by-verse Bible study',
        'Interactive discussions',
        'Prayer and testimonies',
        'Light refreshments'
      ],
      icon: Book
    },
    {
      name: 'Friday Prayer Meeting',
      time: '6:00 PM - 8:00 PM',
      description: 'A powerful time of corporate prayer, intercession, and seeking God\'s face together. Experience the presence of God in a special way.',
      whatToExpect: [
        'Corporate intercession',
        'Personal prayer ministry',
        'Worship and praise',
        'Testimonies of answered prayer'
      ],
      icon: Heart
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Service Times</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth. Everyone is welcome at JCC Mombasa!
          </p>
        </div>
      </section>

      {/* Quick Service Times */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Weekly Services</h2>
            <p className="text-xl text-gray-600">
              Regular services at our main campus in Mombasa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularServices.map((service) => (
              <div key={service.id} className="bg-white border-2 border-primary-100 rounded-lg p-8 text-center hover:border-primary-300 transition-colors card-shadow">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-primary-600 font-semibold">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{service.day}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{service.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600">
              Get a glimpse of what happens during our services
            </p>
          </div>

          <div className="space-y-12">
            {serviceDetails.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <service.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                    </div>
                    <div className="flex items-center mb-4 text-primary-600 font-semibold">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{service.time}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">What to Expect:</h4>
                      {service.whatToExpect?.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center p-8">
                    <div className="text-white text-center">
                      <service.icon className="h-24 w-24 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-semibold opacity-90">Join us for {service.name.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Services */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Services</h2>
            <p className="text-xl text-gray-600">
              JCC services across our international locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(branches).map(([key, branch]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{branch.pastor}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {branch.services.map((service) => (
                    <div key={service.id} className="bg-white p-3 rounded border">
                      <div className="font-semibold text-gray-900 text-sm">{service.name}</div>
                      <div className="text-xs text-gray-600">{service.day} • {service.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Time Visitor Information */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">First Time Visiting?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're excited to welcome you! Here's what you need to know for your first visit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Wear</h3>
                <p className="text-gray-600 text-left">
                  Come as you are! We don't have a strict dress code. Most people dress casually or semi-formally. 
                  The most important thing is that you feel comfortable and welcome.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                <p className="text-gray-600 text-left">
                  Our services are warm and welcoming. You'll experience contemporary worship music, 
                  biblical teaching, and friendly people. Services typically last about 3 hours with breaks.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Parking & Arrival</h3>
                <p className="text-gray-600 text-left">
                  We have ample parking available. We recommend arriving 15-20 minutes early to find parking 
                  and get seated. Our volunteer ushers will be happy to help you find a seat.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Children & Families</h3>
                <p className="text-gray-600 text-left">
                  Children are always welcome in our services. We also have dedicated children's programs 
                  during Sunday services with age-appropriate activities and teaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We can't wait to meet you and welcome you into our church family. Come as you are and experience God's love with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/live" className="btn-secondary">
              Watch Online First
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services