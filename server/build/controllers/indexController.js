"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: "Esto es un controlador de index" });
    }
}
exports.indexController = new IndexController();
