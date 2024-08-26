import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { OrdersModule } from './orders/orders.module';

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
    UsersModule, ProductsModule, AuthModule, CommonModule, OrdersModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
