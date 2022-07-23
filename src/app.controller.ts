import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/nuevo')
  newEndPoint(): string {
    return 'Soy nuevo en Nestt';
  }

  @Get('/dos/')
  hello(): string {
    return 'Hola mundooo';
  }
}
