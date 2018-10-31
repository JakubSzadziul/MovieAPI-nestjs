import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://mongodb:27017/moviezz`),
  },
];