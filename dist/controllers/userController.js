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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDummyData = void 0;
// Get some dummy data
const getDummyData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = [
            { _id: "1", name: "Alice", email: "alice@example.com" },
            { _id: "2", name: "Bob", email: "bob@example.com" },
            { _id: "3", name: "Charlie", email: "charlie@example.com" },
        ];
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getDummyData = getDummyData;
//# sourceMappingURL=userController.js.map