import { Controller, Get, Render } from '@nestjs/common';
import { UserStandingsGetResponseDto } from './dtos/standings-get.response.dto';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('pages/home.ejs')
  async root(): Promise<{
    title: string;
    pageTitle: string;
    users: UserStandingsGetResponseDto;
  }> {
    const users = new UserStandingsGetResponseDto([
      {
        uuid: 'some-uuid-1',
        name: 'Kirby',
        totalPoints: 182,
        totalWinnings: 45.0,
        gamesCorrect: 37,
        confidencePercent: 0.591,
        fiveDollarBetPerConfPoint: 197.27,
        percentCorrect: 0.48,
        ptsPerCorrectPick: 4.92,
      },
      {
        uuid: 'some-uuid-2',
        name: 'Loren',
        totalPoints: 177,
        totalWinnings: 27.5,
        gamesCorrect: 42,
        confidencePercent: 0.575,
        fiveDollarBetPerConfPoint: 149.55,
        percentCorrect: 0.55,
        ptsPerCorrectPick: 4.21,
      },
    ]);

    return {
      // TODO: title could be league name
      title: "Em's League",
      pageTitle: 'Home',
      ...users,
    };
  }
}
