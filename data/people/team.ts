type Member = {
  name: string,
  positions: string[],
  linkedin?: string,
  github?: string,
  email?: string
}

const exec: Member[] = [ 
  {
    name: 'Jessica Cheng',
    positions: ['CEO'],
    linkedin: 'jjessicacheng',
  },
  {
    name: 'Anishka Banerjee',
    positions: ['COO'],
    linkedin: 'anishka-banerjee-657775171',
  },
  {
    name: 'Saavi Kumar',
    positions: ['Chief of Staff'],
    linkedin: 'saavi-kumar-59ba43195',
  },
  {
    name: 'William Chen',
    positions: ['Director of Tech'],
    linkedin: 'william-chen-506145249',
    github: 'wlmchen',
    email: 'williamchen@theyei.org'
  },
  {
    name: 'Satvik Shreesha',
    positions: ['VP of Marketing / Multimedia'],
    linkedin: 'satvik-shreesha-b3815a207',
  },
  {
    name: 'Frank Xiao',
    positions: ['VP of Resources'],
    linkedin: 'frank-xiao-6a746520b',
  },
  {
    name: 'Ryan Feng',
    positions: ['VP of Finance'],
    linkedin: 'ryan-feng-849980207',
  },
  {
    name: 'Anita Vasserman',
    positions: ['VP of Events'],
    linkedin: 'anita-v-2733b5220',
  },
  {
    name: 'Kavin Shah',
    positions: ['VP of Clubs'],
    linkedin: 'kavinshah-student',
  },
  {
    name: 'Raymond Ma',
    positions: ['VP of Flip'],
    linkedin: 'raymondma012'
  },
  {
    name: 'Miriam Trujillo',
    positions: ['Director of Expansion'],
    linkedin: 'miriam-trujillo-5b6a69204',
  },
]

const team: Member[] = [
  {
    name: 'Ananth Kashyap',
    positions: ['Web Developer'],
    linkedin: 'ananth-kashyap-88b996209',
    github: 'AAkashyap1',
  },
  {
    name: 'Tarun Eswar',
    positions: ['Web Developer'],
    linkedin: 'tarun-eswar-b10150233',
    github: 'Tarune28',
  },
  {
    name: 'Evangeline Lin',
    positions: ['Web Developer', 'Event Coordinator'],
    linkedin: 'evangeline-lin-6b1bab224',
    github: 'belldandyy',
  },
  {
    name: 'Caroline Wang',
    positions: ['Social Media Manager', 'Graphic Designer'],
    linkedin: 'caroline--wang',
  },
  {
    name: 'Srithanya Satish',
    positions: ['Blog Writer'],
    linkedin: 'srithanya-s-4494841bb',
  },
  {
   name: 'Sruti Elangovan',
   positions: ['Video Editor', 'Graphic Designer'],
   linkedin: 'sruti-elangovan-51166a202',
  },
  {
    name: 'Snehil Kakani',
    positions: ['Graphic Designer'],
    linkedin: 'snehilkakani',
  },
  {
    name: 'Amy Zhou',
    positions: ['Marketing Specialist'],
    linkedin: 'amy-zhou-933536181',
  },
  {
    name: 'Shreya Jangada',
    positions: ['Marketing Specialist', 'Regional Ambassador'],
    linkedin: 'shreya-jangada-910651230',
  },
  {
    name: 'Simrat Oberoi',
    positions: ['Marketing Specialist'],
    linkedin: 'simrat-oberoi-806939241',
  },
  {
    name: 'Saketh Maramraj',
    positions: ['Marketing Specialist'],
    linkedin: 'sakethram-maramraj-a72b79247',
  },
  {
    name: 'Yamini Venkatesan',
    positions: ['Marketing Specialist'],
    linkedin: 'yamini-venkatesan-48833422a',
  },
  {
    name: 'Aditya Karala',
    positions: ['Google Ads Manager'],
    linkedin: 'aditya-kakarla-9729bb218',
  },
  {
    name: 'Dario Soatto',
    positions: ['Curriculum Developer'],
    linkedin: 'helena-su-063965193',
  },
  {
    name: 'Jack Gordon',
    positions: ['Curriculum Developer'],
    linkedin: 'jack-gordon-085223210',
  },
  {
    name: 'Auritro Chakraborty',
    positions: ['Curriculum Developer'],
    linkedin: 'auritro-chakraborty-01a4bb245',
  },
  {
    name: 'Cameron Dolbow',
    positions: ['Testing Developer'],
    linkedin: 'cameron-dolbow',
  },
  {
    name: 'Allen Ho',
    positions: ['Testing Developer'],
    linkedin: 'allen-h',
    email: 'allenho@theyei.org'
  },
  {
    name: 'Aidan Zhou',
    positions: ['Testing Developer'],
    linkedin: 'aidan-zhou-828282225',
  },
  {
    name: 'William Shelton',
    positions: ['Testing Developer'],
    linkedin: 'william-shelton-533524241',
  },
  {
    name: 'Audrey Sun',
    positions: ['Event Coordinator'],
    linkedin: 'audrey-sun-a14545129',
  },
  {
    name: 'Lisa Oshiba',
    positions: ['Event Coordinator'],
    linkedin: 'lisa-oshiba-12994a218',
  },
  {
    name: 'Sambhav Mehta',
    positions: ['Event Coordinator'],
    linkedin: 'sambhav-mehta-862998233',
  },
  {
    name: 'Andrei Hui',
    positions: ['Event Coordinator'],
    linkedin: 'andrei-hui',
  },
  {
    name: 'Isabell Kossar',
    positions: ['Accounting Manager', 'Club Associate'],
    linkedin: 'isabell-kossar-09884b212',
  },
  {
    name: 'Ranbir Jain',
    positions: ['Club Associate'],
    linkedin: 'ranbir-jain-549aa016b',
  },
  {
    name: 'Yelim Lee',
    positions: ['Club Associate'],
    linkedin: 'yelim-lee-354894239',
  },
  {
    name: 'Emma Awoseyi',
    positions: ['Sponsorship and Grant Coordinator', 'Regional Ambassador'],
    linkedin: 'emma-awoseyi',
  },
  {
    name: 'Pratyaksha Sharma',
    positions: ['Regional Ambassador'],
    linkedin: 'pratyaksha-sharma-30a60a23b',
  },
  {
    name: 'Kirtee Ayitha',
    positions: ['Team Ambassador'],
    linkedin: 'kirtee-ayitha-84a57022a',
  },
  {
    name: 'Suden Prashar',
    positions: ['Team Ambassador'],
    linkedin: 'suden-prashar-a1b7a7242',
  },
  {
    name: 'Sudipta Rout',
    positions: ['Team Ambassador'],
    linkedin: 'sudiptar'
  },
  {
    name: 'Lavanya Gupta',
    positions: ['Director of Flip'],
    linkedin: 'lavanya-gupta-b09778247'
  },
  {
    name: 'Vaishu Enduri',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'vaishu-enduri',
  },
  {
    name: 'Ting Zhang',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'jiashen-zhang-1496a8207'
  },
  {
    name: 'Amaya Mahajan',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'amaya-mahajan-15229422a'
  },
  {
    name: 'Kabir Mishra',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'kabir-mishra-43a588228/'
  }
]

export {team, exec}
