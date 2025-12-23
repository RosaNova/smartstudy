'use client'

import { useState } from 'react'
import { User, Lock, LogOut, CheckCircle, Trash2, Save } from 'lucide-react'

export default function PersonalInfoForm() {
  const [activeTab, setActiveTab] = useState('personal')
  const [formData, setFormData] = useState({
    firstName: 'Roland',
    lastName: 'Donald',
    email: 'rolandDonald@gmail.com',
    gender: 'male',
    address: '3605 Parker Rd.',
    phone: '(405) 555-0128',
    dateOfBirth: '1 Feb, 1995',
    location: 'Atlanta, USA',
    postalCode: '30301',
  })

  const [isModified, setIsModified] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setIsModified(true)
  }

  const handleGenderChange = (gender: string) => {
    setFormData(prev => ({
      ...prev,
      gender,
    }))
    setIsModified(true)
  }

  const handleSave = () => {
    console.log('Saving changes:', formData)
    setIsModified(false)
  }

  const handleDiscard = () => {
    setFormData({
      firstName: 'Roland',
      lastName: 'Donald',
      email: 'rolandDonald@gmail.com',
      gender: 'male',
      address: '3605 Parker Rd.',
      phone: '(405) 555-0128',
      dateOfBirth: '1 Feb, 1995',
      location: 'Atlanta, USA',
      postalCode: '30301',
    })
    setIsModified(false)
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-72 bg-orange border-r border-gray-200 p-6 flex flex-col">
        {/* Profile Section */}
        <div className="text-center mb-8">
          {/* Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img
              src="https://i.pinimg.com/736x/56/38/79/563879709048f6a4b623c023238299c6.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-top object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white text-orange rounded-full p-2 shadow-lg">
              <CheckCircle size={16} />
            </div>
          </div>
          <h2 className="text-lg font-bold text-white">Roland Donald</h2>
          <p className="text-sm text-white/80">Software Engineer</p>
        </div>

        {/* Navigation Tabs */}
        <nav className="space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('personal')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'personal'
                ? 'bg-white text-orange-600'
                : 'text-white '
            }`}
          >
            <User size={18} />
            Personal Information
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'password'
                ? 'bg-white text-orange-600'
                : 'text-white '
            }`}
          >
            <Lock size={18} />
            Login & Password
          </button>
        </nav>

        {/* Logout Button */}
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-red-700 font-medium transition-colors">
          <LogOut size={18} />
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-7xl font-poppins font-bold text-orange mb-8">Personal Information</h1>

          {/* Gender Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">Gender</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={(e) => handleGenderChange(e.target.value)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={(e) => handleGenderChange(e.target.value)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <div className="flex items-center gap-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                <CheckCircle size={16} />
                Verified
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-600 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone and Date of Birth */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Date of Birth</label>
              <div className="relative">
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Location and Postal Code */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>Atlanta, USA</option>
                <option>New York, USA</option>
                <option>Los Angeles, USA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleDiscard}
              className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Discard Changes
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
