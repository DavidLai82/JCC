import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { User, Shield } from 'lucide-react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to view this page.</p>
          <Link to="/login" className="btn-primary">Sign In</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-6 py-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h1 className="text-2xl font-bold text-white">Your Profile</h1>
                  <p className="text-blue-100 mt-1">Manage your account information</p>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <User className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="text-gray-900">{user?.name || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="text-gray-900">{user?.email || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-5 w-5 text-primary-600 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="text-gray-900">Joined recently</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Account Type</p>
                      <p className="text-gray-900 capitalize">{user?.role || 'member'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="btn-secondary">
                    Edit Profile
                  </button>
                  <button className="btn-secondary">
                    Change Password
                  </button>
                  <button className="btn-secondary">
                    Notification Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile