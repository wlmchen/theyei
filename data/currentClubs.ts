const clubs = [
  {
    name: 'Saratoga High School',
    email: 'henryweng03@gmail.com',
    region: 'NorCal',
    founding: true,
    primaryFounding: true,
  },
  {
    name: 'Lynbrook High School',
    email: 'ian@theyei.org',
    region: 'NorCal',
    founding: true,
    primaryFounding: true,
  },
  {
    name: 'Newton South High School',
    email: 'li.andrew.ch@gmail.com',
    region: 'Massachusetts',
    founding: true,
  },
  {
    name: 'Harker School',
    email: '21arushis@students.harker.org',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Monta Vista High School',
    email: 'maggieyy7@gmail.com ',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Waubonsie Valley High School',
    email: 'ariondey@gmail.com',
    region: 'Illinois',
    founding: true,
  },
  {
    name: 'Eastlake High School',
    email: 's-ansingh@lwsd.org',
    region: 'Washington',
    founding: true,
  },
  {
    name: 'Joaquin Miller Middle School',
    email: 'yzhoucalvin@gmail.com',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'American High School',
    email: 'jcheng3537@gmail.com',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Chaparral High School',
    email: 'rkshishodia4@gmail.com',
    region: 'SoCal',
    founding: true,
  },
  {
    name: 'Ardrey Kell',
    email: 'linkevin465@gmail.com',
    region: 'North Carolina',
    founding: true,
  },
  {
    name: 'Vaels International School',
    email: '2003pallavi2003@gmail.com',
    region: 'India',
    founding: true,
  },
  {
    name: 'Westwood High School',
    email: 'rohanbajpai024@gmail.com',
    region: 'Texas',
    founding: true,
  },
  {
    name: 'GEMS Wellington Academy Silicon Oasis',
    email: 'rajvirkohli0@gmail.com',
    region: 'United Arab Emirates',
    founding: true,
  },
  {
    name: 'BASIS Scottsdale',
    email: 'nbasu.456@gmail.com',
    region: 'Arizona',
    founding: true,
  },
  {
    name: 'Richard Montgomery High School',
    email: 'dannyshao2013@gmail.com',
    region: 'Maryland',
    founding: true,
  },
  {
    name: 'Green Hope High School',
    email: 'bhzhang4@gmail.com',
    region: 'North Carolina',
    founding: true,
  },
  {
    name: 'Redwood Middle School',
    email: 'cheryl@theyei.org',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Palo Alto High School',
    email: 'mh33653@pausd.us',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Homestead High School',
    email: 'andraaliu@gmail.com\n',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'El Camino Fundamental High School',
    email: 'marinjanedolan@gmail.com',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Menlo High School',
    email: 'connor.yu@menloschool.org',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'John P. Stevens High School',
    email: 'snehanpatibandla@gmail.com',
    region: 'New Jersey',
    founding: true,
  },
  {
    name: 'Leigh High School',
    email: 'jhatanmay2005@gmail.com',
    region: 'NorCal',
    founding: true,
  },
  {
    name: 'Seven Lakes High School',
    email: 'siddharthayyagari1@gmail.com',
    region: 'Texas',
    founding: true,
  },
  {
    name: 'Sherwood Hall Senior Secondary School',
    email: 'rafahasma@icloud.com',
    region: 'India',
    founding: true,
  },
  {
    name: 'Central High School',
    email: 'robineluvathingal@gmail.com',
    region: 'Arkansas',
    founding: true,
  },
  {
    name: 'Instituto Lange Ley',
    email: 'martinakurchan@gmail.com',
    region: 'Argentina',
    founding: true,
  },
  {
    name: 'Centennial High School',
    email: 'lucasyang04@gmail.com',
    region: 'Maryland',
    founding: true,
  },
  {
    name: 'Christian Heritage Academy',
    email: 'nathanael.wang@yahoo.com',
    region: 'Illinois',
    founding: true,
  },
  {
    name: 'Archbishop Mitty High School',
    email: 'anirudhlahiri314@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Cupertino High School',
    email: 'alysaxu10295@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Dublin High School',
    email: 'forevergrace.15@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Viewpoint School',
    email: 'j.yang22@viewpoint.org',
    region: 'SoCal',
  },
  {
    name: 'Frisco Heritage High School',
    email: 'rithikduvva@gmail.com',
    region: 'Texas',
  },
  {
    name: 'Lower Merion High School',
    email: 'jonathaninnovations@gmail.com',
    region: 'Pennsylvania',
  },
  {
    name: 'Dougherty Valley High School',
    email: 'ishaanbansal1001@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Skyline High School',
    email: 'pradumna.sachdeva@gmail.com',
    region: 'Washington',
  },
  {
    name: 'Allen High School',
    email: 'nikki.shah@student.allenisd.org',
    region: 'Texas',
  },
  {
    name: 'Bothell High School',
    email: '1118836@apps.nsd.org',
    region: 'Washington',
  },
  {
    name: 'Charlotte Country Day',
    email: 'MKoya21@charlottecountryday.org',
    region: 'North Carolina',
  },
  {
    name: 'GEMS Modern Academy',
    email: 'zahidahmed1420@gmail.com',
    region: 'United Arab Emirates',
  },
  {
    name: 'Obra D. Tompkins High School',
    email: 'othsyei@gmail.com',
    region: 'Texas',
  },
  {
    name: 'Meadowbrook High School',
    email: 'seansummers21.ss@gmail.com',
    region: 'Virginia',
  },
  {
    name: 'Milton Academy',
    email: 'isabella_kanczuk23@milton.edu',
    region: 'Massachusetts',
  },
  {
    name: 'Santa Monica High School',
    email: 'cecebarikhan@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Bridgewater-Raritan Regional High School',
    email: 'bhuvaneshprabakar2022@gmail.com',
    region: 'New Jersey',
  },
  {
    name: 'Mount Lebanon High School',
    email: 'ybotre36@mtlstudents.net',
    region: 'Pennsylvania',
  },
  {
    name: 'American Academy in Tbilisi',
    email: 'lkharabadze@aat.ge',
    region: 'Tbilisi, The Republic of Georgia',
  },
  {
    name: 'Santa Teresa High School',
    email: 'sunchaeyeon5348@students.esuhsd.org',
    region: 'SoCal',
  },
  {
    name: 'Doral Academy Preparatory',
    email: 'miriamtrujillo2004@gmail.com',
    region: 'Florida',
  },
  {
    name: 'Hankuk Academy of Foreign Studies',
    email: 'justinjeon88@naver.com',
    region: 'South Korea',
  },
  {
    name: 'Najd National Schools',
    email: 'yaseralbaker3@gmail.com',
    region: 'Saudi Arabia',
  },
  {
    name: 'Los Altos High School',
    email: 'alvin4.xiao@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Alameda High Economics Club',
    email: 'ahseconclub@gmail.com',
    region: 'NorCal',
  },
  {
    name: 'Blue Valley West High School',
    email: 'aitha.shashank@yahoo.com',
    region: 'Kansas',
  },
  {
    name: 'Del Norte High School',
    email: 'its.alicia.ji@gmail.com',
    region: 'SoCal',
  },
  {
    name: 'Garodia International Centre for Learning Mumbai',
    email: 'tanishchheda12@gmail.com',
    region: 'India',
  },
  {
    name: 'Allen D. Nease High School',
    email: 'sanyahshah@gmail.com',
    region: 'Florida',
  },
  {
    name: 'Livermore High School',
    email: 'kwood@lvjusd.org',
    region: 'NorCal',
  },
  {
    name: 'Thomas Jefferson High School for Science and Tech',
    email: 'azhou2200@gmail.com',
    region: 'Virginia',
  },
  {
    name: 'Colonial Forge High School',
    email: 'sunkara.yashaswi@gmail.com',
    region: 'Virginia',
  },
  {
    name: 'Sunbeam School Bhagwanpur',
    email: 'aveeshmehrotra123@gmail.com',
    region: 'India',
  },
  {
    name: 'American University of Central Asia',
    email: 'mamadjanova_d@auca.kg',
    region: 'Kyrgyzstan',
  },
  {
    name: 'Mt. Hebron High School',
    email: 'saniya.mahate@gmail.com',
    region: 'Maryland',
  },
  {
    name: 'Al Ain Juniors School',
    email: 'noufalthanduthiyil@gmail.com',
    region: 'UAE',
  },
  {
    name: 'The Henrietta Barnett School',
    email: 'sanjana1301@gmail.com',
    region: 'London',
  },
  {
    name: 'Edwin O. Smith High School',
    email: 'soccer.gabas@gmail.com',
    region: 'Connecticut',
  },
  {
    name: 'Stratford High School',
    email: 'wangcad000@mysbisd.org',
    region: 'Texas',
  },
  {
    name: 'Horace Mann School',
    email: 'braden_queen@horacemann.org',
    region: 'New York',
  },
  {
    name: 'West Ranch High School',
    email: 'allisonh330@gmail.com',
    region: 'SoCal',
  },
  {
    name: 'Edward W. Clark High School',
    email: 'sudipta.rout.lv@gmail.com',
    region: 'Nevada',
  },
  {
    name: 'Washington International School in Taichung',
    email: 'linlucas0509@gmail.com',
    region: 'Taiwan',
  },
  {
    name: 'Polytechnic High School',
    email: 'dsoatto23@students.polytechnic.org',
    region: 'NorCal',
  },
  {
    name: 'Whitney High School',
    email: 'rohil_kadekar@myabcusd.org',
    region: 'SoCal',
  },
  {
    name: 'North Allegheny Senior High School',
    email: 'dpark@nastudents.org',
    region: 'Pennsylvania',
  },
  {
    name: "Land O' Lakes High School",
    email: 'williamfshelton3@gmail.com',
    region: 'Florida',
  },
  {
    name: 'Vincent Massey Secondary School',
    email: 'itzdordor@gmail.com',
    region: 'Ontario, Canada',
  },
  {
    name: 'Mallya Aditi International School',
    email: 'ramdas.radhika@gmail.com',
    region: 'India',
  },
  {
    name: 'Westview High School',
    email: 'vasu.k.dec13@gmail.com',
    region: 'SoCal',
  },
  {
    name: 'Triam Udom Suksa School',
    email: 'info@econclub-ectu.org',
    region: 'Thailand',
  },
  {
    name: 'Shanghai Livingston American School',
    email: 'dldpfla1005@outlook.com',
    region: 'China',
  },
  {
    name: 'GEMS Metropole School',
    email: 'economicsclub.triamudom@gmail.com',
    region: 'UAE',
  },
  {
    name: 'Manila Xiamen International School',
    email: 'alexwongyanki@163.com',
    region: 'China'
  },
  {
    name: 'Chengdu Foreign Languages School',
    email: '12120626@qq.com',
    region: 'China'
  },
  {
    name: 'Beijing Haidian Foreign Language Shiyan School',
    email: 'edwardqu0822@outlook.com',
    region: 'China'
  },
  {
    name: 'Hefei Thomas School',
    email: 'hesy101016@icloud.com',
    region: 'China'
  }
]

export default clubs
