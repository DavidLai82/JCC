import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Heart, Clock, MapPin, Play, Users, Mail, Phone, Send, MessageCircle, Star } from 'lucide-react'
import { services, churchStats } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

const Home: React.FC = () => {
  const [prayerRequest, setPrayerRequest] = useState({ name: '', email: '', request: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { isAuthenticated, user } = useAuth()

  const handlePrayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate prayer request submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your prayer request. We will be praying for you.')
    setPrayerRequest({ name: '', email: '', request: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/live" className="btn-secondary text-center px-8 py-4 text-lg">
                  <Play className="inline-block h-6 w-6 mr-2" />
                  Watch Online
                </Link>
                <Link to="#about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-center px-8 py-4 text-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Jesus Celebration Centre Mombasa is an international Pentecostal ministry with a presence in Kenya, the UK, and the USA. 
                We are committed to fulfilling our mandate of harvesting as many souls to Christ and being the lighthouse of Africa and many other continents.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since our establishment in 1994, we have been dedicated to spiritual engagement, community outreach, education, 
                and global evangelism. Our church family spans across multiple countries, united in faith and purpose.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-1">{churchStats.members}</div>
                  <div className="text-gray-600">Members</div>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-1">{churchStats.branches}</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
              
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 mr-3 mt-1 text-secondary-400" />
                    <div>
                      <h4 className="font-semibold mb-1">Spiritual Growth</h4>
                      <p className="text-blue-100">Nurturing believers in their faith journey through biblical teaching and fellowship.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-6 w-6 mr-3 mt-1 text-secondary-400" />
                    <div>
                      <h4 className="font-semibold mb-1">Community Outreach</h4>
                      <p className="text-blue-100">Serving our local and global communities with love and compassion.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-6 w-6 mr-3 mt-1 text-secondary-400" />
                    <div>
                      <h4 className="font-semibold mb-1">Global Evangelism</h4>
                      <p className="text-blue-100">Spreading the Gospel across Africa and beyond through various ministries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for inspiring worship, biblical teaching, and fellowship. Everyone is welcome at JCC Mombasa!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-8 shadow-lg card-shadow text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <div className="space-y-2 mb-4">
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
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services" className="btn-primary">
              View All Service Information
            </Link>
          </div>
        </div>
      </section>

      {/* Watch Online Section */}
      <section id="watch-online" className="py-20 bg-primary-600 text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Watch Online</h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Can't make it to church in person? Join us online for live worship services, special events, and biblical teaching.
              </p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Experience the same powerful worship, inspiring messages, and sense of community from wherever you are. 
                Our live streams are available every Sunday and for special events throughout the week.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-secondary-400" />
                  <span className="text-lg">Sunday: 9:00 AM - 12:00 PM EAT</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-secondary-400" />
                  <span className="text-lg">Wednesday: 6:00 PM - 8:00 PM EAT</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/live" className="btn-secondary">
                  <Play className="inline-block h-5 w-5 mr-2" />
                  Watch Live Now
                </Link>
                <Link to="/events" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  View Schedule
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 text-white/80" />
                    <p className="text-lg text-white/90">Live Stream Preview</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Join Us This Sunday</h3>
                <p className="text-blue-100 mb-4">
                  Experience worship, fellowship, and biblical teaching that will inspire and encourage your faith journey.
                </p>
                <div className="flex items-center justify-between text-sm text-blue-200">
                  <span>Next Service: Sunday 9:00 AM</span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Live Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Section */}
      <section id="prayer-request" className="py-20 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Prayer Requests</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We believe in the power of prayer and would be honored to pray for you. Share your prayer request with us, 
                and our prayer team will lift you up in prayer.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." - Mark 11:24
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="h-6 w-6 mr-3 mt-1 text-primary-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Confidential & Caring</h4>
                    <p className="text-gray-600">Your prayer requests are handled with complete confidentiality and care.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 mr-3 mt-1 text-primary-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dedicated Prayer Team</h4>
                    <p className="text-gray-600">Our committed prayer warriors will intercede for you regularly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 mr-3 mt-1 text-primary-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personal Follow-up</h4>
                    <p className="text-gray-600">We may reach out to check on you and provide additional support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Prayer Request</h3>
                <form onSubmit={handlePrayerSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="prayer-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="prayer-name"
                      value={prayerRequest.name}
                      onChange={(e) => setPrayerRequest({...prayerRequest, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="prayer-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="prayer-email"
                      value={prayerRequest.email}
                      onChange={(e) => setPrayerRequest({...prayerRequest, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="prayer-request" className="block text-sm font-medium text-gray-700 mb-2">
                      Prayer Request *
                    </label>
                    <textarea
                      id="prayer-request"
                      value={prayerRequest.request}
                      onChange={(e) => setPrayerRequest({...prayerRequest, request: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Share your prayer request here..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full w-4 h-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Prayer Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Get in touch with us for any questions, prayer requests, or to learn more about JCC Mombasa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      Mombasa Road<br />
                      Mombasa, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+254 700 000 000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">info@jccmombasa.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Service Times</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Sunday: 9:00 AM - 12:00 PM</p>
                      <p>Wednesday: 6:00 PM - 8:00 PM</p>
                      <p>Friday: 6:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/contact" className="bg-white p-6 rounded-xl shadow-lg card-shadow group hover:bg-primary-50 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Send Message</h4>
                  </div>
                  <p className="text-gray-600">Get in touch with us for general inquiries, ministry questions, or feedback.</p>
                </Link>
                
                <Link to="/events" className="bg-white p-6 rounded-xl shadow-lg card-shadow group hover:bg-primary-50 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                      <Calendar className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">View Events</h4>
                  </div>
                  <p className="text-gray-600">Check out our upcoming events, conferences, and special services.</p>
                </Link>
                
                <Link to="/ministries" className="bg-white p-6 rounded-xl shadow-lg card-shadow group hover:bg-primary-50 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                      <Users className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Join Ministries</h4>
                  </div>
                  <p className="text-gray-600">Discover ways to get involved and serve in our various ministries.</p>
                </Link>
                
                <Link to="/give" className="bg-white p-6 rounded-xl shadow-lg card-shadow group hover:bg-primary-50 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                      <Heart className="h-6 w-6 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Give Online</h4>
                  </div>
                  <p className="text-gray-600">Support our mission through secure online giving and donations.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Info Section (for testing authentication) */}
      {isAuthenticated && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container-custom section-padding">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome, {user?.name}!</h2>
              <p className="text-gray-600 mb-6">
                You are successfully logged in to the JCC Mombasa website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/profile" className="btn-primary">
                  View Profile
                </Link>
                <Link to="/login" className="btn-secondary">
                  Account Settings
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home