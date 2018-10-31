import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';


@Module({
  imports: [MongooseModule.forRoot(`mongodb://mongodb:27017/moviezz`), MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
