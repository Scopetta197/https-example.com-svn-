const base = '/imgs';
const width = 1500;

const model = [
  {
    name: 'Brrto',
    image: `${base}/brrto.jpg?width=${width}`, // https://www.pexels.com/photo/burrito-chicken-delicious-dinner-461198/
    body: 'Portable noms',
    route: 'brrto',
    pros: [
      'Many flavor'
    ],
    cons: [
      'Often wrapped in scary shiny metal'
    ]
  },
  {
    name: 'Pezza',
    image: `${base}/pezza.jpg?width=${width}`, // https://www.pexels.com/photo/vegetables-italian-pizza-restaurant-2232/
    body: 'Gooey hotness',
    route: 'pezza',
    pros: [
      'Chees'
    ],
    cons: [
      'Too much hot'
    ]
  },
  {
    name: 'Fesh',
    image: `${base}/fesh.jpg?width=${width}`, // https://www.pexels.com/photo/fish-seafood-market-sea-85528/
    body: 'Slippry salt frens',
    route: 'fesh',
    pros: [
      'Salty'
    ],
    cons: [
      'Tough to hold'
    ]
  },
  {
    name: 'Soop',
    image: `${base}/soop.jpg?width=${width}`, // https://www.pexels.com/photo/appetizer-bowl-bread-breakfast-539451/
    body: 'Warm tummy',
    route: 'soop',
    pros: [
      'Smooth on tongue'
    ],
    cons: [
      'Cannot put in pockets'
    ]
  }
];

export default model;
