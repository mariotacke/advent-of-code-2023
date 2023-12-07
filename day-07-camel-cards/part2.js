module.exports = (input) => {
  const order = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];

  const isFiveOfAKind = (hand) => {
    return hand.some(([, x]) => x === 5) ||
      hand.some(([, x]) => x + new Map(hand).get('J') === 5);
  };

  const isFourOfAKind = (hand) => {
    return hand.some(([, x]) => x === 4) ||
      hand.some(([card, x]) => card !== 'J' && x + new Map(hand).get('J') === 4);
  };

  const isFullHouse = (hand) => {
    return hand.some(([, x]) => x === 2) && hand.some(([, x]) => x === 3) ||
      hand.filter(([, x]) => x === 2).length === 2 && new Map(hand).get('J') === 1;
  };

  const isThreeOfAKind = (hand) => {
    return hand.some(([, x]) => x === 3) ||
      hand.some(([card, x]) => card !== 'J' && x + new Map(hand).get('J') === 3);
  };

  const isTwoPair = (hand) => hand.filter(([, x]) => x === 2).length === 2;

  const isOnePair = (hand) => {
    return hand.some(([, x]) => x === 2) ||
      new Map(hand).get('J') === 1;
  };

  const count = (hand) => hand.split('').reduce((hand, card) => ({
    ...hand,
    [card]: (hand[card] || 0) + 1,
  }), {});

  return input
    .split('\n')
    .map((line) => {
      const [cards, bid] = line.trim().split(' ');
      const counted = Object.entries(count(cards));

      return {
        order: cards.split('').map((card) => order.indexOf(card)),
        type: isFiveOfAKind(counted) ? 6 :
          isFourOfAKind(counted) ? 5 :
            isFullHouse(counted) ? 4 :
              isThreeOfAKind(counted) ? 3 :
                isTwoPair(counted) ? 2 :
                  isOnePair(counted) ? 1 : 0,
        bid: +bid,
      };
    })
    .sort((a, b) => {
      return a.type !== b.type ? a.type - b.type :
        a.order[0] !== b.order[0] ? b.order[0] - a.order[0] :
          a.order[1] !== b.order[1] ? b.order[1] - a.order[1] :
            a.order[2] !== b.order[2] ? b.order[2] - a.order[2] :
              a.order[3] !== b.order[3] ? b.order[3] - a.order[3] :
                a.order[4] !== b.order[4] ? b.order[4] - a.order[4] : 0;
    })
    .reduce((sum, hand, i) => sum + (i + 1) * hand.bid, 0);
};
