import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('pages/home.ejs')
  root(): Record<string, string> {
    return { title: 'College Pickem', pageTitle: 'Home' };
  }
}
