import { Controller, Get, Param, Render } from '@nestjs/common';
import { UserPicksGetResponseDto } from './dtos/picks-get.response.dto';

@Controller()
export class PicksController {
  constructor() {}

  @Get('/picks/:uuid')
  @Render('pages/picks.ejs')
  async picks(@Param('uuid') uuid: string): Promise<{
    title: string;
    pageTitle: string;
    user: UserPicksGetResponseDto;
  }> {
    let user: UserPicksGetResponseDto | undefined;
    if (uuid === 'some-uuid-1') {
      user = new UserPicksGetResponseDto({
        uuid: 'some-uuid-1',
        rank: 1,
        name: 'Kirby',
        // previousPicks
        // currentPicks
      });
    }

    if (!user) {
      // TODO: 404 page/response
    }

    return {
      // TODO: title could be league name
      title: "Em's League",
      pageTitle: 'My Picks',
      user,
    };
  }
}
