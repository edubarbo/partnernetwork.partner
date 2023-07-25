"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = void 0;
const api_1 = require("@vtex/api");
// Clients
const PartnerVTEXServices_1 = __importDefault(require("./PartnerVTEXServices"));
// Extend the default IOClients implementation with our own custom clients.
class Clients extends api_1.IOClients {
    get partnerVtexServices() {
        return this.getOrSet('partnerVtexServices', PartnerVTEXServices_1.default);
    }
}
exports.Clients = Clients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFxQztBQUVyQyxVQUFVO0FBQ1YsZ0ZBQXVEO0FBRXZELDJFQUEyRTtBQUMzRSxNQUFhLE9BQVEsU0FBUSxlQUFTO0lBQ3BDLElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSw2QkFBbUIsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7Q0FDRjtBQUpELDBCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU9DbGllbnRzIH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG4vLyBDbGllbnRzXG5pbXBvcnQgUGFydG5lclZURVhTZXJ2aWNlcyBmcm9tICcuL1BhcnRuZXJWVEVYU2VydmljZXMnXG5cbi8vIEV4dGVuZCB0aGUgZGVmYXVsdCBJT0NsaWVudHMgaW1wbGVtZW50YXRpb24gd2l0aCBvdXIgb3duIGN1c3RvbSBjbGllbnRzLlxuZXhwb3J0IGNsYXNzIENsaWVudHMgZXh0ZW5kcyBJT0NsaWVudHMge1xuICBwdWJsaWMgZ2V0IHBhcnRuZXJWdGV4U2VydmljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQoJ3BhcnRuZXJWdGV4U2VydmljZXMnLCBQYXJ0bmVyVlRFWFNlcnZpY2VzKVxuICB9XG59XG4iXX0=