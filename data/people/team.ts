type Member = {
  name: string,
  positions: string[],
  linkedin: string,
  github?: string
}

const team: Member[] = [
  {
    name: 'Ian Chen',
    positions: ['Co-founder', 'CEO', 'Co-Chairman'],
    linkedin: 'https://www.linkedin.com/in/iandchen/',
  },
  {
    name: 'Anishka Banerjee',
    positions: ['Executive Board Member', 'VP of Finance'],
    linkedin: 'https://www.linkedin.com/in/anishka-banerjee-657775171/',
  },
  {
    name: 'Aryan Shah',
    positions: ['Executive Board Member', 'VP of Marketing'],
    linkedin: 'https://www.linkedin.com/in/aryan-shah1',
  },
  {
    name: 'Albert Ye',
    positions: ['Executive Board Member', 'VP of Resources'],
    linkedin: 'https://www.linkedin.com/in/albert-ye-587aa81a2/ ',
  },
  {
    name: 'Cheryl Wu',
    positions: ['Executive Board Member', 'COO', 'Co-Chairman'],
    linkedin: 'https://www.linkedin.com/in/cheryl-wu-ba12801b1/',
  },
  {
    name: 'Kavin Shah',
    positions: ['Executive Board Member', 'VP of Clubs'],
    linkedin: 'https://www.linkedin.com/in/kavinshah-student/',
  },
  {
    name: 'Faaris Zuberi',
    positions: ['Executive Board Member', 'VP of FLIP'],
    linkedin: 'https://www.linkedin.com/in/faaris-zuberi-4207a91b0/',
  },
  {
    name: 'Jessica Cheng',
    positions: ['Executive Board Member', 'VP of Events'],
    linkedin: 'https://www.linkedin.com/in/jessica-cheng05',
  },
  {
    name: 'Sarah Zuo',
    positions: ['Executive Board Member', 'VP of Marketing', 'VP of Multimedia'],
    linkedin: 'https://www.linkedin.com/in/sarah-zuo-aa71971ba/',
  },
  {
    name: 'Miriam Trujillo',
    positions: ['Executive Board Member', 'Director of Expansion'],
    linkedin: 'https://www.linkedin.com/in/miriam-trujillo-5b6a69204/',
  },
  {
    name: 'Saavi Kumar',
    positions: ['Executive Board Member', 'Chief of Staff'],
    linkedin: 'https://www.linkedin.com/in/saavi-kumar-59ba43195',
  },
  {
    name: 'Brayden Wright',
    positions: ['Executive Board Member', 'Director of Tech'],
    linkedin: 'https://www.linkedin.com/in/braydentw/',
    github: 'https://github.com/BraydenTW',
  },
  {
    name: 'Ananth Kashyap',
    positions: ['Web Developer'],
    linkedin: 'https://www.linkedin.com/in/ananth-kashyap-88b996209/',
    github: 'https://github.com/AAkashyap1',
  },
  {
    name: 'Connor Park',
    positions: ['Podcast Editor', 'Web Developer'],
    linkedin: 'https://www.linkedin.com/in/geonu-park-0904031b8/',
    github: 'github.com/geonupark1',
  },
  {
    name: 'Sudipta Rout',
    positions: ['Team Ambassador', 'Sponsorship and Grant Coordinator'],
    linkedin: 'https://www.linkedin.com/in/sudiptar',
  },
  {
    name: 'Yiqin Huang',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'https://www.linkedin.com/in/yiqin-huang-466391202',
  },
  {
    name: 'Ryan Feng',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'https://www.linkedin.com/in/ryan-feng-849980207',
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
    name: 'Satvik Shreesha',
    positions: ['Graphic Designer'],
    linkedin: 'https://www.linkedin.com/in/satvik-shreesha-b3815a207/',
  },
  {
    name: 'Amy Zhou',
    positions: ['Marketing Specialist'],
    linkedin: 'http://linkedin.com/in/amy-zhou-933536181/',
  },
  {
    name: 'Soumil Voma',
    positions: ['Marketing Specialist', 'Regional Ambassador'],
    linkedin: 'https://www.linkedin.com/in/soumil-voma-728a871bb/',
  },
  {
    name: 'Aditya Karala',
    positions: ['Google Ads Manager'],
    linkedin: 'https://www.linkedin.com/in/aditya-kakarla-9729bb218/',
  },
  {
    name: 'Srithanya Satish',
    positions: ['Blog Writer'],
    linkedin: 'https://www.linkedin.com/in/srithanya-s-4494841bb',
  },
  {
    name: 'Caroline Wang',
    positions: ['Social Media Manager', 'Graphic Designer'],
    linkedin: 'https://www.linkedin.com/in/caroline--wang/',
  },
  {
    name: 'Saachi Kumar',
    positions: ['Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/saachi-kumar/',
  },
  {
    name: 'Sanjit Pingili',
    positions: ['Curriculum Developer', 'Quality Control'],
    linkedin: 'http://linkedin.com/in/sanjit-pingili-14b04a1aa/',
  },
  {
    name: 'Francis Chua',
    positions: ['Senior Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/francis-chua-29b68a1b6/',
  },
  {
    name: 'Ethan Lin',
    positions: ['Testing Developer', 'Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/ethan-lin-a93ab7172/',
  },
  {
    name: 'Helena Su',
    positions: ['Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/helena-su-063965193',
  },
  {
    name: 'Frank Xiao',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/frank-xiao-6a746520b/',
  },
  {
    name: 'Siddharth Mehta',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/siddharth-mehta-935b4a1aa/',
  },
  {
    name: 'Saad Umar',
    positions: ['IB Curriculum Coordinator'],
    linkedin: 'https://www.linkedin.com/in/saad-umar-78b5201a7/ ',
  },
  {
    name: 'Tanish Chheda',
    positions: ['IB Curriculum Developer'],
    linkedin: 'https://www.linkedin.com/in/tanish-chheda/',
  },
  {
    name: 'Fiona Lu',
    positions: ['Testing Developer', 'Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/fiona-lu-5a12201a8',
  },
  {
    name: 'Aidan Zhou',
    positions: ['Testing Developer'],
    linkedin: 'https://www.linkedin.com/in/aidan-zhou-828282225/',
  },
  {
    name: 'Alysa Xu',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/alysa-xu-06bba21aa/',
  },
  {
    name: 'Deeya Jain',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/deeya-jain/',
  },
  {
    name: 'Srushti Patil',
    positions: ['Event Coordinator'],
    linkedin: 'https://www.linkedin.com/in/srushti-patil/',
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
    name: 'Isabell Kossar',
    positions: ['Accounting Manager', 'Leadership Associate'],
    linkedin: 'https://www.linkedin.com/in/isabell-kossar-09884b212',
  },
  {
    name: 'Andrew Zhou',
    positions: ['Sponsorship and Grant Coordinator', 'Community Manager'],
    linkedin: 'https://www.linkedin.com/in/andrew-zhou-7b34b7207/',
  },
  {
    name: 'Mounica Policharla',
    positions: ['Regional Ambassador', 'Regional Director'],
    linkedin: 'https://www.linkedin.com/in/mounica-policharla-3308ab1ab/',
  },
  {
    name: 'Karissa Ning',
    positions: ['Regional Director'],
    linkedin: 'https://www.linkedin.com/in/karissa-ning-b743ab1bb/',
  },
  {
    name: 'Sneha Patibandla',
    positions: ['Regional Ambassador'],
    linkedin: 'https://www.linkedin.com/in/sneha-patibandla-1529731b1/',
  },
  {
    name: 'Vipra Bindal',
    positions: ['FLIP Curriculum Manager'],
    linkedin: 'https://www.linkedin.com/in/vipra-bindal-6849a2204/ ',
  },
  {
    name: 'Vaishu Enduri',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/vaishu-enduri',
  },
  {
    name: 'Vanessa Lin',
    positions: ['FLIP Partnership Manager', 'Expansion Associate'],
    linkedin: 'https://www.linkedin.com/in/vanessa-lin-20105/ ',
  },
  {
    name: 'Amaya Mahajan',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/amaya-mahajan-15229422a'
  },
  {
    name: 'Lavanya Gupta',
    positions: ['FLIP Partnership Manager'],
    linkedin: 'https://www.linkedin.com/in/lavanya-gupta-a8236122'
  }
]

export default team