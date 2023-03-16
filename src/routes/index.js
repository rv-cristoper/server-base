import exampleRouter from "./example.router.js";

class RoutesController {
    static createRoutes(app) {
        app.use('', exampleRouter);
    };
}
export default RoutesController;