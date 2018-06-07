const base = '/imgs';
const width = 1500;

const model = [
  {
    name: 'Fesh',
    image: `${base}/fesh.jpg?width=${width}`, // https://www.pexels.com/photo/fish-seafood-market-sea-85528/
    body: 'Slippry salty goodness',
    route: 'fesh',
    pros: [
      'Salty',
      'Shiny'
    ],
    cons: [
      'Tough to hold',
      'Sometimes runs away'
    ]
  },
  {
    name: 'Brrto',
    image: `${base}/brrto.jpg?width=${width}`, // https://www.pexels.com/photo/burrito-chicken-delicious-dinner-461198/
    body: 'Portable noms',
    route: 'brrto',
    pros: [
      'Many flavor',
      'Travels well'
    ],
    cons: [
      'Often wrapped in scary shiny metal',
      'Heavy'
    ]
  },
  {
    name: 'Pezza',
    image: `${base}/pezza.jpg?width=${width}`, // https://www.pexels.com/photo/vegetables-italian-pizza-restaurant-2232/
    body: 'Gooey hotness',
    route: 'pezza',
    pros: [
      'Maximum chees',
      'Still good after many days'
    ],
    cons: [
      'Too much hot',
      'Hard to lick'
    ]
  },
  {
    name: 'Soop',
    image: `${base}/soop.jpg?width=${width}`, // https://www.pexels.com/photo/appetizer-bowl-bread-breakfast-539451/
    body: 'Cozy warm',
    route: 'soop',
    pros: [
      'Smooth on tongue',
      'Pretty'
    ],
    cons: [
      'Cannot put in pockets',
      'Makes your face messy'
    ]
  }
];

export default model;
