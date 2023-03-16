class ExampleController {
    static getStatus(req, res) {
        try {
            const validate = true;
            if (!validate) {
                throw new Error(JSON.stringify('La validación es falsa'));
            }
            return res.json("Servidor ejecutandose correctamente");
        } catch (err) {
            return res.status(400).json({
                message: 'Error al ejecutar el servidor',
                error: JSON.parse(err.message)
            });
        }
    }
    static getHandlebar(req, res) {
        try {
            return res.render('example', {
                style: 'example.css',
                title: "example",
                message: "Este es un ejemplo de Handlebars"
            })
        } catch (err) {
            return res.status(400).json({
                message: 'Error al mostrar el handlebar'
            });
        }
    }
}
export default ExampleController;