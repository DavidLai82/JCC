import React from 'react'
import { Mail, Phone, Heart, Users, Crown, Award } from 'lucide-react'

const Leadership: React.FC = () => {
  // Filter leaders by role for potential future use
  // const seniorLeaders = leaders.filter(leader => leader.role === 'senior_pastor' || leader.role === 'associate_pastor')
  // const boardMembers = leaders.filter(leader => leader.role === 'elder' || leader.role === 'deacon')

  const leadershipTeam = [
    {
      name: 'Rev. Dr. John Mwangi',
      title: 'Senior Pastor',
      image: '/images/leaders/senior-pastor.jpg',
      bio: 'Rev. Dr. John Mwangi has been serving as Senior Pastor of Jesus Celebration Centre Mombasa for over 20 years. He holds a Doctorate in Theology and has been instrumental in the church\'s growth and expansion across three continents. His passion for souls and commitment to biblical teaching has transformed countless lives.',
      specialties: ['Biblical Teaching', 'Leadership Development', 'Church Planting', 'Pastoral Care'],
      contact: { email: 'pastor@jccmombasa.org', phone: '+254 700 000 001' }
    },
    {
      name: 'Pastor Grace Mwangi',
      title: 'Associate Pastor & Ladies Ministry Leader',
      image: '/images/leaders/associate-pastor.jpg',
      bio: 'Pastor Grace Mwangi serves as Associate Pastor and leads the Ladies Ministry at JCC Mombasa. With over 15 years in ministry, she is passionate about empowering women to discover their God-given potential and purpose. Her heart for mentorship and discipleship has impacted women across all age groups.',
      specialties: ['Women\'s Ministry', 'Counseling', 'Mentorship', 'Family Ministry'],
      contact: { email: 'grace@jccmombasa.org' }
    },
    {
      name: 'Elder Samuel Kariuki',
      title: 'Church Elder & Men\'s Ministry Leader',
      image: '/images/leaders/elder1.jpg',
      bio: 'Elder Samuel Kariuki has been with JCC Mombasa since its inception and serves as a church elder and leader of the Men\'s Ministry. His wisdom, integrity, and commitment to excellence have made him a respected voice in church governance and men\'s development.',
      specialties: ['Church Governance', 'Men\'s Ministry', 'Business Ministry', 'Community Outreach'],
      contact: { email: 'samuel@jccmombasa.org' }
    },
    {
      name: 'Pastor David Njoroge',
      title: 'Youth Pastor',
      image: '/images/leaders/youth-pastor.jpg',
      bio: 'Pastor David Njoroge leads our vibrant Youth Ministry with energy and vision. He has a passion for seeing young people encounter God and discover their purpose. Under his leadership, the youth ministry has grown significantly and impacts both local and international communities.',
      specialties: ['Youth Ministry', 'Campus Ministry', 'Music Ministry', 'Creative Arts'],
      contact: { email: 'youth@jccmombasa.org' }
    },
    {
      name: 'Teacher Mary Wanjiku',
      title: 'Children\'s Ministry Director',
      image: '/images/leaders/children-director.jpg',
      bio: 'Teacher Mary Wanjiku brings over 18 years of experience in children\'s education and ministry. She has a heart for children and a gift for making biblical truths come alive for young minds. Her creative approach to children\'s ministry has been a blessing to many families.',
      specialties: ['Children\'s Ministry', 'Education', 'Sunday School', 'VBS Programs'],
      contact: { email: 'children@jccmombasa.org' }
    },
    {
      name: 'Pastor Michael Otieno',
      title: 'Worship Pastor',
      image: '/images/leaders/worship-pastor.jpg',
      bio: 'Pastor Michael Otieno leads our worship ministry with a heart for authentic worship and musical excellence. He has been instrumental in developing our worship teams and creating an atmosphere where people can encounter God through worship and praise.',
      specialties: ['Worship Leading', 'Music Direction', 'Audio Production', 'Team Development'],
      contact: { email: 'worship@jccmombasa.org' }
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Leadership</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Meet the dedicated leaders who shepherd and guide JCC Mombasa with wisdom, integrity, and a heart for God's people.
          </p>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Senior Leadership</h2>
            <p className="text-xl text-gray-600">
              Our senior pastoral team provides spiritual oversight and vision for the church
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadershipTeam.slice(0, 2).map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-shadow">
                <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Crown className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Senior Leadership</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{leader.title}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ministry Focus:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {leader.contact.email && (
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-primary-600 mr-3" />
                        <a href={`mailto:${leader.contact.email}`} className="text-primary-600 hover:text-primary-700 text-sm">
                          {leader.contact.email}
                        </a>
                      </div>
                    )}
                    {leader.contact.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-primary-600 mr-3" />
                        <a href={`tel:${leader.contact.phone}`} className="text-primary-600 hover:text-primary-700 text-sm">
                          {leader.contact.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ministry Leaders</h2>
            <p className="text-xl text-gray-600">
              Passionate leaders who oversee various ministries and serve our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.slice(2).map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-shadow">
                <div className="h-48 bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="h-12 w-12 mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-semibold">Ministry Leader</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-secondary-600 font-semibold mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {leader.contact.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-secondary-600 mr-2" />
                      <a href={`mailto:${leader.contact.email}`} className="text-secondary-600 hover:text-secondary-700 text-sm">
                        Contact
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values and principles that guide our leadership approach at JCC Mombasa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Servant Leadership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We lead by serving others, following Christ's example of humility and service to all people.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biblical Authority</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All our leadership decisions are grounded in biblical principles and the wisdom of God's Word.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in team leadership and collaborative decision-making for the benefit of all.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence & Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive for excellence in all we do while maintaining the highest standards of integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Development */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Leadership Development</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are committed to raising up the next generation of godly leaders
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Training</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We offer comprehensive leadership training programs that develop both spiritual maturity and practical leadership skills. 
                  Our programs include mentorship, workshops, and hands-on ministry experience.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Monthly leadership workshops</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">One-on-one mentorship programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Practical ministry assignments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Leaders</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We identify and nurture emerging leaders within our congregation, providing them with opportunities to grow 
                  and serve in various capacities while receiving guidance from experienced leaders.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Leadership assessment and identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Ministry placement and development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Ongoing coaching and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect with Our Leaders</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our pastoral team is here to serve you. Whether you need prayer, guidance, or want to get involved in ministry, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Schedule a Meeting
            </a>
            <a href="mailto:pastor@jccmombasa.org" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Email Leadership
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leadership