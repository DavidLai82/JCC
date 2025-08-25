import React, { useState } from 'react'
import { Heart, CreditCard, Smartphone, Building, Gift, DollarSign, Users, Home } from 'lucide-react'

const Give: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [givingType, setGivingType] = useState('tithe')

  const predefinedAmounts = ['1000', '2500', '5000', '10000', '25000', '50000']

  const givingOptions = [
    {
      id: 'tithe',
      name: 'Tithe',
      description: 'Your faithful tithe supports the ongoing ministry and operations of JCC Mombasa.',
      icon: Heart
    },
    {
      id: 'offering',
      name: 'Offering',
      description: 'Special offerings for church projects, missions, and community outreach programs.',
      icon: Gift
    },
    {
      id: 'building',
      name: 'Building Fund',
      description: 'Help us expand our facilities to accommodate our growing congregation.',
      icon: Building
    },
    {
      id: 'missions',
      name: 'Missions',
      description: 'Support our global missions work and church planting efforts.',
      icon: Users
    }
  ]

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      description: 'Send money via M-Pesa to our church paybill',
      icon: Smartphone,
      details: 'Paybill: 123456, Account: Your Name'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer to our church account',
      icon: Building,
      details: 'Account: 1234567890, Bank: ABC Bank'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Secure online payment with your card',
      icon: CreditCard,
      details: 'Processed securely through our payment gateway'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Give Online</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Make Your Contribution</h2>
              <p className="text-xl text-gray-600">
                Your generous giving enables us to fulfill our mission and serve our community
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Giving Options */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Giving Type</h3>
                <div className="space-y-4">
                  {givingOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setGivingType(option.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        givingType === option.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-full ${
                          givingType === option.id ? 'bg-primary-500' : 'bg-gray-400'
                        }`}>
                          <option.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{option.name}</h4>
                          <p className="text-gray-600 text-sm">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Amount Selection */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Select Amount (KES)</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount('')
                        }}
                        className={`p-3 border rounded-lg font-medium transition-all duration-200 ${
                          selectedAmount === amount
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        KES {parseInt(amount).toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter custom amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount('')
                        }}
                        placeholder="Enter amount in KES"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h3>
                <div className="space-y-6">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="bg-primary-100 p-3 rounded-full">
                          <method.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{method.name}</h4>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <p className="text-xs text-gray-500">{method.details}</p>
                        </div>
                      </div>
                      <button className="w-full btn-primary">
                        Give via {method.name}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Security Note */}
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <Heart className="h-4 w-4 text-green-600" />
                    </div>
                    <h4 className="text-sm font-semibold text-green-800">Secure Giving</h4>
                  </div>
                  <p className="text-xs text-green-700">
                    All transactions are processed securely. Your financial information is protected with bank-level encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Give */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why We Give</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your faithful giving enables JCC Mombasa to fulfill its mission and serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Church Operations</h3>
              <p className="text-gray-600 text-sm">
                Supporting daily operations, utilities, maintenance, and staff salaries
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Outreach</h3>
              <p className="text-gray-600 text-sm">
                Feeding programs, medical camps, and assistance for those in need
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Facility Expansion</h3>
              <p className="text-gray-600 text-sm">
                Building projects to accommodate our growing congregation
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Missions</h3>
              <p className="text-gray-600 text-sm">
                Supporting missionaries and church planting efforts worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-Person Giving</h3>
              <p className="text-gray-600 mb-4">
                Give during our Sunday services or visit our church office during office hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planned Giving</h3>
              <p className="text-gray-600 mb-4">
                Consider including JCC Mombasa in your will or estate planning. Contact us for more information.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time & Talents</h3>
              <p className="text-gray-600 mb-4">
                Volunteer your time and skills to support various ministries and church activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Giving?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our finance team is here to help you with any questions about giving or to set up recurring donations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Finance Team
            </a>
            <a href="mailto:finance@jccmombasa.org" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Give