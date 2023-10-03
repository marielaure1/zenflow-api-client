import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Patch, 
  Delete, 
  Body,
  Param,
  Res,
  HttpStatus
} from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { AppService } from '@/app.service';
import { Response } from 'express';
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@Controller()
export abstract class AppController<Service extends AppService<AppModel, CreateDto, UpdateDto>, AppModel extends Document, CreateDto, UpdateDto> {
  constructor(
    private readonly service: Service
    ) {}

  @Post()
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  async create(@Body() createDto: CreateDto, @Res() res: Response) {
    try{
      const createResponse = await this.service.create(createDto);
      res.status(HttpStatus.OK).json([
        createResponse
      ]);

    } catch(error){
        console.log(error);
    }

  }

  @Get()
  async findAll(): Promise<AppModel[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AppModel> {
    return this.service.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto): Promise<AppModel> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
