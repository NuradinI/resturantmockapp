import images from './images';

const wines = [
  {
    title: 'Chicken Sandwich',
    price: '$8.50',
    tags: 'Mild | Spicy',
  },
  {
    title: 'T-Bone Steak',
    price: '$20.70',
    tags: 'Well Done | Medium Rare',
  },
  {
    title: 'Donair Poutine',
    price: '$9.50',
    tags: 'Regular | Large',
  },
  {
    title: 'Pizza',
    price: '$11.50',
    tags: 'Donair | Cheese',
  },
  {
    title: 'Wings',
    price: '$5.50',
    tags: 'Barbeque | Honey Garlic',
  },
];

const cocktails = [
  {
    title: 'Pistachio Frappuccino',
    price: '$6.90',
    tags: 'Frappuccino Roast pumps | Pistachio Sauce pumps | Salted Brown- Buttery Topping | 710 ml',
  },
  {
    title: "Sugar Cookie Oat Frappuccino",
    price: '$7.10',
    tags: 'Frappuccino Roast pumps | Sugar Cookie Syrup pumps | Whipped Cream',
  },
  {
    title: 'Mocha Cookie Crumble',
    price: '$$8.05',
    tags: 'Frappuccino Roast pumps | Frappuccino Chips | Mocha Sauce pumps',
  },
  {
    title: 'Caramel Frappuccino',
    price: '$$6.60',
    tags: 'Frappuccino Roast pumps | Caramel Syrup pumps | Whipped Cream',
  },
  {
    title: 'Java Chip ',
    price: '$$5.80',
    tags: 'Frappuccino Roast pumps | Frappuccino Chips | Mocha Sauce pumps | Mocha Drizzle',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };