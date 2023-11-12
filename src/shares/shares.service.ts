import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { User } from 'src/auth/entities';
import { Repository } from 'typeorm';
import { CreateShareDto } from './dto/create-share.dto';
import { Shares } from './entities/share.entity';

@Injectable()
export class SharesService {

  constructor(
      @InjectRepository(Shares)
      private readonly sharesRepository: Repository<Shares>,
      @InjectRepository(Shares)
      private readonly userRepository: Repository<User>,
  ) {}

  async buyShares(createShareDto: CreateShareDto, user : User) {
    try {
      const shares = this.sharesRepository.create({
        ...createShareDto, user,
      });
      await this.sharesRepository.save( shares );
      const { user: omitUser, ...sharesWithoutUser } = shares;
      return {
        userId: user.id,
        ...sharesWithoutUser,
      };
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')      
    }
  }

  findAll() {
    return this.sharesRepository.find({});
  }

  findOne(buyId: string) {
    return this.sharesRepository.findOneBy({buyId});
  }

  
}