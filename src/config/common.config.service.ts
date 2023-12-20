import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommonConfigService {
  constructor(private configService: ConfigService) {}

  get openaiApiKey(): string | undefined {
    return this.configService.get<string>('OPENAI_API_KEY');
  }

  private getString(name: string, defaultValue?: string): string {
    const v = this.configService.get<string>(name);
    if (!v) {
      if (defaultValue) return defaultValue;
      throw new Error(`evn ${name} not defined`);
    }
    return v;
  }

  private getNumber(name: string, defaultValue?: number): number {
    const v = this.configService.get<string>(name);
    if (!v) {
      if (defaultValue) return defaultValue;
      throw new Error(`evn ${name} not defined`);
    }
    return Number(v);
  }

  private getBoolean(name: string, defaultValue?: boolean): boolean {
    const v = this.configService.get<string>(name);
    if (!v) {
      if (defaultValue) return defaultValue;
      throw new Error(`evn ${name} not defined`);
    }
    return v.toLowerCase() === 'true';
  }
}
