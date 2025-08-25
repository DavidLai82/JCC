import React, { useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Calendar, Clock, Users, MessageCircle } from 'lucide-react'

const Live: React.FC = () => {
  const [isLive, setIsLive] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [viewerCount, setViewerCount] = useState(342)

  // Mock live status - in real app, this would come from your streaming service
  useEffect(() => {
    // Check if it's Sunday between 9 AM and 12 PM (simulate live service time)
    const now = new Date()
    const day = now.getDay() // 0 = Sunday
    const hour = now.getHours()
    
    setIsLive(day === 0 && hour >= 9 && hour < 12)
    
    // Update viewer count periodically when live
    if (isLive) {
      const interval = setInterval(() => {
        setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5)
      }, 30000)
      
      return () => clearInterval(interval)
    }
  }, [isLive])

  const upcomingServices = [
    {
      id: '1',
      title: 'Sunday Morning Service',
      date: 'This Sunday',
      time: '9:00 AM - 12:00 PM EAT',
      description: 'Join us for worship, prayer, and biblical teaching'
    },
    {
      id: '2',
      title: 'Wednesday Bible Study',
      date: 'This Wednesday',
      time: '6:00 PM - 8:00 PM EAT',
      description: 'Mid-week bible study and fellowship'
    },
    {
      id: '3',
      title: 'Friday Prayer Meeting',
      date: 'This Friday',
      time: '6:00 PM - 8:00 PM EAT',
      description: 'Corporate prayer and intercession'
    }
  ]

  const recentSermons = [
    {
      id: '1',
      title: 'Walking by Faith',
      preacher: 'Rev. Dr. John Mwangi',
      date: 'August 18, 2024',
      duration: '42:15',
      views: '1.2K'
    },
    {
      id: '2',
      title: 'The Power of Prayer',
      preacher: 'Pastor Grace Mwangi',
      date: 'August 11, 2024',
      duration: '38:30',
      views: '856'
    },
    {
      id: '3',
      title: 'God\'s Unfailing Love',
      preacher: 'Rev. Dr. John Mwangi',
      date: 'August 4, 2024',
      duration: '45:22',
      views: '1.5K'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Watch Live</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Join us online for live worship services and special events from JCC Mombasa
          </p>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-8 bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Video Player */}
              <div className="lg:col-span-3">
                <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                  {isLive ? (
                    <div className="relative w-full h-full">
                      {/* Mock Video Player */}
                      <div className="w-full h-full bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">📹</div>
                          <h3 className="text-2xl font-bold mb-2">Live Stream</h3>
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-red-400 font-semibold">LIVE</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{viewerCount.toLocaleString()} viewers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Video Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                            >
                              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                            </button>
                            <button
                              onClick={() => setIsMuted(!isMuted)}
                              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                            >
                              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </button>
                            <span className="text-sm">Sunday Morning Service</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                              <Maximize className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📺</div>
                        <h3 className="text-2xl font-bold mb-4">Service Not Live</h3>
                        <p className="text-gray-300 mb-6">
                          We're currently offline. Check our schedule below for upcoming live services.
                        </p>
                        <button className="btn-primary">
                          Get Notified When Live
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stream Info */}
                <div className="mt-6 bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {isLive ? 'Live Now: Sunday Morning Service' : 'Next Service: Sunday Morning Worship'}
                      </h2>
                      <p className="text-gray-600">
                        Join us for inspiring worship, powerful prayer, and life-changing biblical teaching from JCC Mombasa.
                      </p>
                    </div>
                    {isLive && (
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        LIVE
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Every Sunday</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>9:00 AM - 12:00 PM EAT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-lg h-96 flex flex-col">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-gray-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    {isLive ? (
                      <div className="space-y-3 text-sm">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="font-semibold text-primary-600 mb-1">Sarah K.</div>
                          <div>Praise the Lord! Joining from Nairobi 🙏</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="font-semibold text-primary-600 mb-1">John M.</div>
                          <div>Good morning family! God bless</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="font-semibold text-primary-600 mb-1">Grace W.</div>
                          <div>The worship is so powerful today! 🔥</div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <div className="text-center">
                          <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p>Chat will be active during live services</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {isLive && (
                    <div className="p-3 border-t border-gray-200">
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors">
                          Send
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Upcoming Live Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 card-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{service.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.time}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button className="w-full btn-outline">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Sermons</h2>
            <a href="/sermons" className="text-primary-600 hover:text-primary-700 font-semibold">
              View All Sermons →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSermons.map((sermon) => (
              <div key={sermon.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-3">{sermon.preacher}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{sermon.date}</span>
                    <span>{sermon.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{sermon.views} views</span>
                    <button className="btn-primary text-sm px-4 py-2">
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss a Service</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our notifications to be alerted when we go live or when new sermon recordings are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              Enable Notifications
            </button>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Live