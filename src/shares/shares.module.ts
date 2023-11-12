import { Module } from '@nestjs/common';
import { SharesService } from './shares.service';
import { SharesController } from './shares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shares } from './entities/share.entity';
import { Auth } from 'src/auth/decorators';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SharesController],
  providers: [SharesService],
  imports: [
    TypeOrmModule.forFeature([ Shares ]),
    AuthModule,
    
  ]
})
export class SharesModule {}
