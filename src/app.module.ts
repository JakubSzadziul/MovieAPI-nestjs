import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';
import {dbPass} from './database/database.provider';


@Module({
  imports: [MongooseModule.forRoot(`mongodb://SamuraiiJack:${dbPass}@ds133533.mlab.com:33533/moviezz`), MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
