const routes = [
  { 
    href: '/', 
    name: 'Home' 
  },
  {
    href: '/clubs',
    name: 'EconClubs',
    dropRoutes: [
      { 
        href: '/students', 
        name: 'Overview',
      },
      {
        href: '/current-clubs',
        name: 'Current Clubs',
      },
      {
        href: '/register',
        name: 'Register',
      },
    ],
  },
  {
    href: '/people',
    name: 'People',
    dropRoutes: [
      { href: '/team', name: 'Team' },
      {
        href: '/advisory-board',
        name: 'Advisory Board',
      },
      { href: '/apply', name: 'Join our Team' },
    ],
  },
  {
    href: '/events',
    name: 'Events',
    dropRoutes: [
      { href: '/', name: 'Overview' },
      { href: '/econbowl', name: 'EconBowl' },
      { href: '/econolympiad', name: 'EconOlympiad' },
      { href: '/econtalks', name: 'EconTalks' },
      { href: '/econbowl-prep', name: 'EconBowl Prep' },
    ],
  },
  {
    href: '/flip',
    name: 'FLIP',
  },
  { 
    href: '/resources', 
    name: 'Resources' 
  },
  {
    href: 'https://learn.theyei.org',
    name: 'Learn',
  },
]

export default routes
