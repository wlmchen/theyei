type Member = {
  name: string,
  positions: string[],
  linkedin?: string,
  github?: string,
  email?: string
}


const departments: string[] = ["HR", "Tech", "Finance", "Marketing", "Resources", "Events", "Clubs", "Expansion", "FLIP"];

const exec: Member[] = [ 
  {
    name: 'Jessica Cheng',
    positions: ['CEO', 'Co-Chairman'],
    linkedin: 'https://www.linkedin.com/in/jjessicacheng/',
  },
  {
    name: 'Anishka Banerjee',
    positions: ['COO', 'Co-Chairman'],
    linkedin: 'https://www.linkedin.com/in/anishka-banerjee-657775171/',
  },
  {
    name: 'Saavi Kumar',
    positions: ['Chief of Staff'],
    linkedin: 'https://www.linkedin.com/in/saavi-kumar-59ba43195',
  },
  {
    name: 'Brayden Wright',
    positions: ['Director of Tech'],
    linkedin: 'https://www.linkedin.com/in/braydentw/',
    // github: 'https://github.com/BraydenTW',
  },
  {
    name: 'Satvik Shreesha',
    positions: ['VP of Marketing / Multimedia'],
    linkedin: 'https://www.linkedin.com/in/satvik-shreesha-b3815a207/',
  },
  {
    name: 'Frank Xiao',
    positions: ['VP of Resources'],
    linkedin: 'https://www.linkedin.com/in/frank-xiao-6a746520b/',
  },
  {
    name: 'Ryan Feng',
    positions: ['VP of Finance'],
    linkedin: 'https://www.linkedin.com/in/ryan-feng-849980207',
  },
  {
    name: 'Anita Vasserman',
    positions: ['VP of Events'],
    linkedin: 'https://www.linkedin.com/in/anita-v-2733b5220',
  },
  {
    name: 'Kavin Shah',
    positions: ['VP of Clubs'],
    linkedin: 'https://www.linkedin.com/in/kavinshah-student/',
  },
  {
    name: 'Lavanya Gupta',
    positions: ['VP of Flip'],
    linkedin: 'https://www.linkedin.com/in/lavanya-gupta-b09778247'
  },
  {
    name: 'Miriam Trujillo',
    positions: ['Director of Expansion'],
    linkedin: 'https://www.linkedin.com/in/miriam-trujillo-5b6a69204/',
  },
]

const team: Member[] = [
  // --------------------------
  // NEED INFO FOR HR TEAM
  // --------------------------
  {
    name: 'Ananth Kashyap',
    positions: ['Web Developer'],
    linkedin: 'https://www.linkedin.com/in/ananth-kashyap-88b996209/',
    github: 'https://github.com/AAkashyap1',
  },
  {
    name: 'Caroline Wang',
    positions: ['Social Media Manager', 'Graphic Designer'],
    linkedin: 'https://www.linkedin.com/in/caroline--wang/',
  },
  {
    name: 'Srithanya Satish',
    positions: ['Blog Writer'],
    linkedin: 'https://www.linkedin.com/in/srithanya-s-4494841bb',
  },
  {
   name: 'Sruti Elangovan',
   positions: ['Video Editor', 'Graphic Designer'],
   linkedin: 'https://www.linkedin.com/in/sruti-elangovan-51166a202/',
  },
  {
    name: 'Snehil Kakani',
    positions: ['Graphic Designer'],
    linkedin: 'https://www.linkedin.com/in/snehilkakani',
  },
  {
    name: 'Amy Zhou',
    positions: ['Marketing Specialist'],
    linkedin: 'http://linkedin.com/in/amy-zhou-933536181/',
  },
  {
    name: 'Shreya Jangada',
    positions: ['Marketing Specialist', 'Regional Ambassador'],
    linkedin: 'https://www.linkedin.com/in/shreya-jangada-910651230',
  },
  {
    name: 'Simrat Oberoi',
    positions: ['Marketing Specialist'],
    linkedin: 'http://linkedin.com/in/simrat-oberoi-806939241',
  },
  {
    name: 'Saketh Maramraj',
    positions: ['Marketing Specialist'],
    linkedin: 'https://www.linkedin.com/in/sakethram-maramraj-a72b79247/',
  },
  {
    name: 'Aditya Karala',
    positions: ['Google Ads Manager'],
    linkedin: 'https://www.linkedin.com/in/aditya-kakarla-9729bb218/',
  },
  // {
  //   name: 'Saachi Kumar',
  //   positions: ['Curriculum Developer'],
  //   linkedin: 'https://www.linkedin.com/in/saachi-kumar/',
  // },
  // {
  //   name: 'Francis Chua',
  //   positions: ['Senior Curriculum Developer'],
  //   linkedin: 'https://www.linkedin.com/in/francis-chua-29b68a1b6/',
  // },
  // {
  //   name: 'Sanjit Pingili',
  //   positions: ['Curriculum Developer', 'Quality Control'],
  //   linkedin: 'http://linkedin.com/in/sanjit-pingili-14b04a1aa/',
  // },
  // {
  //   name: 'Ethan Lin',
  //   positions: ['Testing Developer', 'Curriculum Developer'],
  //   linkedin: 'https://www.linkedin.com/in/ethan-lin-a93ab7172/',
  // },
  // {
  //   name: 'Helena Su',
  //   positions: ['Testing Developer', 'Curriculum Developer'],
  //   linkedin: 'https://www.linkedin.com/in/helena-su-063965193',
  // },
  {
    name: 'Dario Soatto',
    positions: ['Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/helena-su-063965193',
  },
  // {
  //   name: 'Siddharth Mehta',
  //   positions: ['Testing Developer'],
  //   linkedin: 'https://www.linkedin.com/in/siddharth-mehta-935b4a1aa/',
  // },
  {
    name: 'Cameron Dolbow',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/cameron-dolbow/',
  },
  {
    name: 'Allen Ho',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/allen-h/',
    email: 'allenho@theyei.org'
  },
  // {
  //   name: 'Saad Umar',
  //   positions: ['IB Curriculum Coordinator'],
  //   linkedin: 'https://www.linkedin.com/in/saad-umar-78b5201a7/ ',
  // },
  // {
  //   name: 'Vipra Bindal',
  //   positions: ['FLIP Curriculum Manager'],
  //   linkedin: 'https://www.linkedin.com/in/vipra-bindal-6849a2204/ ',
  // },
  // {
  //   name: 'Tanish Chheda',
  //   positions: ['IB Curriculum Developer'],
  //   linkedin: 'https://www.linkedin.com/in/tanish-chheda/',
  // },
  {
    name: 'Jack Gordon',
    positions: ['Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/vipra-bindal-6849a2204/ ',
  },
  // {
  //   name: 'Fiona Lu',
  //   positions: ['Testing Developer', 'Event Coordinator'],
  //   linkedin: 'https://www.linkedin.com/in/fiona-lu-5a12201a8',
  // },
  {
    name: 'Aidan Zhou',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/aidan-zhou-828282225/',
  },
  {
    name: 'William Shelton',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/william-shelton-533524241/',
  },
  // {
  //   name: 'Alysa Xu',
  //   positions: ['Event Coordinator'],
  //   linkedin: 'https://www.linkedin.com/in/alysa-xu-06bba21aa/',
  // },
  // {
  //   name: 'Deeya Jain',
  //   positions: ['Event Coordinator'],
  //   linkedin: 'https://www.linkedin.com/in/deeya-jain/',
  // },
  // {
  //   name: 'Srushti Patil',
  //   positions: ['Event Coordinator'],
  //   linkedin: 'https://www.linkedin.com/in/srushti-patil/',
  // },
  {
    name: 'Sambhav Mehta',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/sambhav-mehta-862998233/',
  },
  {
    name: 'Audrey Sun',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/audrey-sun-a14545129/',
  },
  {
    name: 'Evangeline Lin',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/evangeline-lin-6b1bab224/',
  },
  {
    name: 'Lisa Oshiba',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/lisa-oshiba-12994a218',
  },
  {
    name: 'Sambhav Mehta',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/sambhav-mehta-862998233/',
  },
  {
    name: 'Andrei Hui',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/andrei-hui/',
  },
  {
    name: 'Isabell Kossar',
    positions: ['Accounting Manager', 'Club Associate'],
    linkedin: 'https://www.linkedin.com/in/isabell-kossar-09884b212',
  },
  {
    name: 'Ranbir Jain',
    positions: ['Club Associate'],
    linkedin: 'https://www.linkedin.com/in/ranbir-jain-549aa016b/',
  },
  {
    name: 'Yelim Lee',
    positions: ['Club Associate'],
    linkedin: 'https://www.linkedin.com/in/yelim-lee-354894239/',
  },
  // {
  //   name: 'Andrew Zhou',
  //   positions: ['Sponsorship and Grant Coordinator'],
  //   linkedin: 'https://www.linkedin.com/in/andrew-zhou-7b34b7207/',
  // },
  // {
  //   name: 'Mounica Policharla',
  //   positions: ['Regional Ambassador', 'Regional Director'],
  //   linkedin: 'https://www.linkedin.com/in/mounica-policharla-3308ab1ab/',
  // },
  // {
  //   name: 'Karissa Ning',
  //   positions: ['Regional Director'],
  //   linkedin: 'https://www.linkedin.com/in/karissa-ning-b743ab1bb/',
  // },
  // {
  //   name: 'Sneha Patibandla',
  //   positions: ['Regional Ambassador'],
  //   linkedin: 'https://www.linkedin.com/in/sneha-patibandla-1529731b1/',
  // },
  {
    name: 'Emma Awoseyi',
    positions: ['Sponsorship and Grant Coordinator', 'Regional Ambassador'],
    linkedin: 'https://www.linkedin.com/in/emma-awoseyi',
  },
  // {
  //   name: 'Maanya Singh',
  //   positions: ['Regional Ambassador'],
  //   linkedin: 'https://www.linkedin.com/in/maanya-singh-220b9a22b',
  // },
  {
    name: 'Pratyaksha Sharma',
    positions: ['Regional Ambassador'],
    linkedin: 'https://www.linkedin.com/in/pratyaksha-sharma-30a60a23b',
  },
  {
    name: 'Kirtee Ayitha',
    positions: ['Team Ambassador'],
    linkedin: 'https://www.linkedin.com/in/kirtee-ayitha-84a57022a/',
  },
  {
    name: 'Suden Prashar',
    positions: ['Team Ambassador'],
    linkedin: 'https://www.linkedin.com/in/suden-prashar-a1b7a7242/',
  },
  {
    name: 'Vaishu Enduri',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/vaishu-enduri',
  },
  // {
  //   name: 'Vanessa Lin',
  //   positions: ['FLIP Partnership Manager', 'Expansion Associate'],
  //   linkedin: 'https://www.linkedin.com/in/vanessa-lin-20105/ ',
  // },
  {
    name: 'Ting Zhang',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/jiashen-zhang-1496a8207'
  },
  {
    name: 'Amaya Mahajan',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/amaya-mahajan-15229422a'
  },
  {
    name: 'Kabir Mishra',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/kabir-mishra-43a588228/'
  },
  // {
  //   name: 'Ishan Deshpande',
  //   positions: ['FLIP Partnership Manager'],
  //   linkedin: 'https://www.linkedin.com/in/ishan-deshpande-1907621b3/'
  // }
]

export {departments, team, exec}
