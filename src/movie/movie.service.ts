import { Model } from 'mongoose';
import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import fetch from 'node-fetch';

@Injectable()
export class MovieService {
  constructor(@Inject('MovieModelToken') private readonly movieModel: Model) {
  }

  async saveToDb(createMovieDto: CreateMovieDto) {
    const movieData = await this.getDataFromExtAPI(createMovieDto);
    if (movieData.Response == 'True') {
        const createdMovie = new this.movieModel(movieData);
        return await createdMovie.save();
    } else {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async getDataFromExtAPI(movieDto: CreateMovieDto) {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=203bbd29&t=' + movieDto.title);
    return await response.json();
  }

  async findAll() {
    return await this.movieModel.find().exec();
  }

  async delete(movieDto: CreateMovieDto) {
    return await this.movieModel.deleteOne({ Title: movieDto.title });
  }

  async findByMovieTitle (movieDto: CreateMovieDto) {
    return await this.movieModel.find({ Title: movieDto.title })
  }

  async findByMovieTitleParam (title: string) {
    return await this.movieModel.find({ Title: title })
  }
}
