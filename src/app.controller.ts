import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/sum/:a/:b')
  getSum(@Param('a') a: string, @Param('b') b: string): any {
    const tempA = parseInt(a);
    const tempB = parseInt(b);
    return this.appService.getSum(tempA, tempB);
  }
  @Get('/sum')
  getSum1(@Query('a') a: string, @Query('b') b: string): any {
    const tempA = parseInt(a);
    const tempB = parseInt(b);
    return this.appService.getSum(tempA, tempB);
  }
  @Get('/Op/:a/:b/:op') getOp(
    @Param('a') a: string,
    @Param('b') b: string,
    @Param('op') op: string,
  ): any {
    const tempA = parseInt(a);
    const tempB = parseInt(b);
    switch (op) {
      case '+':
        return this.appService.getSum(tempA, tempB);
      case '-':
        return this.appService.getSub(tempA, tempB);
      case '*':
        return this.appService.getMul(tempA, tempB);
      case '/':
        return this.appService.getDiv(tempA, tempB);
    }
  }
}
