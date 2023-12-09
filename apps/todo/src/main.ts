import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // set up gRPC microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TodoModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../todo.proto'), // path to proto file (in dist folder)
        package: 'todo', // package name defined in proto file
      },
    },
  );
  await app.listen();
}
bootstrap();
