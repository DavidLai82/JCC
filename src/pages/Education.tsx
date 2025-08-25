import React from 'react'
import { GraduationCap, Users, Award, BookOpen, Microscope, Computer, Trophy, MapPin, Phone, Mail } from 'lucide-react'
import { schoolInfo } from '../data/mockData'

const Education: React.FC = () => {
  const school = schoolInfo[0]

  const programs = [
    {
      level: 'Nursery',
      ageRange: '3-5 years',
      description: 'Early childhood development with Christian foundation',
      icon: Users,
      features: ['Play-based learning', 'Character development', 'Basic literacy and numeracy', 'Social skills development']
    },
    {
      level: 'Primary',
      ageRange: '6-13 years',
      description: 'Comprehensive primary education following the Kenyan curriculum',
      icon: BookOpen,
      features: ['8-4-4 curriculum', 'Christian Religious Education', 'Extra-curricular activities', 'KCPE preparation']
    },
    {
      level: 'Secondary',
      ageRange: '14-17 years',
      description: 'Quality secondary education preparing students for higher learning',
      icon: GraduationCap,
      features: ['KCSE preparation', 'Career guidance', 'Leadership development', 'University preparation']
    }
  ]

  const facilities = [
    { name: 'Modern Classrooms', icon: BookOpen, description: 'Well-equipped classrooms with modern teaching aids' },
    { name: 'Science Laboratory', icon: Microscope, description: 'Fully equipped lab for practical science education' },
    { name: 'Computer Lab', icon: Computer, description: 'Modern computers for digital literacy training' },
    { name: 'Library', icon: BookOpen, description: 'Extensive collection of books and learning resources' },
    { name: 'Sports Facilities', icon: Trophy, description: 'Playing fields and courts for physical education' },
    { name: 'Chapel', icon: Users, description: 'Dedicated space for spiritual development and worship' }
  ]

  const achievements = [
    {
      year: '2023',
      achievement: 'Top 10% performance in KCPE national examinations',
      icon: Trophy
    },
    {
      year: '2022',
      achievement: 'Regional champions in inter-school music competition',
      icon: Award
    },
    {
      year: '2021',
      achievement: 'Excellence in character development award',
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">JCC Education Complex</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                Providing quality Christian education since {school.established}, nurturing young minds with academic excellence and godly character.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#admission" className="btn-secondary">
                  Apply for Admission
                </a>
                <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Established:</span>
                    <span className="font-semibold">{school.established}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Principal:</span>
                    <span className="font-semibold">{school.principal}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Students:</span>
                    <span className="font-semibold">800+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Levels:</span>
                    <span className="font-semibold">Nursery - Primary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Educational Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                JCC Education Complex is committed to providing holistic education that develops the intellectual, 
                spiritual, physical, and social aspects of each student. We believe in nurturing not just academic 
                excellence but also strong Christian character and leadership skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our approach combines the Kenyan national curriculum with Christian values, ensuring our students 
                are well-prepared for higher education while maintaining a strong moral foundation that will guide 
                them throughout their lives.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Academic Excellence</h3>
                <p className="text-gray-700">
                  Consistently achieving top performance in national examinations through quality teaching and comprehensive support.
                </p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">Character Development</h3>
                <p className="text-gray-700">
                  Instilling Christian values, integrity, and leadership skills that shape students into responsible citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to meet the diverse needs of students at different developmental stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center card-shadow">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <program.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.level}</h3>
                <p className="text-primary-600 font-semibold mb-4">{program.ageRange}</p>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="text-left space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modern facilities provide an optimal learning environment for all our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                  <facility.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Recognition of our commitment to excellence in education and character development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center card-shadow">
                <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-secondary-600" />
                </div>
                <div className="text-2xl font-bold text-secondary-600 mb-2">{achievement.year}</div>
                <p className="text-gray-700 leading-relaxed">{achievement.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Information */}
      <section id="admission" className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Admission Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span>Birth certificate copy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span>Previous school reports (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span>Passport-size photographs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                      <span>Medical certificate</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Admission Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-semibold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Submit application (January - March)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-semibold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Assessment/Interview (April)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-semibold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Admission decision (May)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div id="contact">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact School Office</h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">JCC Education Complex<br />Mombasa Road, Mombasa<br />Kenya</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href={`tel:${school.contactPhone}`} className="text-primary-600 hover:text-primary-700">
                      {school.contactPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${school.contactEmail}`} className="text-primary-600 hover:text-primary-700">
                      {school.contactEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">School Principal</h3>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{school.principal}</h4>
                  <p className="text-gray-600 text-sm">
                    With over 20 years of experience in education, our principal is committed to academic excellence and character development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the JCC Education Family</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Give your child the gift of quality Christian education that shapes both academic success and godly character.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Schedule a Visit
            </a>
            <a href={`mailto:${school.contactEmail}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Request Information
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education