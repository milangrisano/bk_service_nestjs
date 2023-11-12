import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharesService } from './shares.service';
import { CreateShareDto } from './dto/create-share.dto';
import { BuySharesDto } from './dto/buy-shares.dto';
import { share } from 'rxjs';
import { User } from 'src/auth/entities';
import { Auth, GetUser } from 'src/auth/decorators';

@Controller('shares')
export class SharesController {
  constructor(
    private readonly sharesService: SharesService
  ) {}

  @Post('buy_share')
  @Auth()
  create(
    @Body() buyShareDto: BuySharesDto,
    @GetUser() user: User
  ) {
    return this.sharesService.buyShares(buyShareDto, user);
  }

  @Get('total_shares')
  @Auth()
  findAll() {
    return this.sharesService.findAll();
  }
  //Todo: Los usuarios solo pueden consultar la info de su banko
  //todo: Se debe hacer un guards o un decorador que solo te de acceso a tu banko

  @Get(':buyId')
  findOne(@Param('buyId') buyId: string) {
    return this.sharesService.findOne(buyId);
  }

  @Get(':userId')
  findOneId(@Param('userId') userId: string) {
    return this.sharesService.findOne(userId);
  }


}
