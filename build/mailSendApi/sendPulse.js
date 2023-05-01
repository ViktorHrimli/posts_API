"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPulseSendMail = void 0;
var sendpulse = require("sendpulse-api");
var path = require("path");
/*
 * https://login.sendpulse.com/settings/#api
 */
var axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.headers.common.Authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIzMWU0ODNhNmQ3MTI1MTkyY2NmZmI4NGFiMWIxMzBlNGI1NGIzZmJkODEwYzA5ODRlZjQzMGIwNTZhMWVjMmQ0YTk0MmU5MjJiYTkwNWUzIn0.eyJhdWQiOiJlMmVhYzQyMzEwYjhjNDJmMDdlOTU0Zjk2NmZjYTE3ZCIsImp0aSI6IjIzMWU0ODNhNmQ3MTI1MTkyY2NmZmI4NGFiMWIxMzBlNGI1NGIzZmJkODEwYzA5ODRlZjQzMGIwNTZhMWVjMmQ0YTk0MmU5MjJiYTkwNWUzIiwiaWF0IjoxNjgyNjI3MDQ3LCJuYmYiOjE2ODI2MjcwNDcsImV4cCI6MTY4MjYzMDY0Nywic3ViIjoiIiwic2NvcGVzIjpbXSwidXNlciI6eyJpZCI6ODMwMDE0NSwiZ3JvdXBfaWQiOm51bGwsInBhcmVudF9pZCI6bnVsbCwiY29udGV4dCI6eyJhY2NsaW0iOiIwIn0sImFyZWEiOiJyZXN0In19.vpd2seAdvfntt_9JtSFjGXxqrNyaENMCegRSXq_gvf5pwUfaAiCbMCP7iedCUFr8YQAQuvkoNwZ0s06DjQTLDzfb3DiqDcSb9q_Jj2UB_8a254-awj-P5w-ES8Hq11sM1AE47EbB20FhPffHJiKIyEcGax31mpXmXzbOipOj6h7KYbLakrTtglqLBTt0gll3r6-8i0sSPgHtWKYVxz6L6LDJk-o6j0clRuA_IOX9pbMy7mpg1b1dykuwsmnz8eH741bmmu7u0jp8uxOEvgeQ9r1a7E9YcjnG78Lj5ePFBwzBn_lEOvdTeAnt7RJ-RKLqOvvYaIbWxn2fa59HMKykcw";
var _a = process.env, API_USER_ID = _a.API_USER_ID, API_SECRET = _a.API_SECRET;
var TOKEN_STORAGE = path.resolve("src/tmp/");
sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function () {
    sendpulse.listAddressBooks(console.log);
    // sendpulse.addSender(console.log, "Sender", "ceo@yoyoteam.com.ua");
});
var sendPulseSendMail = function (name, surname, userMail, phone) { return __awaiter(void 0, void 0, void 0, function () {
    var optionsAccesTokenRes, emailOpt, email;
    return __generator(this, function (_a) {
        optionsAccesTokenRes = {
            grant_type: "client_credentials",
            client_id: API_USER_ID,
            client_secret: API_SECRET,
        };
        emailOpt = {
            email: {
                html: "\n    <html>\n      <body>\n        <h2>Contact Information</h2>\n\n        <p><strong>Name:</strong>".concat(name, "</p>\n\n        <p><strong>Surname:</strong> ").concat(surname, "</p>\n\n         <p><strong>Email:</strong> ").concat(userMail, "</p>\n\n        <p><strong>Phone:</strong>").concat(phone, "</p>\n\n      </body>\n    </html>"),
                text: "HUUUURAAAAY new Customer!!!",
                subject: "I want buy picture!",
                from: {
                    name: "Sender",
                    email: "ceo@yoyoteam.com.ua",
                },
                to: [
                    {
                        name: "Viktor",
                        email: "viktorhrimli101@gmail.com",
                    },
                ],
            },
        };
        email = "ceo@yoyoteam.com.ua";
        return [2 /*return*/];
    });
}); };
exports.sendPulseSendMail = sendPulseSendMail;
