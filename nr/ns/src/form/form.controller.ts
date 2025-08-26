import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('api')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('message')
  async saveMessage(@Body() body: any) {
    await this.formService.saveToJson(body);
    return { success: true };
  }
}
