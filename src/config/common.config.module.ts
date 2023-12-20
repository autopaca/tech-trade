import { Global, Module } from '@nestjs/common';
import { CommonConfigService } from './common.config.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [CommonConfigService],
  exports: [CommonConfigService],
})
export class CommonConfigModule {}
