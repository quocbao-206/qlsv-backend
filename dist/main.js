"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const os_1 = require("os");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(process.cwd(), "public"));
    app.enableCors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
    });
    const port = process.env.PORT ?? 3001;
    await app.listen(port, "0.0.0.0");
    const nets = (0, os_1.networkInterfaces)();
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
//# sourceMappingURL=main.js.map