import {
  Leader,
  Ministry,
  Event,
  Service,
  Testimonial,
  Announcement,
  SermonSeries,
  SchoolInfo,
  BranchInfo
} from '../types'

// Church Leadership
export const leaders: Leader[] = [
  {
    id: '1',
    name: 'Rev. Dr. John Mwangi',
    title: 'Senior Pastor',
    role: 'senior_pastor',
    image: '/images/leaders/senior-pastor.jpg',
    bio: 'Rev. Dr. John Mwangi has been serving as Senior Pastor of Jesus Celebration Centre Mombasa for over 20 years. He holds a Doctorate in Theology and has been instrumental in the church\'s growth and expansion across three continents.',
    email: 'pastor@jccmombasa.org',
    phone: '+254 700 000 001'
  },
  {
    id: '2',
    name: 'Pastor Grace Mwangi',
    title: 'Associate Pastor',
    role: 'associate_pastor',
    image: '/images/leaders/associate-pastor.jpg',
    bio: 'Pastor Grace Mwangi serves as Associate Pastor and leads the Ladies Ministry. She is passionate about empowering women and has been in ministry for over 15 years.',
    email: 'grace@jccmombasa.org'
  },
  {
    id: '3',
    name: 'Elder Samuel Kariuki',
    title: 'Church Elder',
    role: 'elder',
    image: '/images/leaders/elder1.jpg',
    bio: 'Elder Samuel Kariuki has been with JCC Mombasa since its inception. He oversees the Men\'s Ministry and serves on the church board.',
    email: 'samuel@jccmombasa.org'
  }
]

// Ministries
export const ministries: Ministry[] = [
  {
    id: '1',
    name: 'Men\'s Ministry',
    description: 'Empowering men to be godly leaders in their families and communities.',
    leader: 'Elder Samuel Kariuki',
    image: '/images/ministries/mens.jpg',
    meetings: [
      {
        day: 'Saturday',
        time: '7:00 AM',
        location: 'Main Sanctuary'
      }
    ],
    activities: ['Prayer breakfast', 'Leadership training', 'Community outreach', 'Sports fellowship'],
    contactEmail: 'mens@jccmombasa.org'
  },
  {
    id: '2',
    name: 'Ladies Ministry',
    description: 'Building strong women of faith who impact their families and society.',
    leader: 'Pastor Grace Mwangi',
    image: '/images/ministries/ladies.jpg',
    meetings: [
      {
        day: 'Thursday',
        time: '10:00 AM',
        location: 'Fellowship Hall'
      }
    ],
    activities: ['Bible study', 'Craft workshops', 'Mentorship programs', 'Community service'],
    contactEmail: 'ladies@jccmombasa.org'
  },
  {
    id: '3',
    name: 'Youth Ministry',
    description: 'Raising the next generation of passionate followers of Christ.',
    leader: 'Pastor David Njoroge',
    image: '/images/ministries/youth.jpg',
    meetings: [
      {
        day: 'Friday',
        time: '6:00 PM',
        location: 'Youth Center'
      }
    ],
    activities: ['Youth services', 'Campus ministry', 'Sports activities', 'Music ministry'],
    contactEmail: 'youth@jccmombasa.org'
  },
  {
    id: '4',
    name: 'Children\'s Ministry',
    description: 'Teaching children about God\'s love in fun and engaging ways.',
    leader: 'Teacher Mary Wanjiku',
    image: '/images/ministries/children.jpg',
    meetings: [
      {
        day: 'Sunday',
        time: '9:00 AM',
        location: 'Children\'s Center'
      }
    ],
    activities: ['Sunday school', 'Vacation Bible school', 'Children\'s choir', 'Family events'],
    contactEmail: 'children@jccmombasa.org'
  }
]

// Services
export const services: Service[] = [
  {
    id: '1',
    name: 'Sunday Morning Service',
    day: 'Sunday',
    time: '9:00 AM - 12:00 PM',
    location: 'Main Sanctuary',
    description: 'Our main worship service featuring praise, worship, and biblical teaching.',
    isRegular: true
  },
  {
    id: '2',
    name: 'Wednesday Bible Study',
    day: 'Wednesday',
    time: '6:00 PM - 8:00 PM',
    location: 'Fellowship Hall',
    description: 'Mid-week bible study for spiritual growth and fellowship.',
    isRegular: true
  },
  {
    id: '3',
    name: 'Friday Prayer Meeting',
    day: 'Friday',
    time: '6:00 PM - 8:00 PM',
    location: 'Prayer Room',
    description: 'Corporate prayer meeting for intercession and personal prayer.',
    isRegular: true
  }
]

// Events
export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Conference 2024',
    description: 'Join us for our annual conference featuring renowned speakers and powerful worship.',
    date: '2024-09-15',
    endDate: '2024-09-17',
    time: '9:00 AM',
    location: 'Main Campus',
    image: '/images/events/conference2024.jpg',
    category: 'conference',
    registrationRequired: true,
    registrationLink: '/events/annual-conference-2024',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Youth Camp 2024',
    description: 'Three days of fun, fellowship, and spiritual growth for our young people.',
    date: '2024-08-30',
    endDate: '2024-09-01',
    time: '8:00 AM',
    location: 'Diani Beach Resort',
    image: '/images/events/youth-camp.jpg',
    category: 'youth',
    registrationRequired: true,
    registrationLink: '/events/youth-camp-2024',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Community Outreach',
    description: 'Join us as we serve our local community with love and compassion.',
    date: '2024-09-07',
    time: '8:00 AM',
    location: 'Likoni Community Center',
    image: '/images/events/outreach.jpg',
    category: 'outreach',
    registrationRequired: false,
    isFeatured: false
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Wanjiru',
    content: 'God has been so faithful to my family. Through the prayers and support of JCC Mombasa, I received my healing and my business has prospered.',
    image: '/images/testimonials/sarah.jpg',
    date: '2024-08-15',
    category: 'healing',
    isApproved: true
  },
  {
    id: '2',
    name: 'James Mutua',
    content: 'I gave my life to Christ at JCC Mombasa and my life has never been the same. The church family has been incredibly supportive.',
    date: '2024-08-10',
    category: 'salvation',
    isApproved: true
  },
  {
    id: '3',
    name: 'Mary Akinyi',
    content: 'The Youth Ministry at JCC has helped me grow in my faith and find my purpose. I am now serving in the worship team.',
    date: '2024-08-05',
    category: 'breakthrough',
    isApproved: true
  }
]

// Announcements
export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'New Member Orientation',
    content: 'All new members are invited to attend our orientation class this Sunday after service.',
    date: '2024-08-25',
    expiryDate: '2024-09-01',
    priority: 'medium',
    category: 'general',
    isActive: true
  },
  {
    id: '2',
    title: 'Building Fund Drive',
    content: 'Join us in our building fund drive as we expand our facilities to accommodate our growing congregation.',
    date: '2024-08-20',
    priority: 'high',
    category: 'urgent',
    isActive: true
  }
]

// Sermon Series
export const sermonSeries: SermonSeries[] = [
  {
    id: '1',
    title: 'Walking in Faith',
    description: 'A powerful series about living by faith and trusting God in all circumstances.',
    image: '/images/series/walking-in-faith.jpg',
    startDate: '2024-08-01',
    endDate: '2024-08-31',
    isActive: true,
    sermons: [
      {
        id: '1',
        title: 'What is Faith?',
        preacher: 'Rev. Dr. John Mwangi',
        date: '2024-08-04',
        duration: '45:30',
        description: 'Understanding the biblical definition of faith and its importance in our lives.',
        audioUrl: '/sermons/audio/what-is-faith.mp3',
        videoUrl: '/sermons/video/what-is-faith.mp4',
        scriptureReferences: ['Hebrews 11:1', 'Romans 10:17'],
        tags: ['faith', 'basics', 'foundation'],
        seriesId: '1'
      }
    ]
  }
]

// School Information
export const schoolInfo: SchoolInfo[] = [
  {
    id: '1',
    name: 'JCC Education Complex',
    level: 'primary',
    description: 'Providing quality Christian education since 1994, nurturing young minds with academic excellence and godly character.',
    established: '1994',
    principal: 'Mrs. Elizabeth Kamau',
    contactEmail: 'school@jccmombasa.org',
    contactPhone: '+254 700 000 100',
    facilities: [
      'Modern classrooms',
      'Science laboratory',
      'Computer lab',
      'Library',
      'Sports fields',
      'Cafeteria',
      'Chapel'
    ],
    programs: [
      'Academic curriculum (8-4-4 system)',
      'Christian Religious Education',
      'Music and Arts',
      'Sports and Physical Education',
      'Character development programs'
    ],
    achievements: [
      'Consistently high KCPE performance',
      'Regional music competition winners',
      'Outstanding sports achievements',
      'Character excellence awards'
    ]
  }
]

// Branch Information
export const branches: Record<string, BranchInfo> = {
  mombasa: {
    name: 'JCC Mombasa (Main Campus)',
    address: 'Mombasa Road, Mombasa, Kenya',
    phone: '+254 700 000 000',
    email: 'info@jccmombasa.org',
    pastor: 'Rev. Dr. John Mwangi',
    services: services
  },
  uk: {
    name: 'JCC United Kingdom',
    address: 'London, United Kingdom',
    phone: '+44 20 0000 0000',
    email: 'uk@jccmombasa.org',
    pastor: 'Pastor Michael Johnson',
    services: [
      {
        id: 'uk1',
        name: 'Sunday Service',
        day: 'Sunday',
        time: '11:00 AM - 1:00 PM',
        location: 'Community Center',
        description: 'Weekly worship service for the UK congregation.',
        isRegular: true
      }
    ]
  },
  usa: {
    name: 'JCC United States',
    address: 'Dallas, Texas, USA',
    phone: '+1 214 000 0000',
    email: 'usa@jccmombasa.org',
    pastor: 'Pastor Robert Williams',
    services: [
      {
        id: 'usa1',
        name: 'Sunday Service',
        day: 'Sunday',
        time: '10:00 AM - 12:00 PM',
        location: 'Fellowship Hall',
        description: 'Weekly worship service for the US congregation.',
        isRegular: true
      }
    ]
  }
}

// Church Statistics
export const churchStats = {
  established: '1985',
  members: '5000+',
  branches: 3,
  countries: 3,
  ministries: 12,
  schoolStudents: '800+',
  pastors: 8
}

// Contact Information
export const contactInfo = {
  main: {
    address: 'Mombasa Road, Mombasa, Kenya, East Africa',
    phone: '+254 700 000 000',
    email: 'info@jccmombasa.org',
    website: 'https://jccmombasa.org'
  },
  social: {
    facebook: 'https://facebook.com/jccmombasa',
    instagram: 'https://instagram.com/jccmombasa',
    youtube: 'https://youtube.com/jccmombasa',
    twitter: 'https://twitter.com/jccmombasa'
  }
}