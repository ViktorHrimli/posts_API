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
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var uniqid_1 = __importDefault(require("uniqid"));
var storage_1 = require("../mailSendApi/storage");
var clodunari_1 = require("../mailSendApi/clodunari");
var sendPulse_1 = require("../mailSendApi/sendPulse");
var fs = require("fs/promises");
var Profile = require("../modle/model").Profile;
var router = express_1.default.Router();
var _a = process.env, API_USER_ID = _a.API_USER_ID, API_SECRET = _a.API_SECRET;
router.get("/users", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Profile.find({})];
            case 1:
                users = _a.sent();
                res.json(users);
                return [2 /*return*/];
        }
    });
}); });
router.post("/sendpulse", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, surname, userMail, phone;
    return __generator(this, function (_b) {
        _a = req.body, name = _a.name, surname = _a.surname, userMail = _a.email, phone = _a.phone;
        (0, sendPulse_1.sendPulseSendMail)(name, surname, userMail, phone);
        return [2 /*return*/];
    });
}); });
router.post("/send", storage_1.upload.single("photo"), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, surname, email, phone, url;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, surname = _a.surname, email = _a.email, phone = _a.phone;
                if (!!req.file) return [3 /*break*/, 1];
                res.status(400).json({ msg: "Filed" });
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, (0, clodunari_1.uploadPhotoOnCloud)(req.file.path, (0, uniqid_1.default)().toString())];
            case 2:
                url = _b.sent();
                return [4 /*yield*/, axios_1.default
                        .post("https://api.elasticemail.com/v2/email/send?apikey=A0F18FD1F9C1B48C9EA88D64ED4B9F76F0EA620BF1E2BE560CF5630ED3DC08575A52C0E7FFE56DDF3AE4A893F675750C&bodyHtml=<html><body><h2>Contact Information</h2><p><strong>Name:</strong>".concat(name, "</p><p><strong>Surname:</strong> ").concat(surname, "</p><p><strong>Email:</strong> ").concat(email, "</p><p><strong>Phone:</strong>").concat(phone, "</p> <div><img src=").concat(url, " alt='photo' /> </div></body></html>&from=viktor_hrimli@meta.ua&to=viktorhrimli101@gmail.com"))
                        .then(function (res) { return console.log(res.data); })];
            case 3:
                _b.sent();
                return [4 /*yield*/, fs
                        .unlink(req.file.path)
                        .then(console.log("file destroy"))
                        .catch(function (e) { return console.log(e.message); })];
            case 4:
                _b.sent();
                res.status(200).json({ name: name, surname: surname, email: email, phone: phone, url: url });
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
