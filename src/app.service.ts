import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { TradeStructsRes, TradeStruct } from './types';
import { CommonConfigService } from './config/common.config.service';
import { tradeStructExamples } from './examples';

@Injectable()
export class AppService {
  private readonly openai: OpenAI;

  getHello(): string {
    return 'Hello World!';
  }

  constructor(private config: CommonConfigService) {
    this.openai = new OpenAI({
      apiKey: this.config.openaiApiKey ?? '',
    });
  }

  async queryTradeStruct(
    userMsg: string,
    openaiApiKey?: string,
  ): Promise<TradeStructsRes> {
    if (!this.config.openaiApiKey && !openaiApiKey) {
      throw new Error(`openai key not provided!`);
    }
    let openai = this.openai;
    if (openaiApiKey && openaiApiKey.length > 0) {
      openai = new OpenAI({ apiKey: openaiApiKey });
    }
    const exampleMsgs = tradeStructExamples.flatMap((d) => [
      { role: 'user', content: d['user'] },
      {
        role: 'assistant',
        content: d['assistant'],
      },
    ]) as any;
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant designed to output JSON format from user\'s trading plan. The JSON format is an array of format like this: {'res': [{'orderType': '<Buy Or Sell>', 'tradeSymbol': '<The target symbol that user chooses to buy or sell>', 'triggerPrice': <the triger price of the trade>, 'orderAmount': '<the trade amount to buy or sell>', 'orderUint': '<order amount in the target symbol value or in USD value>'}]}`,
        },
        ...exampleMsgs,
        {
          role: 'user',
          content: userMsg,
        },
      ],
      model: 'gpt-4-1106-preview',
      response_format: { type: 'json_object' },
    });
    console.log(`user input: ${userMsg}`);
    console.log(`out put json: ${completion.choices[0].message.content}`);
    console.log(
      `---------------------------------------------------------------`,
    );
    const res = JSON.parse(completion.choices[0].message.content) as {
      res: TradeStruct[];
    };
    return {
      userMsg,
      tradeStructsRes: res,
    };
  }
}
