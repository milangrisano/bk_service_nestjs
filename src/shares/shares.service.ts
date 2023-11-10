import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShareDto } from './dto/create-share.dto';
import { UpdateShareDto } from './dto/update-share.dto';
import { Shares } from './entities/share.entity';

@Injectable()
export class SharesService {

  constructor(
    @InjectRepository(Shares)
    private readonly sharesRepository: Repository<Shares>
  ){}

  async create(createShareDto: CreateShareDto) {
    try {
      const shares = this.sharesRepository.create(createShareDto);
      await this.sharesRepository.save( shares );
      return shares;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda')      
    }
  }

  findAll() {
    return `This action returns all shares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} share`;
  }

  update(id: number, updateShareDto: UpdateShareDto) {
    return `This action updates a #${id} share`;
  }

  remove(id: number) {
    return `This action removes a #${id} share`;
  }
}
