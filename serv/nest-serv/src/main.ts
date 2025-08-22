import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.PORT ?? 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`서버가 실행 중입니다: http://localhost:${port}`);  
}
bootstrap();