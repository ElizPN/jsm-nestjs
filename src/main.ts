import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './utils/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // pipe happens before the controller
  app.useGlobalInterceptors(new TransformInterceptor()); // interceptor happens after the controller
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
