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

  @Get()
  findAll() {
    return this.sharesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharesService.findOne(+id);
  }


}
