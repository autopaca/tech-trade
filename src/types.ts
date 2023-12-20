export type TradeStruct = {
  orderType: 'Buy' | 'Sell';
  tradeSymbol: string;
  triggerPrice: string;
  orderAmount: string;
  orderUnit: string;
};

export type TradeStructsRes = {
  userMsg: string;
  tradeStructsRes: {
    res: TradeStruct[];
  };
};

export type QueryTradeDTO = {
  userMsg: string;
  openaiApiKey?: string;
};
