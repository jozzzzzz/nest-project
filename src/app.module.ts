import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot('mongodb+srv://jonathanhayot:vI4qBM9W5A8G3eqr@nest.ahvwnmk.mongodb.net/?retryWrites=true&w=majority&appName=Nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
