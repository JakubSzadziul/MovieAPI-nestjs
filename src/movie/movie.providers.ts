import { Connection } from 'mongoose';
import { MovieSchema } from './schema/movie.schema';

export const movieProviders = [
  {
    provide: 'MovieModelToken',
    useFactory: (connection: Connection) => connection.model('Movie', MovieSchema),
    inject: ['DbConnectionToken'],
  },
];