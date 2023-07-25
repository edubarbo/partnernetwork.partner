"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGql = void 0;
// Dependencies
const form_data_1 = __importDefault(require("form-data"));
const async_busboy_1 = __importDefault(require("async-busboy"));
const co_body_1 = require("co-body");
async function handleGql(ctx, next) {
    if (ctx.request.is('multipart/*')) {
        const formData = new form_data_1.default();
        const { fields, files } = await async_busboy_1.default(ctx.req);
        Object.entries(fields).forEach(([key, value]) => {
            formData.append(key, value);
        });
        files === null || files === void 0 ? void 0 : files.forEach((file, index) => {
            formData.append(`${index + 1}`, file);
        });
        const response = await ctx.clients.partnerVtexServices.getDataWithFormData(formData, {
            headers: formData.getHeaders(),
        });
        ctx.body = response;
    }
    else {
        const body = await co_body_1.json(ctx.req);
        const { query, variables } = body;
        const response = await ctx.clients.partnerVtexServices.getDataByQuery({
            query,
            variables,
        });
        ctx.body = response.data;
    }
    await next();
}
exports.handleGql = handleGql;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yb3V0ZXMvZ3FsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGVBQWU7QUFDZiwwREFBZ0M7QUFDaEMsZ0VBQXNDO0FBQ3RDLHFDQUE4QjtBQUV2QixLQUFLLFVBQVUsU0FBUyxDQUFDLEdBQVksRUFBRSxJQUF3QjtJQUNwRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBRS9CLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVwRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFFRixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUN4RSxRQUFRLEVBQ1I7WUFDRSxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRTtTQUMvQixDQUNGLENBQUE7UUFFRCxHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQTtLQUNwQjtTQUFNO1FBQ0wsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRWhDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBRWpDLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7WUFDcEUsS0FBSztZQUNMLFNBQVM7U0FDVixDQUFDLENBQUE7UUFFRixHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUE7S0FDekI7SUFFRCxNQUFNLElBQUksRUFBRSxDQUFBO0FBQ2QsQ0FBQztBQXBDRCw4QkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnXG5pbXBvcnQgYXN5bmNCdXNib3kgZnJvbSAnYXN5bmMtYnVzYm95J1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ2NvLWJvZHknXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVHcWwoY3R4OiBDb250ZXh0LCBuZXh0OiAoKSA9PiBQcm9taXNlPGFueT4pIHtcbiAgaWYgKGN0eC5yZXF1ZXN0LmlzKCdtdWx0aXBhcnQvKicpKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgY29uc3QgeyBmaWVsZHMsIGZpbGVzIH0gPSBhd2FpdCBhc3luY0J1c2JveShjdHgucmVxKVxuXG4gICAgT2JqZWN0LmVudHJpZXMoZmllbGRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKVxuICAgIH0pXG5cbiAgICBmaWxlcz8uZm9yRWFjaCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChgJHtpbmRleCArIDF9YCwgZmlsZSlcbiAgICB9KVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjdHguY2xpZW50cy5wYXJ0bmVyVnRleFNlcnZpY2VzLmdldERhdGFXaXRoRm9ybURhdGEoXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczogZm9ybURhdGEuZ2V0SGVhZGVycygpLFxuICAgICAgfVxuICAgIClcblxuICAgIGN0eC5ib2R5ID0gcmVzcG9uc2VcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQganNvbihjdHgucmVxKVxuXG4gICAgY29uc3QgeyBxdWVyeSwgdmFyaWFibGVzIH0gPSBib2R5XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGN0eC5jbGllbnRzLnBhcnRuZXJWdGV4U2VydmljZXMuZ2V0RGF0YUJ5UXVlcnkoe1xuICAgICAgcXVlcnksXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSlcblxuICAgIGN0eC5ib2R5ID0gcmVzcG9uc2UuZGF0YVxuICB9XG5cbiAgYXdhaXQgbmV4dCgpXG59XG4iXX0=