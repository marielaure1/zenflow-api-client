import { Module } from '@nestjs/common';
import { ClientsService } from '@/clients/clients.service';
import { ClientsController } from '@/clients/clients.controller';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
