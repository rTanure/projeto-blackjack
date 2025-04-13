import { Card, EnumCardRank, EnumCardSuit } from './card';

export function createDeck() {
  const deck: Card[] = [];

  function beginDeck() {
    for (const suit of Object.values(EnumCardSuit)) {
      for (const rank of Object.values(EnumCardRank)) {
        deck.push({ suit, rank });
      }
    }
  }

  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  return {
    deck,
    beginDeck,
    shuffleDeck
  }
}