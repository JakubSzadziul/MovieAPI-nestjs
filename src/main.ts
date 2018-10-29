import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as swStats from 'swagger-stats';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Movie example')
    .setDescription('Movie API desc')
    .setVersion('1.1')
    .addTag('Movies')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(swStats.getMiddleware());
  await app.listen(3000);
}
bootstrap();
