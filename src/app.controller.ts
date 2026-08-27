import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(this.appService);
    return this.appService.getHello();
    // is it true that this creates object with appService property and stores
    // refference to object with appService property,

    // Why creates instance of appService service?
    // And most importannt when is it crateed?

    // do we create insanse of appService in constructor or in 11 line esing this?
  }
}
