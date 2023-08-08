import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSum(a: number, b: number): number {
    return a + b;
  }
  getSub(a: number, b: number): number {
    return a - b;
  }
  getMul(a: number, b: number): number {
    return a * b;
  }
  getDiv(a: number, b: number): number {
    return a / b;
  }
}
