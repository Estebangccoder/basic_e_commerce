import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'bmbanqpmkw5n3jhhsd6v-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uqq3wqithblbt3ae',
      password: 'hLNnLQaIEqGmIGnhCKMD',
      database: 'bmbanqpmkw5n3jhhsd6v',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Con esto las entidades automaticamente se cargaran
      synchronize: true
    }), 
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
