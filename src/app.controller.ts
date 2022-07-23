import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategories(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `Category ${categoryId}, Product ${productId}`;
  }
}
