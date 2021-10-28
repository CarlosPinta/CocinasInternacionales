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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientController = void 0;
const database_1 = __importDefault(require("../database"));
class ClientController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield database_1.default.query("SELECT * FROM cliente");
            res.json(clients);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const clients = yield database_1.default.query('SELECT * FROM cliente WHERE CODIGOCLIENTE = ?', [id]);
            if (clients.length > 0) {
                return res.json(clients[0]);
            }
            else {
                res.status(404).json({ text: "Cliente no encontrado" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO cliente set ?", [req.body]);
            res.json({ message: "Juego Guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM cliente WHERE CODIGOCLIENTE= ?", [id]);
            res.json({ name: "El cliente fue eliminado con exito" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE cliente set ? WHERE CODIGOCLIENTE= ?", [req.body, id]);
            res.json({ name: "El cliente fue modificado con exitoJ con exito" });
        });
    }
}
exports.clientController = new ClientController();
