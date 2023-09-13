type Member = {
  name: string
  positions: string[]
  linkedin?: string
  github?: string
  email?: string
}

const exec: Member[] = [
  {
    name: 'Anita Vasserman',
    positions: ['CEO'],
    linkedin: 'anita-v-2733b5220',
  },
  {
    name: 'Chinmayi Chittamuri',
    positions: ['COO'],
    linkedin: 'chinmayi-chittamuri-521881229',
  },
  {
    name: 'Suden Prashar',
    positions: ['Chief of Staff'],
    linkedin: 'suden-prashar-a1b7a7242',
  },
  {
    name: 'William Chen',
    positions: ['Director of Tech'],
    linkedin: 'william-chen-506145249',
    github: 'wlmchen',
    email: 'williamchen@theyei.org',
  },
  {
    name: 'Saketh Maramraj',
    positions: ['VP of Marketing / Multimedia'],
    linkedin: 'sakethram-maramraj-a72b79247',
  },
  {
    name: 'Jack Gordon',
    positions: ['VP of Resources'],
    linkedin: 'jack-gordon-085223210',
  },
  {
    name: 'Ryan Feng',
    positions: ['VP of Finance'],
    linkedin: 'ryan-feng-849980207',
  },
  {
    name: 'Audrey Sun',
    positions: ['VP of Events'],
    linkedin: 'audrey-sun-a14545129',
  },
  {
    name: 'Maria Bueno',
    positions: ['VP of Clubs'],
    linkedin: '',
  },
  {
    name: 'Saqib Saiyed',
    positions: ['VP of Flip'],
    linkedin: 'saqib-saiyed-5898a0228',
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
    name: "Jeffrey Liu",
    positions: ['Video Editor'],
    linkedin: 'jeffery-liu-aba437278'
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
    name: 'Yamini Venkatesan',
    positions: ['Marketing Specialist'],
    linkedin: 'yamini-venkatesan-48833422a',
  },
  {
    name: 'Alvina Lin',
    positions: ['Marketing Specialist'],
    linkedin: 'alvina-lin-75b5141b2',
  },
  {
    name: 'Tanush Bhatnagar',
    positions: ['Marketing Specialist'],
    linkedin: 'tanush-bhatnagar-49a673273',
  },
  {
    name: 'Thananant Sibunruang',
    positions: ['Marketing Specialist'],
    linkedin: 'thananant-sibunruang-28080727a',
  },
  {
    name: 'Nikhil Tadepalli',
    positions: ['Marketing Specialist'],
    linkedin: 'nikhil-tadepalli-b9998a235',
  },
  {
    name: 'Santoshi Voma',
    positions: ['Marketing Specialist'],
  },
  {
    name: 'Anant Verma',
    positions: ['Marketing Specialist'],
    linkedin: 'anant-verma-28950a260'
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
    name: 'Auritro Chakraborty',
    positions: ['Curriculum Developer'],
    linkedin: 'auritro-chakraborty-01a4bb245',
  },
  {
    name: 'Dhruv Nagarajan',
    positions: ['Curriculum Developer'],
    linkedin: 'dhruv-nagarajan',
  },
  {
    name: 'Wilson Tao',
    positions: ['Curriculum Developer'],
    linkedin: 'wilson-tao-968270242',
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
    email: 'allenho@theyei.org',
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
    name: 'Lisa Oshiba',
    positions: ['Event Coordinator'],
    linkedin: 'lisa-oshiba-12994a218',
  },
  {
    name: 'Cindy Zhu',
    positions: ['Event Coordinator'],
    linkedin: 'cindyyzhu',
  },
  {
    name: 'Stephanie Wan',
    positions: ['Event Coordinator'],
    linkedin: 'stephanie-wan-b7452a23a',
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
    name: 'Samuel Chen',
    positions: ['Sponsorship and Grant Coordinator'],
  },
  {
    name: "Jonathan De Caro",
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'jonathandecaro'
  },
  {
    name: 'Pratyaksha Sharma',
    positions: ['Regional Ambassador'],
    linkedin: 'pratyaksha-sharma-30a60a23b',
  },
  {
    name: 'Sean Young',
    positions: ['Regional Ambassador'],
    linkedin: 'sean-young-4504531a2',
  },
  {
    name: 'Samay Sikri',
    positions: ['Regional Ambassador'],
    linkedin: 'samaysikri',
  },
  {
    name: 'Tarun Bhuyan',
    positions: ['Regional Ambassador'],
    linkedin: 'tarunbhuyan',
  },
  {
    name: 'Ayush Sharma',
    positions: ['Regional Ambassador'],
  },
  {
    name: 'Rohith Chadalawada',
    positions: ['Team Ambassador'],
  },
  {
    name: 'Anish Madireddy',
    positions: ['Team Ambassador'],
    linkedin: 'anish-madireddy-205874244',
  },
  {
    name: "Effie Lin",
    positions: ["Team Abassador"],
    linkedin: 'effie-lin-572a78282'
  },
  {
    name: 'Lavanya Gupta',
    positions: ['Director of Flip'],
    linkedin: 'lavanya-gupta-b09778247',
  },
]

export { team, exec }
