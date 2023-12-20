import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryTradeDTO, TradeStructsRes } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('query-trade-struct')
  queryTradeStruct(
    @Body() queryTradeDTO: QueryTradeDTO,
  ): Promise<TradeStructsRes> {
    return this.appService.queryTradeStruct(
      queryTradeDTO.userMsg,
      queryTradeDTO.openaiApiKey,
    );
  }
}
