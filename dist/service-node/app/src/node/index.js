"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const api_1 = require("@vtex/api");
// Routes
const routes_1 = __importDefault(require("./routes"));
// Clients
const clients_1 = require("./clients");
const SIX_SECONDS_MS = 6 * 1000;
const clients = {
    implementation: clients_1.Clients,
    options: {
        // All IO Clients will be initialized with these options, unless otherwise specified.
        default: {
            retries: 3,
            timeout: SIX_SECONDS_MS,
        },
    },
};
exports.default = new api_1.Service({
    clients,
    routes: routes_1.default,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7QUFDZixtQ0FNa0I7QUFFbEIsU0FBUztBQUNULHNEQUE2QjtBQUU3QixVQUFVO0FBQ1YsdUNBQW1DO0FBRW5DLE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUE7QUFPL0IsTUFBTSxPQUFPLEdBQTJCO0lBQ3RDLGNBQWMsRUFBRSxpQkFBTztJQUN2QixPQUFPLEVBQUU7UUFDUCxxRkFBcUY7UUFDckYsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsY0FBYztTQUN4QjtLQUNGO0NBQ0YsQ0FBQTtBQUVELGtCQUFlLElBQUksYUFBTyxDQUFnQztJQUN4RCxPQUFPO0lBQ1AsTUFBTSxFQUFOLGdCQUFNO0NBQ1AsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQge1xuICBTZXJ2aWNlLFxuICBTZXJ2aWNlQ29udGV4dCxcbiAgUmVjb3JkZXJTdGF0ZSxcbiAgQ2xpZW50c0NvbmZpZyxcbiAgUGFyYW1zQ29udGV4dCxcbn0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG4vLyBSb3V0ZXNcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIENsaWVudHNcbmltcG9ydCB7IENsaWVudHMgfSBmcm9tICcuL2NsaWVudHMnXG5cbmNvbnN0IFNJWF9TRUNPTkRTX01TID0gNiAqIDEwMDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICB0eXBlIFN0YXRlID0gUmVjb3JkZXJTdGF0ZVxuICB0eXBlIENvbnRleHQgPSBTZXJ2aWNlQ29udGV4dDxDbGllbnRzLCBTdGF0ZSwgUGFyYW1zQ29udGV4dD5cbn1cblxuY29uc3QgY2xpZW50czogQ2xpZW50c0NvbmZpZzxDbGllbnRzPiA9IHtcbiAgaW1wbGVtZW50YXRpb246IENsaWVudHMsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBBbGwgSU8gQ2xpZW50cyB3aWxsIGJlIGluaXRpYWxpemVkIHdpdGggdGhlc2Ugb3B0aW9ucywgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0cmllczogMyxcbiAgICAgIHRpbWVvdXQ6IFNJWF9TRUNPTkRTX01TLFxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlPENsaWVudHMsIFN0YXRlLCBQYXJhbXNDb250ZXh0Pih7XG4gIGNsaWVudHMsXG4gIHJvdXRlcyxcbn0pXG4iXX0=