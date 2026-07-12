"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const sinh_vien_module_1 = require("./sinh-vien/sinh-vien.module");
const giang_vien_module_1 = require("./giang-vien/giang-vien.module");
const hoc_phan_module_1 = require("./hoc-phan/hoc-phan.module");
const lop_hoc_phan_module_1 = require("./lop-hoc-phan/lop-hoc-phan.module");
const dang_ky_hoc_module_1 = require("./dang-ky-hoc/dang-ky-hoc.module");
const diem_danh_module_1 = require("./diem-danh/diem-danh.module");
const bai_tap_module_1 = require("./bai-tap/bai-tap.module");
const diem_ren_luyen_module_1 = require("./diem-ren-luyen/diem-ren-luyen.module");
const su_kien_module_1 = require("./su-kien/su-kien.module");
const payment_module_1 = require("./payment/payment.module");
const phieu_yeu_cau_module_1 = require("./phieu-yeu-cau/phieu-yeu-cau.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: +process.env.DB_PORT || 3306,
                username: process.env.DB_USER || 'root',
                password: process.env.DB_PASS || '',
                database: process.env.DB_NAME || 'qlsv',
                autoLoadEntities: true,
                synchronize: false,
            }),
            auth_module_1.AuthModule,
            sinh_vien_module_1.SinhVienModule,
            giang_vien_module_1.GiangVienModule,
            hoc_phan_module_1.HocPhanModule,
            lop_hoc_phan_module_1.LopHocPhanModule,
            dang_ky_hoc_module_1.DangKyHocModule,
            diem_danh_module_1.DiemDanhModule,
            bai_tap_module_1.BaiTapModule,
            diem_ren_luyen_module_1.DiemRenLuyenModule,
            su_kien_module_1.SuKienModule,
            payment_module_1.PaymentModule,
            phieu_yeu_cau_module_1.PhieuYeuCauModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map