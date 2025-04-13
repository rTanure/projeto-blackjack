export enum EnumCardSuit {
  HEARTS = 'Hearts',
  DIAMONDS = 'Diamonds',
  CLUBS = 'Clubs',
  SPADE = 'Spades'
}

export enum EnumCardRank {
  ACE = 'Ace',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'Jack',
  QUEEN = 'Queen',
  KING = 'King'
}

export interface Card {
  suit: EnumCardSuit;
  rank: EnumCardRank;
}