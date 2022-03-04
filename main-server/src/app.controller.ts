import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  client: ClientProxy;

  constructor(private readonly appService: AppService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    });
  }

  @Get('next-launch')
  getNextLaunchRemainingTime() {
    return this.client.send<string, string>(
      'get-next-launch-remaining-time',
      '',
    );
  }
}
