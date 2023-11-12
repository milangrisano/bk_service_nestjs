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
  ) {}

  async buyShares(createShareDto: CreateShareDto, user : User) {
    try {
      const shares = this.sharesRepository.create({
        ...createShareDto, user
      });
      await this.sharesRepository.save( shares );
      return { 
        shares      
      } ;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')      
    }
  }
  //Todo: La respuesta no debe mostrar todoa la informacion del usuario

  create(createShareDto: CreateShareDto) {
    return 'This action adds a new share';
  }

  findAll() {
    return `This action returns all shares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} share`;
  }
}
