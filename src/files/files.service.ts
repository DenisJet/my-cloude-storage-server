import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  create(file: Express.Multer.File, userId: number) {
    return this.repository.save({
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      user: { id: userId },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} file`;
  // }

  // update(id: number, updateFileDto: UpdateFileDto) {
  //   return `This action updates a #${id} file`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} file`;
  // }
}
