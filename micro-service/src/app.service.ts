import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNextLaunchRemainingTime(): string {
    return '1st Jan 2025';
  }
}
