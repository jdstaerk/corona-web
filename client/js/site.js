let perHowMany = 100000;

fetch("https://api.covid19api.com/summary")
  .then((result) => result.json())
  .then((data) => {
    let countriesOfInterest = countryPopulation.filter((country) => {
      return country.population > 5000000;
    });

    let casesPerCapitaList = []

    countriesOfInterest.forEach((country) => {
      let dataItem = data.Countries.find(item => item.Country === country.name)
      if (dataItem && country.name) {
        let casesPerCapita = dataItem.TotalConfirmed / country.population * perHowMany
        casesPerCapitaList.push({ name: country.name, casesPerCapita: casesPerCapita })
      }
    });

    casesPerCapitaList = casesPerCapitaList.sort((a, b) => a.casesPerCapita - b.casesPerCapita)

    let htmlContent = ''

    let place = 1
    for (i = 0; i < 10; i++) {
      let topCountry = casesPerCapitaList[casesPerCapitaList.length - i]
      if (!topCountry) continue;
      htmlContent += '<p><strong>#' + place + ' - ' + topCountry.name + '</strong> hat <strong>' + topCountry.casesPerCapita.toFixed(2) + '</strong> bestätigte Corona Fälle pro ' + perHowMany + ' Einwohner.</p>'
      place++
    }

    document.getElementById('div-data').innerHTML = htmlContent
    
  })
  .catch((error) => {
    console.error(error);
  });

var countryPopulation = [
  {
    name: "Afghanistan",
    population: 37172386,
  },
  {
    name: "Albania",
    population: 2866376,
  },
  {
    name: "Algeria",
    population: 42228429,
  },
  {
    name: "American Samoa",
    population: 55465,
  },
  {
    name: "Andorra",
    population: 77006,
  },
  {
    name: "Angola",
    population: 30809762,
  },
  {
    name: "Anguilla",
    population: 15094,
  },
  {
    name: "Antarctica",
    population: 1106,
  },
  {
    name: "Antigua and Barbuda",
    population: 96286,
  },
  {
    name: "Argentina",
    population: 44494502,
  },
  {
    name: "Armenia",
    population: 2951776,
  },
  {
    name: "Aruba",
    population: 105845,
  },
  {
    name: "Australia",
    population: 24982688,
  },
  {
    name: "Austria",
    population: 8840521,
  },
  {
    name: "Azerbaijan",
    population: 9939800,
  },
  {
    name: "Bahamas",
    population: 385640,
  },
  {
    name: "Bahrain",
    population: 1569439,
  },
  {
    name: "Bangladesh",
    population: 161356039,
  },
  {
    name: "Barbados",
    population: 286641,
  },
  {
    name: "Belarus",
    population: 9483499,
  },
  {
    name: "Belgium",
    population: 11433256,
  },
  {
    name: "Belize",
    population: 383071,
  },
  {
    name: "Benin",
    population: 11485048,
  },
  {
    name: "Bermuda",
    population: 63973,
  },
  {
    name: "Bhutan",
    population: 754394,
  },
  {
    name: "Bolivia",
    population: 11353142,
  },
  {
    name: "Bosnia and Herzegovina",
    population: 3323929,
  },
  {
    name: "Botswana",
    population: 2254126,
  },
  {
    name: "Bouvet Island",
    population: 0,
  },
  {
    name: "Brazil",
    population: 209469333,
  },
  {
    name: "British Indian Ocean Territory",
    population: 0,
  },
  {
    name: "Brunei",
    population: 428962,
  },
  {
    name: "Bulgaria",
    population: 7025037,
  },
  {
    name: "Burkina Faso",
    population: 19751535,
  },
  {
    name: "Burundi",
    population: 11175378,
  },
  {
    name: "Cambodia",
    population: 16249798,
  },
  {
    name: "Cameroon",
    population: 25216237,
  },
  {
    name: "Canada",
    population: 37057765,
  },
  {
    name: "Cape Verde",
    population: 543767,
  },
  {
    name: "Cayman Islands",
    population: 64174,
  },
  {
    name: "Central African Republic",
    population: 4666377,
  },
  {
    name: "Chad",
    population: 15477751,
  },
  {
    name: "Chile",
    population: 18729160,
  },
  {
    name: "China",
    population: 1392730000,
  },
  {
    name: "Christmas Island",
    population: 1402,
  },
  {
    name: "Cocos (Keeling) Islands",
    population: 596,
  },
  {
    name: "Colombia",
    population: 49648685,
  },
  {
    name: "Comoros",
    population: 832322,
  },
  {
    name: "Congo",
    population: 5244363,
  },
  {
    name: "Cook Islands",
    population: 17379,
  },
  {
    name: "Costa Rica",
    population: 4999441,
  },
  {
    name: "Croatia",
    population: 4087843,
  },
  {
    name: "Cuba",
    population: 11338138,
  },
  {
    name: "Cyprus",
    population: 1189265,
  },
  {
    name: "Czech Republic",
    population: 10629928,
  },
  {
    name: "Denmark",
    population: 5793636,
  },
  {
    name: "Djibouti",
    population: 958920,
  },
  {
    name: "Dominica",
    population: 71625,
  },
  {
    name: "Dominican Republic",
    population: 10627165,
  },
  {
    name: "East Timor",
    population: 1267972,
  },
  {
    name: "Ecuador",
    population: 17084357,
  },
  {
    name: "Egypt",
    population: 98423595,
  },
  {
    name: "El Salvador",
    population: 6420744,
  },
  {
    name: "England",
    population: 55619400,
  },
  {
    name: "Equatorial Guinea",
    population: 1308974,
  },
  {
    name: "Eritrea",
    population: 3213972,
  },
  {
    name: "Estonia",
    population: 1321977,
  },
  {
    name: "Ethiopia",
    population: 109224559,
  },
  {
    name: "Falkland Islands",
    population: 2840,
  },
  {
    name: "Faroe Islands",
    population: 48497,
  },
  {
    name: "Fiji Islands",
    population: 883483,
  },
  {
    name: "Finland",
    population: 5515525,
  },
  {
    name: "France",
    population: 66977107,
  },
  {
    name: "French Guiana",
    population: 290691,
  },
  {
    name: "French Polynesia",
    population: 277679,
  },
  {
    name: "French Southern territories",
    population: 0,
  },
  {
    name: "Gabon",
    population: 2119275,
  },
  {
    name: "Gambia",
    population: 2280102,
  },
  {
    name: "Georgia",
    population: 3726549,
  },
  {
    name: "Germany",
    population: 82905782,
  },
  {
    name: "Ghana",
    population: 29767108,
  },
  {
    name: "Gibraltar",
    population: 33718,
  },
  {
    name: "Greece",
    population: 10731726,
  },
  {
    name: "Greenland",
    population: 56025,
  },
  {
    name: "Grenada",
    population: 111454,
  },
  {
    name: "Guadeloupe",
    population: 395700,
  },
  {
    name: "Guam",
    population: 165768,
  },
  {
    name: "Guatemala",
    population: 17247807,
  },
  {
    name: "Guinea",
    population: 12414318,
  },
  {
    name: "Guinea-Bissau",
    population: 1874309,
  },
  {
    name: "Guyana",
    population: 779004,
  },
  {
    name: "Haiti",
    population: 11123176,
  },
  {
    name: "Heard Island and McDonald Islands",
    population: 0,
  },
  {
    name: "Holy See (Vatican City State)",
    population: 825,
  },
  {
    name: "Honduras",
    population: 9587522,
  },
  {
    name: "Hong Kong",
    population: 7451000,
  },
  {
    name: "Hungary",
    population: 9775564,
  },
  {
    name: "Iceland",
    population: 352721,
  },
  {
    name: "India",
    population: 1352617328,
  },
  {
    name: "Indonesia",
    population: 267663435,
  },
  {
    name: "Iran",
    population: 81800269,
  },
  {
    name: "Iraq",
    population: 38433600,
  },
  {
    name: "Ireland",
    population: 4867309,
  },
  {
    name: "Israel",
    population: 8882800,
  },
  {
    name: "Italy",
    population: 60421760,
  },
  {
    name: "Ivory Coast",
    population: 25069229,
  },
  {
    name: "Jamaica",
    population: 2934855,
  },
  {
    name: "Japan",
    population: 126529100,
  },
  {
    name: "Jordan",
    population: 9956011,
  },
  {
    name: "Kazakhstan",
    population: 18272430,
  },
  {
    name: "Kenya",
    population: 51393010,
  },
  {
    name: "Kiribati",
    population: 115847,
  },
  {
    name: "Kuwait",
    population: 4137309,
  },
  {
    name: "Kyrgyzstan",
    population: 6322800,
  },
  {
    name: "Laos",
    population: 7061507,
  },
  {
    name: "Latvia",
    population: 1927174,
  },
  {
    name: "Lebanon",
    population: 6848925,
  },
  {
    name: "Lesotho",
    population: 2108132,
  },
  {
    name: "Liberia",
    population: 4818977,
  },
  {
    name: "Libyan Arab Jamahiriya",
    population: 6678567,
  },
  {
    name: "Liechtenstein",
    population: 37910,
  },
  {
    name: "Lithuania",
    population: 2801543,
  },
  {
    name: "Luxembourg",
    population: 607950,
  },
  {
    name: "Macao",
    population: 631636,
  },
  {
    name: "North Macedonia",
    population: 2084367,
  },
  {
    name: "Madagascar",
    population: 26262368,
  },
  {
    name: "Malawi",
    population: 18143315,
  },
  {
    name: "Malaysia",
    population: 31528585,
  },
  {
    name: "Maldives",
    population: 515696,
  },
  {
    name: "Mali",
    population: 19077690,
  },
  {
    name: "Malta",
    population: 484630,
  },
  {
    name: "Marshall Islands",
    population: 58413,
  },
  {
    name: "Martinique",
    population: 376480,
  },
  {
    name: "Mauritania",
    population: 4403319,
  },
  {
    name: "Mauritius",
    population: 1265303,
  },
  {
    name: "Mayotte",
    population: 270372,
  },
  {
    name: "Mexico",
    population: 126190788,
  },
  {
    name: "Micronesia, Federated States of",
    population: 112640,
  },
  {
    name: "Moldova",
    population: 2706049,
  },
  {
    name: "Monaco",
    population: 38682,
  },
  {
    name: "Mongolia",
    population: 3170208,
  },
  {
    name: "Montenegro",
    population: "631219",
  },
  {
    name: "Montserrat",
    population: 5900,
  },
  {
    name: "Morocco",
    population: 36029138,
  },
  {
    name: "Mozambique",
    population: 29495962,
  },
  {
    name: "Myanmar",
    population: 53708395,
  },
  {
    name: "Namibia",
    population: 2448255,
  },
  {
    name: "Nauru",
    population: 12704,
  },
  {
    name: "Nepal",
    population: 28087871,
  },
  {
    name: "Netherlands",
    population: 17231624,
  },
  {
    name: "Netherlands Antilles",
    population: 227049,
  },
  {
    name: "New Caledonia",
    population: 284060,
  },
  {
    name: "New Zealand",
    population: 4841000,
  },
  {
    name: "Nicaragua",
    population: 6465513,
  },
  {
    name: "Niger",
    population: 22442948,
  },
  {
    name: "Nigeria",
    population: 195874740,
  },
  {
    name: "Niue",
    population: 1624,
  },
  {
    name: "Norfolk Island",
    population: 2169,
  },
  {
    name: "North Korea",
    population: 25549819,
  },
  {
    name: "Northern Ireland",
    population: 1885400,
  },
  {
    name: "Northern Mariana Islands",
    population: 56882,
  },
  {
    name: "Norway",
    population: 5311916,
  },
  {
    name: "Oman",
    population: 4829483,
  },
  {
    name: "Pakistan",
    population: 212215030,
  },
  {
    name: "Palau",
    population: 17907,
  },
  {
    name: "Palestine",
    population: 4569087,
  },
  {
    name: "Panama",
    population: 4176873,
  },
  {
    name: "Papua New Guinea",
    population: 8606316,
  },
  {
    name: "Paraguay",
    population: 6956071,
  },
  {
    name: "Peru",
    population: 31989256,
  },
  {
    name: "Philippines",
    population: 106651922,
  },
  {
    name: "Pitcairn",
    population: 67,
  },
  {
    name: "Poland",
    population: 37974750,
  },
  {
    name: "Portugal",
    population: 10283822,
  },
  {
    name: "Puerto Rico",
    population: 3195153,
  },
  {
    name: "Qatar",
    population: 2781677,
  },
  {
    name: "Reunion",
    population: 859959,
  },
  {
    name: "Romania",
    population: 19466145,
  },
  {
    name: "Russian Federation",
    population: 144478050,
  },
  {
    name: "Rwanda",
    population: 12301939,
  },
  {
    name: "Saint Helena",
    population: 6600,
  },
  {
    name: "Saint Kitts and Nevis",
    population: 52441,
  },
  {
    name: "Saint Lucia",
    population: 181889,
  },
  {
    name: "Saint Pierre and Miquelon",
    population: 5888,
  },
  {
    name: "Saint Vincent and the Grenadines",
    population: 110210,
  },
  {
    name: "Samoa",
    population: 196130,
  },
  {
    name: "San Marino",
    population: 33785,
  },
  {
    name: "Sao Tome and Principe",
    population: 211028,
  },
  {
    name: "Saudi Arabia",
    population: 33699947,
  },
  {
    name: "Scotland",
    population: 5424800,
  },
  {
    name: "Senegal",
    population: 15854360,
  },
  {
    name: "Seychelles",
    population: 96762,
  },
  {
    name: "Sierra Leone",
    population: 7650154,
  },
  {
    name: "Singapore",
    population: 5638676,
  },
  {
    name: "Slovakia",
    population: 5446771,
  },
  {
    name: "Slovenia",
    population: 2073894,
  },
  {
    name: "Solomon Islands",
    population: 652858,
  },
  {
    name: "Somalia",
    population: 15008154,
  },
  {
    name: "South Africa",
    population: 57779622,
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    population: 30,
  },
  {
    name: "South Korea",
    population: 51606633,
  },
  {
    name: "South Sudan",
    population: 10975920,
  },
  {
    name: "Spain",
    population: 46796540,
  },
  {
    name: "SriLanka",
    population: 21670000,
  },
  {
    name: "Sudan",
    population: 41801533,
  },
  {
    name: "Suriname",
    population: 575991,
  },
  {
    name: "Svalbard and Jan Mayen",
    population: 2572,
  },
  {
    name: "Swaziland",
    population: 1136191,
  },
  {
    name: "Sweden",
    population: 10175214,
  },
  {
    name: "Switzerland",
    population: 8513227,
  },
  {
    name: "Syria",
    population: 16906283,
  },
  {
    name: "Tajikistan",
    population: 9100837,
  },
  {
    name: "Tanzania",
    population: 56318348,
  },
  {
    name: "Thailand",
    population: 69428524,
  },
  {
    name: "The Democratic Republic of Congo",
    population: 84068091,
  },
  {
    name: "Togo",
    population: 7889094,
  },
  {
    name: "Tokelau",
    population: 1411,
  },
  {
    name: "Tonga",
    population: 103197,
  },
  {
    name: "Trinidad and Tobago",
    population: 1389858,
  },
  {
    name: "Tunisia",
    population: 11565204,
  },
  {
    name: "Turkey",
    population: 82319724,
  },
  {
    name: "Turkmenistan",
    population: 5850908,
  },
  {
    name: "Turks and Caicos Islands",
    population: 37665,
  },
  {
    name: "Tuvalu",
    population: 11508,
  },
  {
    name: "Uganda",
    population: 42723139,
  },
  {
    name: "Ukraine",
    population: 44622516,
  },
  {
    name: "United Arab Emirates",
    population: 9630959,
  },
  {
    name: "United Kingdom",
    population: 66460344,
  },
  {
    name: "United States of America",
    population: 326687501,
  },
  {
    name: "United States Minor Outlying Islands",
    population: 300,
  },
  {
    name: "Uruguay",
    population: 3449299,
  },
  {
    name: "Uzbekistan",
    population: 32955400,
  },
  {
    name: "Vanuatu",
    population: 292680,
  },
  {
    name: "Venezuela",
    population: 28870195,
  },
  {
    name: "Vietnam",
    population: 95540395,
  },
  {
    name: "Virgin Islands, British",
    population: 29802,
  },
  {
    name: "Virgin Islands, U.S.",
    population: 106977,
  },
  {
    name: "Wales",
    population: 3139000,
  },
  {
    name: "Wallis and Futuna",
    population: 15289,
  },
  {
    name: "Western Sahara",
    population: 652271,
  },
  {
    name: "Yemen",
    population: 28498687,
  },
  {
    name: "Yugoslavia",
    population: null,
  },
  {
    name: "Zambia",
    population: 17351822,
  },
  {
    name: "Zimbabwe",
    population: 14439018,
  },
];
