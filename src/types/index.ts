// Common types used throughout the JCC Mombasa application

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'member' | 'visitor'
  avatar?: string
  phone?: string
  dateJoined: string
}

export interface Leader {
  id: string
  name: string
  title: string
  role: 'senior_pastor' | 'associate_pastor' | 'elder' | 'deacon' | 'ministry_leader'
  image?: string
  bio: string
  email?: string
  phone?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface Ministry {
  id: string
  name: string
  description: string
  leader: string
  image?: string
  meetings: {
    day: string
    time: string
    location: string
  }[]
  activities: string[]
  contactEmail?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  time: string
  location: string
  image?: string
  category: 'service' | 'conference' | 'outreach' | 'youth' | 'children' | 'special'
  registrationRequired: boolean
  registrationLink?: string
  isFeatured: boolean
}

export interface Service {
  id: string
  name: string
  day: string
  time: string
  location: string
  description: string
  isRegular: boolean
}

export interface Testimonial {
  id: string
  name: string
  content: string
  image?: string
  date: string
  category: 'healing' | 'salvation' | 'breakthrough' | 'blessing' | 'other'
  isApproved: boolean
}

export interface GalleryImage {
  id: string
  url: string
  caption: string
  category: 'service' | 'event' | 'ministry' | 'facility' | 'community'
  date: string
  isPublic: boolean
}

export interface Announcement {
  id: string
  title: string
  content: string
  date: string
  expiryDate?: string
  priority: 'low' | 'medium' | 'high'
  category: 'general' | 'service' | 'event' | 'ministry' | 'urgent'
  isActive: boolean
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'prayer_request' | 'join_ministry' | 'feedback'
}

export interface PrayerRequest {
  id: string
  name: string
  email?: string
  phone?: string
  request: string
  category: 'healing' | 'family' | 'finances' | 'guidance' | 'salvation' | 'other'
  isUrgent: boolean
  isPrivate: boolean
  date: string
  status: 'pending' | 'praying' | 'answered'
}

export interface SermonSeries {
  id: string
  title: string
  description: string
  image?: string
  startDate: string
  endDate?: string
  isActive: boolean
  sermons: Sermon[]
}

export interface Sermon {
  id: string
  title: string
  preacher: string
  date: string
  duration: string
  description: string
  audioUrl?: string
  videoUrl?: string
  scriptureReferences: string[]
  tags: string[]
  seriesId?: string
}

export interface SchoolInfo {
  id: string
  name: string
  level: 'nursery' | 'primary' | 'secondary'
  description: string
  established: string
  principal: string
  contactEmail: string
  contactPhone: string
  facilities: string[]
  programs: string[]
  achievements: string[]
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

// API Response types
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  status: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export type ContactFormData = ContactForm
export type PrayerRequestFormData = Omit<PrayerRequest, 'id' | 'date' | 'status'>
export type TestimonialFormData = Omit<Testimonial, 'id' | 'date' | 'isApproved'>

// Church branches
export type ChurchBranch = 'mombasa' | 'uk' | 'usa'

export interface BranchInfo {
  name: string
  address: string
  phone: string
  email: string
  pastor: string
  services: Service[]
}