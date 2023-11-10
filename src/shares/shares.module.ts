import { Module } from '@nestjs/common';
import { SharesService } from './shares.service';
import { SharesController } from './shares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shares } from './entities/share.entity';

@Module({
  controllers: [SharesController],
  providers: [SharesService],
  imports:[TypeOrmModule.forFeature([ Shares ])]
})
export class SharesModule {}
