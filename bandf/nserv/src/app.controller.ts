import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')  // '/api' 경로 추가
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')  // 이렇게 하면 '/api/hello' 경로가 됨
  getHello(): string {
    return this.appService.getHello();
  }
}