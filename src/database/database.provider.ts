import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://SamuraiiJack:Neotest123@ds133533.mlab.com:33533/moviezz'),
  },
];