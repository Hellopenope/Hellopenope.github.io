import { numberToPercent } from 'utils/numberToPercent';
import { numberToUSD } from 'utils/numberToUSD';

class UserStandingsGetDto {
  constructor(dto: any) {
    this.uuid = dto.uuid;
    this.name = dto.name;
    this.totalPoints = dto.totalPoints;
    this.totalWinnings = numberToUSD(dto.totalWinnings);
    this.gamesCorrect = dto.gamesCorrect;
    this.confidencePercent = numberToPercent(dto.confidencePercent);
    this.fiveDollarBetPerConfPoint = numberToUSD(dto.fiveDollarBetPerConfPoint);
    this.percentCorrect = numberToPercent(dto.percentCorrect);
    this.ptsPerCorrectPick = dto.ptsPerCorrectPick;
  }

  readonly uuid: string;
  readonly name: string;
  readonly totalPoints: number;
  readonly totalWinnings: string;
  readonly gamesCorrect: number;
  readonly confidencePercent: string;
  readonly fiveDollarBetPerConfPoint: string;
  readonly percentCorrect: string;
  readonly ptsPerCorrectPick: number;
}

export class UserStandingsGetResponseDto {
  constructor(users: any) {
    this.users = users.map((user: any) => new UserStandingsGetDto(user));
  }

  readonly users;
}
