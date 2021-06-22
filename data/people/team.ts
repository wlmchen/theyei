const team = [
  {
    name: "Ian Chen",
    positions: ["Co-founder", "CEO", "Co-Chairman"],
    linkedin: "https://www.linkedin.com/in/iandchen/",
  },
  {
    name: "Aryan Shah",
    positions: ["Executive Board Member", "VP of Marketing"],
    linkedin: "https://www.linkedin.com/in/aryan-shah1",
  },
  {
    name: "Cheryl Wu",
    positions: ["Executive Board Member", "VP of Events"],
    linkedin: "https://www.linkedin.com/in/cheryl-wu-ba12801b1/",
  },
  {
    name: "Andy Chen",
    positions: ["Executive Board Member", "VP of Clubs"],
    linkedin: "https://www.linkedin.com/in/andy-chen-82ba6b1a9/",
  },
  {
    name: "Anishka Banerjee",
    positions: ["Executive Board Member", "VP of Finance"],
    linkedin: "https://www.linkedin.com/in/anishka-banerjee-657775171/",
  },
  {
    name: "Marcus Kuo",
    positions: ["Executive Board Member", "Chief of Staff"],
    linkedin: "https://www.linkedin.com/in/marcus-kuo-b9a4281aa/",
  },
  {
    name: "Arun Balaji",
    positions: ["Executive Board Member", "Director of Expansion"],
  },
  {
    name: "Charlotte Lau",
    positions: ["Executive Board Member", "Director of Multimedia"],
    linkedin: "https://www.linkedin.com/in/charlotte-lau-8b77421b2/",
  },
  {
    name: "Mason Wang",
    positions: ["Director of Technology"],
    linkedin: "https://www.linkedin.com/in/mason-wang/",
    github: "http://github.com/MasonWang025",
  },
  {
    name: "Albert Ye",
    positions: ["VP of Resources"],
    linkedin: "https://www.linkedin.com/in/albert-ye-587aa81a2/ ",
  },
  {
    name: "June Wang",
    positions: ["Grant Coordinator"],
    linkedin: "https://www.linkedin.com/in/june-w/",
  },
  {
    name: "Yiqin Huang",
    positions: ["Sponsorship Coordinator", "Grant Coordinator"],
    linkedin: "https://www.linkedin.com/in/yiqin-huang-466391202",
  },
  {
    name: "Ryan Feng",
    positions: ["Sponsorship Coordinator", "Grant Coordinator"],
    linkedin: "https://www.linkedin.com/in/ryan-feng-849980207",
  },
  {
    name: "Jessica Cheng",
    positions: ["Fundraising Coordinator", "Event Coordinator"],
    linkedin: "https://www.linkedin.com/in/jessica-cheng05",
  },
  {
    name: "Isabell Kossar",
    positions: ["Accounting Manager", "Leadership Associate"],
    linkedin: "https://www.linkedin.com/in/isabell-kossar-09884b212",
  },
  {
    name: "Sarah Zuo",
    positions: ["Graphic Designer"],
    linkedin: "https://www.linkedin.com/in/sarah-zuo-aa71971ba/",
  },
  {
    name: "Sruti Elangovan",
    positions: ["Video Editor", "Graphic Designer"],
    linkedin: "https://www.linkedin.com/in/sruti-elangovan-51166a202/",
  },
  {
    name: "Snehil Kakani",
    positions: ["Graphic Designer"],
    linkedin: "https://www.linkedin.com/in/snehilkakani",
  },
  {
    name: "Satvik Shreesha",
    positions: ["Graphic Designer"],
    linkedin: "https://www.linkedin.com/in/satvik-shreesha-b3815a207/",
  },
  {
    name: "Amy Zhou",
    positions: ["Marketing Specialist"],
    linkedin: "http://linkedin.com/in/amy-zhou-933536181/",
  },
  {
    name: "Benjamin Bray",
    positions: ["Marketing Specialist"],
    linkedin: "https://www.linkedin.com/in/benjamin-bray-6aa9371a3/",
  },
  {
    name: "Saachi Kumar",
    positions: ["Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/saachi-kumar/",
  },
  {
    name: "Francis Chua",
    positions: ["Senior Curriculum Developer"],
    linkedin: "https://www.linkedin.com/in/francis-chua-29b68a1b6/",
  },
  {
    name: "Ethan Lin",
    positions: ["Testing Developer", "Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/ethan-lin-a93ab7172/",
  },
  {
    name: "Helena Su",
    positions: ["Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/helena-su-063965193",
  },
  {
    name: "Frank Xiao",
    positions: ["Testing Developer"],
    linkedin: "https://www.linkedin.com/in/frank-xiao-6a746520b/",
  },
  {
    name: "Siddharth Mehta",
    positions: ["Testing Developer"],
    linkedin: "https://www.linkedin.com/in/siddharth-mehta-935b4a1aa/",
  },
  {
    name: "Sanjit Pingili",
    positions: ["Curriculum Designer", "Quality Control"],
    linkedin: "http://linkedin.com/in/sanjit-pingili-14b04a1aa/",
  },
  {
    name: "Alysa Xu",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/alysa-xu-06bba21aa/",
  },
  {
    name: "Audrey Sun",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/audrey-sun-a14545129/",
  },
  {
    name: "Deeya Jain",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/deeya-jain/",
  },
  {
    name: "Srushti Patil",
    positions: ["Events Coordinator"],
    linkedin: "https://www.linkedin.com/in/srushti-patil/",
  },
  {
    name: "Kavin Shah",
    positions: ["Leadership Associate"],
    linkedin: "https://www.linkedin.com/in/kavinshah-student/",
  },
  {
    name: "Connor Park",
    positions: ["Podcast Editor"],
    linkedin: "https://www.linkedin.com/in/geonu-park-0904031b8/",
  },
  {
    name: "Mounica Policharla",
    positions: ["Regional Ambassador", "Regional Director"],
    linkedin: "https://www.linkedin.com/in/mounica-policharla-3308ab1ab/",
  },
  {
    name: "Karissa Ning",
    positions: ["Regional Director"],
    linkedin: "https://www.linkedin.com/in/karissa-ning-b743ab1bb/",
  },
  {
    name: "Sneha Patibandla",
    positions: ["Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/sneha-patibandla-1529731b1/",
  },
  {
    name: "Zahid Ahmed",
    positions: ["Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/zahid-ahmed-7779461b3",
  },
  {
    name: "Soumil Voma",
    positions: ["Marketing Specialist", "Regional Ambassador"],
    linkedin: "https://www.linkedin.com/in/soumil-voma-728a871bb/",
  },
  {
    name: "Neha Basu",
    positions: ["Expansion Associate"],
    linkedin: "https://www.linkedin.com/in/nehabasu1/",
  },
  {
    name: "Saad Umar",
    positions: ["IB Curriculum Coordinator"],
    linkedin: "https://www.linkedin.com/in/saad-umar-78b5201a7/ ",
  },
  {
    name: "Faaris Zuberi",
    positions: ["VP of FLIP"],
    linkedin: "https://www.linkedin.com/in/faaris-zuberi-4207a91b0/",
  },
  {
    name: "Vipra Bindal",
    positions: ["FLIP Curriculum Manager"],
    linkedin: "https://www.linkedin.com/in/vipra-bindal-6849a2204/ ",
  },
  {
    name: "Manasvi Lodha",
    positions: ["FLIP Curriculum Manager"],
    linkedin: "https://www.linkedin.com/in/manasvi-lodha-994330184 ",
  },
  {
    name: "Tarun Srivastava",
    positions: ["FLIP Curriculum Designer"],
    linkedin: "https://www.linkedin.com/in/tarun-srivastava-b9a7aa1a9/",
  },
  {
    name: "Nevin Thombre",
    positions: ["FLIP Partnership Manager"],
    linkedin: "https://www.linkedin.com/in/nevin-thombre-5154411a9/ ",
  },
  {
    name: "Vaishu Enduri",
    positions: ["FLIP Partnership Manager"],
    linkedin: "https://www.linkedin.com/in/vaishu-enduri",
  },
  {
    name: "Vanessa Lin",
    positions: ["FLIP Partnership Manager", "Expansion Associate"],
    linkedin: "https://www.linkedin.com/in/vanessa-lin-20105/ ",
  },
  {
    name: "Cynthia Lan",
    positions: ["TikTok Creator"],
    linkedin: "www.linkedin.com/in/cynthia-lan-0b845a203",
  },
];

export default team;
