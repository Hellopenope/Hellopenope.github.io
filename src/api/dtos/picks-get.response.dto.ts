export class UserPicksGetResponseDto {
  constructor(dto: any) {
    this.uuid = dto.uuid;
    this.name = dto.name;
    this.rank = dto.rank;
  }

  readonly uuid: string;
  readonly name: string;
  readonly rank: number;
}
