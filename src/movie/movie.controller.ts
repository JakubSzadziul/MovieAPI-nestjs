import { Get, Controller, Body, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {
  }

  @Post()
  async saveMovie(@Body() createMovieDto: CreateMovieDto) {
    this.movieService.saveToDb(createMovieDto);
  }

  @Get('getall')
  async findAll() {
    return this.movieService.findAll();
  }

  @Post('delete')
  async delete(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.delete(createMovieDto);
  }
}