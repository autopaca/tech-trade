export const tradeStructExamples = [
  {
    user: 'Buy 1 btc at the price of 40000, and then sell all at price of 45k',
    assistant:
      '{"res": [\n{"orderType": "Buy", "tradeSymbol": "BTC", "triggerPrice": "40000", "orderAmount": "1", "orderUnit": "BTC"},\n {"orderType": "Sell", "tradeSymbol": "BTC", "triggerPrice": "45000", "orderAmount": "1", "orderUnit": "BTC"}\n]}',
  },
  {
    user: '在 btc 跌到 40001 的时候抄底 200u',
    assistant:
      '{"res": [{"orderType": "Buy", "tradeSymbol": "BTC", "triggerPrice": "40001", "orderAmount": "200", "orderUnit": "USC"}]}',
  },
  {
    user: 'BTC 破 45000 的时候卖 0.5 个',
    assistant:
      '{"res": [{"orderType": "Sell", "tradeSymbol": "BTC", "triggerPrice": "45000", "orderAmount": "0.5", "orderUnit": "BTC"}]}',
  },
  {
    user: 'BTC 破 40000 的时候止损 0.5 个, 继续跌到 35000 的话买回来',
    assistant:
      '{"res": [{"orderType": "Sell", "tradeSymbol": "BTC", "triggerPrice": "40000", "orderAmount": "0.5", "orderUnit": "BTC"},{"orderType": "Buy", "tradeSymbol": "BTC", "triggerPrice": "35000", "orderAmount": "0.5", "orderUnit": "BTC"}]}',
  },
];
