module.exports = (input) => {
  const order = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

  const isFiveOfAKind = (hand) => hand.some(([, x]) => x === 5);
  const isFourOfAKind = (hand) => hand.some(([, x]) => x === 4);
  const isFullHouse = (hand) => hand.some(([, x]) => x === 3) && hand.some(([, x]) => x === 2);
  const isThreeOfAKind = (hand) => hand.some(([, x]) => x === 3);
  const isTwoPair = (hand) => hand.filter(([, x]) => x === 2).length === 2;
  const isOnePair = (hand) => hand.some(([, x]) => x === 2);

  const count = (cards) => cards.split('').reduce((hand, card) => ({
    ...hand,
    [card]: (hand[card] || 0) + 1,
  }), {});

  const items = input
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
    });

  return items
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
