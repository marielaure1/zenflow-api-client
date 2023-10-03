import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api ZenFlow')
    .setDescription('Api for a CRM/Workflow application with modules.')
    .setVersion('1.0.0')
    .addTag('ZenFlow')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.setGlobalPrefix('api/v1.0.0');
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
