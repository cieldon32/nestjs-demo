import { Injectable } from '@nestjs/common';

//该装饰器把AppService类标记为可供注入的服务
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
