"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
class clientRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientController_1.clientController.list);
        this.router.get('/:id', clientController_1.clientController.getOne);
        this.router.post('/', clientController_1.clientController.create);
        this.router.delete('/:id', clientController_1.clientController.delete);
        this.router.put('/:id', clientController_1.clientController.update);
    }
}
const client_Routes = new clientRoutes();
exports.default = client_Routes.router;
