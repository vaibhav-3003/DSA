var maxProfit = function (arr) {
  if (arr.length < 2) {
    return 0;
  }

  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    const currentPrice = arr[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      const currentProfit = currentPrice - minPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
};
