const speakers = [
  {
    date: "November 8, 2020",
    name: "Lawrence White",
    occupation: "Professor @ NYU",
    vids: ["https://youtu.be/aemfNr-o8d4"],
    bio:
      'At the 2nd Annual EconBowl, Professor White gave a talk about anti-trusts. He received his Ph.D. in Economics from Harvard University and holds the Robert Kavesh Professorship in Economics. He has been with New York University Leonard N. Stern School of Business for over 40 years. Professor White has published numerous articles in the Journal of Business, Journal of Economic Perspectives, and more, and is the author of "The S&L Debacle: Public Policy Lessons for Bank" and "Thrift Regulation."',
  },
  {
    date: "October 10, 2020",
    host: "Saratoga YEI",
    name: "Paul R. Milgrom",
    occupation: "2020 Nobel Prize Laureate & Professor @ Stanford",
    vids: ["https://www.youtube.com/watch?v=EpfXoVANHNA"],
    bio:
      "Milgrom is best known for his contributions to the theory of auctions and auction design, for which he won the 2020 Nobel Prize in Economics. Much of his work on auction theory is summarized in his book, Putting Auction Theory to Work, published by Cambridge University Press. He is the Shirley and Leonard Ely professor of Humanities and Sciences in the department of economics and professor by courtesy at Stanford Graduate School of Business. He is also a member of the National Academy of Sciences, a fellow of the American Academy of Arts and Sciences, and director of the Market Design program at SIEPR.  ",
  },
  {
    date: "October 10, 2020",
    name: "Leeat Yariv",
    host: "Saratoga YEI",
    occupation: "Professor of Economics @ Princeton",
    vids: ["https://www.youtube.com/watch?v=EpfXoVANHNA?t=1170"],
    bio:
      "Leeat Yariv is the Uwe E. Reinhardt Professor of Economics at Princeton University, a Research Fellow of CEPR, and a Research Associate of NBER. She is the founder and director of the Princeton Experimental Laboratory for the Social Sciences (PExL). Yariv is a fellow of the Econometric Society and the Society for the Advancement of Economic Theory. She has served on various journal editorial boards, including the American Economic Review, Econometrica, Games and Economic Behavior, Journal of Economic Literature, and Quantitative Economics.",
  },
  {
    date: "October 10, 2020",
    name: "George J. Mailath",
    host: "Saratoga YEI",
    vids: ["https://www.youtube.com/watch?v=EpfXoVANHNAt=2450"],
    occupation: "Professor of Economics @ University of Pennsylvania",
    bio:
      "George J. Mailath is Walter H. Annenberg Professor in the Social Sciences and Professor of Economics at the University of Pennsylvania, and Goldsmith Professor in the Research School of Economics, Australian National University. Professor Mailath’s published research in microeconomics includes papers on pricing, noncooperative game theory, evolutionary game theory, repeated games, social norms, and the theory of reputations.  He is a Fellow of the American Academy of Arts & Sciences, the Econometric Society, the Society for the Advancement of Economic Theory, and the Game Theory Society.",
  },
  {
    date: "August 7, 2020",
    name: "Dhanjanay (Dan) Gode",
    occupation: "Clinical Professor of Accounting @ NYU Stern",
    bio:
      "Dan Gode is a professor at the Stern School of Business at NYU. He teaches and consults extensively in the areas of business drivers, financial reporting and analysis, data analytics, modeling, and taxation. He has been at Stern since 1998 and was voted “Professor of the Year” twice and has been nominated for the award seven times.",
  },
  {
    date: "August 5, 2020",
    name: "Rakesh Vohra",
    occupation: "Professor of Economics @ UPenn",
    vids: ["https://www.youtube.com/watch?v=9oB8_GaiD5o"],
    bio:
      "Rakesh Vohra is Professor at the University of Pennsylvania and has done research how a partially effective vaccine would affect the economy. He is also part of the Penn Integrates Knowledge program, an initiative whose research contributed greatly to the integration of knowledge across disciplines.",
  },
  {
    date: "August 4, 2020",
    name: "Anton Korinek",
    occupation: "Associate Professor of Economics @ UVA",
    vids: ["https://www.youtube.com/watch?v=DTXveSeicTE"],
    bio:
      "Anton Korinek is an associate professor of economics at the Department of Economics of UVA. His current research includes studies of Covid-19 externalities and artificial intelligence. In today’s presentation, Professor Korinek will discuss the significant externalities of COVID-19, which answers the question of whether the government should order citizens to stay at home to limit the spread of the virus.",
  },
  {
    date: "August 3, 2020",
    name: "Melissa McCullough",
    occupation: "Senior Sustainability Advisor for the EPA",
    vids: ["https://www.youtube.com/watch?v=nDn8By0w_4o"],
    bio:
      "Melissa McCullough is the Senior Sustainability Advisor for the Environmental Production Agency (EPA) and a LEED AP, a professional under the U.S. Green Building Council's Leadership in Energy and Environmental Design program. She has been studying sustainability and believes that it is the key to environmental, human, and economic well-being.",
  },
  {
    date: "July 27, 2020",
    name: "J.D. Schramm",
    occupation: "Lecturer @ Stanford; Author",
    vids: ["https://www.youtube.com/watch?v=IatHUAdqQF4"],
    bio:
      "Dr. Schramm is a lecturer in organizational behavior at Stanford’s Graduate School of Business. He joined their faculty in 2007. Before that, he was a part of Columbia University and NYU’s faculty. In 2012, he co-founded the LOWKeynote program for students to create and deliver inspiring talks to enroll others in their vision to change lives, organizations, and the world. In 2019, he was also appointed the inaugural director of the King Global Leadership Program for Stanford’s Knight Hennessy Scholars. Then this february, he published his first book, Communicate with Mastery: Speak With Conviction and Write for Impact.",
  },
  {
    date: "July 17, 2020",
    name: "Thomas White",
    vids: ["https://www.youtube.com/watch?v=FpOecPsOtrY"],
    occupation:
      "CEO of Transform Consulting; Host of Business Matters and The Heart of Business Podcasts",
    bio:
      "Thomas is an entrepreneur, disruptive innovator, and a teacher. He has served as a trusted advisor for many CEOs and C-Suites of some of the largest companies in the world. He is also the executive producer of two national radio shows named Business Matters and The Heart of Business. He currently has his own leadership training program called Transform, with a purpose to inspire and fuel the leaders inside of us.",
  },
  {
    date: "May 30, 2020",
    name: "Tarun Galagali",
    vids: ["https://www.youtube.com/watch?v=JrCUB1TDZTo"],
    occupation:
      "Senior Political Advisor @ Ro Khanna for Congress, Product Manager @ Google",
    bio:
      "Tarun is a current MBA Candidate at Harvard Business School. He was the product marketing manager at Google as well as the senior political advisor for Ro Khanna.",
  },
  {
    date: "May 30, 2020",
    name: "Anil Chakravarthy",
    vids: ["https://www.youtube.com/watch?v=JrCUB1TDZTo"],
    occupation: "EVP & GM @ Adobe; Former CEO of Informatica",
    bio:
      "He studied at the MIT Media Lab, and now serves as Adobe’s Executive Vice President and General Manager of Digital Experience.",
  },
  {
    date: "May 29, 2020",
    name: "George Bulman",
    host: "Saratoga YEI",
    vids: ["https://youtu.be/xsPGvh-wTnU?t=6305"],
    occupation: "Assistant Professor @ UCSC",
    bio:
      "Assistant Professor Bulman teaches applied Microeconomics and econometrics at UC Santa Cruz. Previously, he worked as a budget analyst for the National Park Service in Washington D.C. Assistant Professor Bulman has conducted research in areas of higher education, as well as in applied public and labor economics.",
  },
  {
    date: "May 29, 2020",
    name: "Mark Brady",
    host: "Saratoga YEI",
    occupation: "Professor of Economics @ SJSU",
    vids: ["https://youtu.be/xsPGvh-wTnU?t=5357"],
    bio:
      "Professor Mark Brady, who teaches Principles of Macroeconomics, Principles of Microeconomics, and Macroeconomic Analysis at San Jose State University. He also teaches Economics at De Anza College in Cupertino and previously taught economics in schools, colleges, and universities in Britain, Ireland, and California! He is particularly interested in economic history and the history of economic thought.",
  },
  {
    date: "May 29, 2020",
    name: "Scott Baker",
    host: "Saratoga YEI",
    vids: ["https://youtu.be/xsPGvh-wTnU?t=4100"],
    occupation: "Associate Professor of Finance @ Northwestern",
    bio:
      "Professor Scott Baker, is an associate professor of Finance at Kellogg School of Management at Northwestern University after completing his PHD at Stanford and his B.A. at UC Berkeley.  His research is concentrated on empirical finance and macroeconomics. He is engaged in a variety of research projects regarding household financial choices and the measurement of consumption, as well as research regarding the effects of policy uncertainty on financial markets and growth.",
  },
  {
    date: "May 29, 2020",
    name: "Ajay Shenoy",
    host: "Saratoga YEI",
    vids: ["https://youtu.be/xsPGvh-wTnU?t=2680"],
    occupation: "Assistant Professor @ UCSC",
    bio:
      "Assistant Professor Shenoy teaches at UC Santa Cruz. His interests primarily lie in the economics of development, economic growth, macroeconomics, and the political economy. His past work includes research on markets, poverty, income, and production.",
  },
  {
    date: "May 29, 2020",
    name: "Roy Bahat",
    host: "Saratoga YEI",
    vids: ["https://youtu.be/xsPGvh-wTnU?t=880"],
    occupation: "Head of Bloomberg Beta",
    bio:
      "Roy Bahat leads Bloomberg Beta, an early-stage venture firm backed by Bloomberg that invests in startups making work better, with a focus on machine intelligence. Mr. Bahat is a Commissioner on the California Future of Work Commision; a lecturer at UC Berkeley; the founding chairman of OUYA, a Kickstarter-backed game console; and was the former president of IGN Entertainment. He was named one of Fast Company’s Most Creative People in Business, and has served in government and led a non-profit in addition to his work at established corporations and day zero startups. He graduated from Harvard College, and was a Rhodes Scholar.",
  },
  {
    date: "May 29, 2020",
    name: "Janice Albright",
    host: "Saratoga YEI",
    vids: ["https://www.youtube.com/watch?v=xsPGvh-wTnU"],
    occupation: "Owner of Big Basin Burger Bar",
    bio:
      "Janice Albright is the owner of Big Basin Burger, a successful burger restaurant in downtown Saratoga that first opened in 2015. Big Basin Burger Bar won Best of Los Gatos-Saratoga Look 2017 awards and received awards of excellence by the Saratoga City Council.",
  },
];

export default speakers;
