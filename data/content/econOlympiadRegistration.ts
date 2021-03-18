const links = [
  {
    name: "Allen High School",
    href: "https://forms.gle/fMgqvDfmjSBnof699",
  },
  {
    name: "American Academy in Tbilisi",
    href: "https://forms.gle/DSyhQLnac372taG98",
  },
  {
    name: "American High School",
    href: "https://forms.gle/5pkykuwwBKdMPw596",
  },
  {
    name: "Archbishop Mitty High School",
    href: "https://forms.gle/5AFNSniPqLWy5nxK9",
  },
  {
    name: "BASIS Scottsdale",
    href: "https://forms.gle/zCcC4ESAZD8L2J436",
  },
  {
    name: "Ballantyne",
    href: "https://forms.gle/ChFjvXSfXgfaM65v6",
  },
  {
    name: "Bothell High School",
    href: "https://forms.gle/K6wmKVkDAw7pNaDVA",
  },
  {
    name: "Bridgewater-Raritan Regional High School",
    href: "https://forms.gle/bEq79REEXkvE1nFh8",
  },
  {
    name: "Centennial High School",
    href: "https://forms.gle/UrGAc3YwnFbmBW9z5",
  },
  {
    name: "Central High School",
    href: "https://forms.gle/3cjXJv5HLBTkUH3Y8",
  },
  {
    name: "Chaparral High School",
    href: "https://forms.gle/MeNrFhCwdUSZebxy6",
  },
  {
    name: "Charlotte Country Day",
    href: "https://forms.gle/PP77sCbCj1uncuTdA",
  },
  {
    name: "Christian Heritage Academy",
    href: "https://forms.gle/3YUVUDP2qtAQR3iN7",
  },
  {
    name: "Cupertino High School",
    href: "https://forms.gle/WgdFs6f64TZAA7oB7",
  },
  {
    name: "Dougherty Valley High School",
    href: "https://forms.gle/rA5Ht3WrRgXfecsS7",
  },
  {
    name: "Dublin High School",
    href: "https://forms.gle/7TJ8jFF1fDcpBtun8",
  },
  {
    name: "Eastlake High School",
    href: "https://forms.gle/zS4oTz3Ed9b67LpP6",
  },
  {
    name: "El Camino Fundamental High School",
    href: "https://forms.gle/8pFr58iE8p3VMyBn6",
  },
  {
    name: "Frisco Heritage High School",
    href: "https://forms.gle/XaWCn9MCHmpod42u8",
  },
  {
    name: "GEMS Modern Academy",
    href: "https://forms.gle/sWmSP3zPxNvS9ReU8",
  },
  {
    name: "GEMS Wellington Academy Silicon Oasis",
    href: "https://forms.gle/mPFTLzctJoRmY3uGA",
  },
  {
    name: "Green Hope High School",
    href: "https://forms.gle/BQmeBpiFFkwQACmt6",
  },
  {
    name: "Harker Oeconomica",
    href: "https://forms.gle/z1Yo6B65md2NxdLk7",
  },
  {
    name: "Homestead High School",
    href: "https://forms.gle/RiUnCzEG9h2LK7nk9",
  },
  {
    name: "Joaquin Miller Middle School",
    href: "https://forms.gle/YxwRVGsjeehz8tXF9",
  },
  {
    name: "John P. Stevens High School",
    href: "https://forms.gle/Boat8RZL6GRSaVZ39",
  },
  {
    name: "Lange Ley HS",
    href: "https://forms.gle/LvEpkNAVQSGcjgeT9",
  },
  {
    name: "Leigh High School",
    href: "https://forms.gle/AaMHzeyi9caCD2QB9",
  },
  {
    name: "Lower Merion High School",
    href: "https://forms.gle/dYjgKzKtnn7qNY426",
  },
  {
    name: "Lynbrook High School",
    href: "https://forms.gle/8T8WgX6AymjQRTLD9",
  },
  {
    name: "Meadowbrook High School",
    href: "https://forms.gle/9ZCnZKJyZZX23PnD8",
  },
  {
    name: "Menlo High School",
    href: "https://forms.gle/3LWKCVySyzb9Qx1X9",
  },
  {
    name: "Milton Academy",
    href: "https://forms.gle/PuCxRvHCQs8HmYGH7",
  },
  {
    name: "Monta Vista High School",
    href: "https://forms.gle/ngR1Wk7SDtCJRkgP9",
  },
  {
    name: "Mount Lebanon High School",
    href: "https://forms.gle/eJpEo6z9R62k1SFt6",
  },
  {
    name: "Newton South High School",
    href: "https://forms.gle/Gnw8ocMda3oimmQh6",
  },
  {
    name: "Obra D. Tompkins High School",
    href: "https://forms.gle/bCdtZHddP35bGqpB6",
  },
  {
    name: "Palo Alto High School",
    href: "https://forms.gle/3LBvgP9GsjxZE8PC8",
  },
  {
    name: "Redwood Middle School",
    href: "https://forms.gle/hCUUK6XAbyoWMSiP8",
  },
  {
    name: "Richard Montgomery High School",
    href: "https://forms.gle/T5d7M6anyvoEUr2f7",
  },
  {
    name: "Santa Monica High School",
    href: "https://forms.gle/HgZNwuSGwRNV78x47",
  },
  {
    name: "Santa Teresa High School",
    href: "https://forms.gle/cDvRe5ixRukZwQVq6",
  },
  {
    name: "Saratoga High School",
    href: "https://forms.gle/rZHUsrSJQCefLf3e9",
  },
  {
    name: "Seven Lakes High School",
    href: "https://forms.gle/TVr7Mq4oxmu4yoNt9",
  },
  {
    name: "Sherwood Hall Senior Secondary School",
    href: "https://forms.gle/2vM6PJrD8xP1c2nj6",
  },
  {
    name: "Skyline High School",
    href: "https://forms.gle/iF8C4DyncXnLbSoM6",
  },
  {
    name: "Vaels International School",
    href: "https://forms.gle/eoXjmKHfEP35q1x4A",
  },
  {
    name: "Viewpoint School",
    href: "https://forms.gle/sJnBuS9Syme2YhNq7",
  },
  {
    name: "Waubonsie Valley High School",
    href: "https://forms.gle/mYvpF2wmvSJCHbfU8",
  },
  {
    name: "Westwood High School",
    href: "https://forms.gle/5AixS8Ha7gqj7nqJA",
  },
];

export default links;
