import { Controller, Get, Res } from '@nestjs/common';
import { NextResponse } from 'nest-next-module';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 注入依赖项
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res: NextResponse) {
    return res.nextRender('/index');
  }
}
