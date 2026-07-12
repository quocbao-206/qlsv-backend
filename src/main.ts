import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { networkInterfaces } from "os";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Trỏ đúng vào thư mục public của qlsv-fixed (đường dẫn tương đối, chạy được ở mọi máy)
  app.useStaticAssets(join(process.cwd(), "public"));

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port, "0.0.0.0");

  const nets = networkInterfaces();
  let localIP = "localhost";
  for (const iface of Object.values(nets)) {
    for (const net of iface ?? []) {
      if (net.family === "IPv4" && !net.internal) {
        localIP = net.address;
        break;
      }
    }
  }

  console.log(`Sinh viên đang chạy tại http://localhost:${port}`);
  console.log(`Truy cập từ điện thoại: http://${localIP}:${port}`);
  console.log(`Trang login: http://${localIP}:${port}/index.html`);
}
bootstrap();
