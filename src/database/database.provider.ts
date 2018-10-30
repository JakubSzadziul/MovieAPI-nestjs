import * as mongoose from 'mongoose';

export const dbPass = process.env.DBPASS;
export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://SamuraiiJack:${dbPass}@ds133533.mlab.com:33533/moviezz`),
  },
];