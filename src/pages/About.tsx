import React from 'react'
import { Heart, Target, Eye, Users, Globe, BookOpen } from 'lucide-react'
import { churchStats, branches } from '../data/mockData'

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">About JCC Mombasa</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Jesus Celebration Centre Mombasa - An international Pentecostal ministry with presence in Kenya, UK, and USA
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Jesus Celebration Centre Mombasa was founded in {churchStats.established} with a divine vision to be a lighthouse of hope and transformation in Africa and beyond. What started as a small gathering of believers has grown into an international ministry touching lives across three continents.
                </p>
                <p>
                  Over the years, God has blessed JCC Mombasa with tremendous growth, not just in numbers but in spiritual depth and community impact. Our church has become a beacon of hope, offering spiritual guidance, community support, and educational opportunities through our various ministries and programs.
                </p>
                <p>
                  Today, we serve over {churchStats.members} members across {churchStats.branches} countries, with {churchStats.ministries} active ministries addressing the diverse needs of our community. Our education complex has nurtured over {churchStats.schoolStudents} students since 1994, providing quality Christian education that shapes character and academic excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{churchStats.established}</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{churchStats.members}</div>
                    <div className="text-gray-600">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{churchStats.countries}</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{churchStats.schoolStudents}</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-shadow">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To fulfill its mandate of harvesting as many souls to Christ and be the lighthouse of Africa and many other continents, spreading the Gospel with power and demonstration of the Holy Spirit.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-shadow">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a global church that transforms communities through the love of Christ, raising disciples who impact their generation and establishing God's kingdom on earth.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-shadow">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Love, integrity, excellence, community, and empowerment guide everything we do. We believe in the power of authentic relationships and the transformative love of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Details */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Believe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faith is grounded in biblical truth and expressed through practical love and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="h-4 w-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Biblical Authority</h4>
                  <p className="text-gray-700">We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Salvation by Grace</h4>
                  <p className="text-gray-700">Salvation is a free gift from God, available to all who believe in Jesus Christ as Lord and Savior.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Community & Fellowship</h4>
                  <p className="text-gray-700">We are called to live in authentic community, supporting and encouraging one another in our faith journey.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-4 w-4 text-secondary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Great Commission</h4>
                  <p className="text-gray-700">We are committed to sharing the Gospel locally and globally, making disciples of all nations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-secondary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Holy Spirit Power</h4>
                  <p className="text-gray-700">We believe in the gifts and power of the Holy Spirit working through believers today.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-secondary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Holistic Ministry</h4>
                  <p className="text-gray-700">We minister to the whole person - spiritual, emotional, physical, and social needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600">
              JCC Mombasa has expanded across continents, establishing churches that share our vision and values
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(branches).map(([key, branch]) => (
              <div key={key} className="bg-white rounded-lg shadow-lg p-6 text-center card-shadow">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{branch.name}</h3>
                <p className="text-gray-600 mb-4">{branch.address}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Pastor:</strong> {branch.pastor}</div>
                  <div><strong>Contact:</strong> {branch.phone}</div>
                  <div><strong>Email:</strong> {branch.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Family</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Experience the love of Christ and be part of a community that's making a difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-secondary">
              Visit Us This Sunday
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About