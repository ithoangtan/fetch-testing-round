import SVGFoodAndBeverage from 'assets/svg/SVGFoodAndBeverage'
import SVGPetrol from 'assets/svg/SVGPetrol'
import SVGRentalRebate from 'assets/svg/SVGRentalRebate'

export const petrolList = [
  {
    productPrice: 15,
    description: '50% discount for every $100 top-up on your Shell Petrol Card',
    image: <SVGPetrol />,
  },
  {
    productPrice: 1000,
    insufficient: true,
    description: '70% discount top-up on your Shell Petrol Card',
    image: <SVGPetrol bgColor='#2CC2B0' />,
  },
  {
    productPrice: 10000000,
    description:
      'Id irure deserunt pariatur ut consectetur labore. Do irure officia non qui ex est anim fugiat ex pariatur officia culpa ut. Excepteur cupidatat mollit fugiat exercitation do occaecat. Dolore reprehenderit Lorem tempor proident incididunt irure consectetur aliquip consectetur. Elit labore in mollit id consectetur ullamco et nulla ad exercitation est. Cupidatat irure eu reprehenderit ullamco mollit in tempor exercitation do nulla.',
    insufficient: true,
    image: <SVGPetrol bgColor='#005AFF' />,
  },
  {
    productPrice: 0,
    insufficient: true,
    description: '100% discount top-up',
    image: <SVGPetrol bgColor='#82C43C' />,
  },
  {
    productPrice: 9999,
    description:
      'Occaecat irure sit consequat eiusmod adipisicing tempor duis adipisicing. Aliqua incididunt do in sint aute fugiat est do. Occaecat eu reprehenderit elit laboris elit officia aliqua adipisicing ut et laborum aliqua qui fugiat. Aliqua laborum magna sunt ipsum culpa consequat ex fugiat non.',
    image: <SVGPetrol bgColor='#ff8822' />,
  },
]

export const rentalList = [
  {
    productPrice: 20,
    description: 'Get $20 Rental rebate',
    image: <SVGRentalRebate />,
  },
  {
    productPrice: 15,
    insufficient: false,
    description: 'Get $500 Rental rebate',
    image: <SVGRentalRebate bgColor='#A461D8' />,
  },
  {
    productPrice: 10000000,
    description:
      'Id irure deserunt pariatur ut consectetur labore. Do irure officia non qui ex est anim fugiat ex pariatur officia culpa ut. Excepteur cupidatat mollit fugiat exercitation do occaecat. Dolore reprehenderit Lorem tempor proident incididunt irure consectetur aliquip consectetur. Elit labore in mollit id consectetur ullamco et nulla ad exercitation est. Cupidatat irure eu reprehenderit ullamco mollit in tempor exercitation do nulla.',
    insufficient: true,
    image: <SVGRentalRebate bgColor='#005AFF' />,
  },
  {
    productPrice: 0,
    insufficient: true,
    description: '100% discount top-up',
    image: <SVGRentalRebate bgColor='#82C43C' />,
  },
  {
    productPrice: 9999,
    description:
      'Occaecat irure sit consequat eiusmod adipisicing tempor duis adipisicing. Aliqua incididunt do in sint aute fugiat est do. Occaecat eu reprehenderit elit laboris elit officia aliqua adipisicing ut et laborum aliqua qui fugiat. Aliqua laborum magna sunt ipsum culpa consequat ex fugiat non.',
    image: <SVGRentalRebate bgColor='#ff8822' />,
  },
]

export const foodList = [
  {
    productPrice: 25,
    description: 'NTUC Fairprice $50 Voucher',
    image: <SVGFoodAndBeverage />,
  },
  {
    productPrice: 5,
    insufficient: true,
    description: 'Free Cold Stone Sundae at any flavour!',
    image: <SVGFoodAndBeverage bgColor='#82C43C' />,
  },
  {
    productPrice: 10000000,
    description:
      'Id irure deserunt pariatur ut consectetur labore. Do irure officia non qui ex est anim fugiat ex pariatur officia culpa ut. Excepteur cupidatat mollit fugiat exercitation do occaecat. Dolore reprehenderit Lorem tempor proident incididunt irure consectetur aliquip consectetur. Elit labore in mollit id consectetur ullamco et nulla ad exercitation est. Cupidatat irure eu reprehenderit ullamco mollit in tempor exercitation do nulla.',
    insufficient: true,
    image: <SVGFoodAndBeverage bgColor='#005AFF' />,
  },
  {
    productPrice: 0,
    insufficient: true,
    description: '100% discount top-up',
    image: <SVGFoodAndBeverage bgColor='red' />,
  },
  {
    productPrice: 9999,
    description:
      'Occaecat irure sit consequat eiusmod adipisicing tempor duis adipisicing. Aliqua incididunt do in sint aute fugiat est do. Occaecat eu reprehenderit elit laboris elit officia aliqua adipisicing ut et laborum aliqua qui fugiat. Aliqua laborum magna sunt ipsum culpa consequat ex fugiat non.',
    image: <SVGFoodAndBeverage bgColor='yellow' />,
  },
]
