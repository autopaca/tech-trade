import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonConfigModule } from './config/common.config.module';

@Module({
  imports: [CommonConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
