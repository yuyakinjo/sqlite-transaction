import { User } from '../user/entities/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: './src/database.sqlite',
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
