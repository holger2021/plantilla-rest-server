
const usersGet = (request, response) => {
    response.json({
        msg: 'Get response'
    });
}

const usersPost = (request, response) => {
    const id = request.params.id;
    response.json({
        msg: 'Post response',
        id
    });
}
const usersPut = (request, response) => {
    const {
        nombre = 'holger',
        apellido = 'gomez',
        cargo = 'ingeniero de sistemas'
    } = request.query;

    response.json({
        msg: 'Put response',
        nombre,
        apellido,
        cargo
    });
}

const usersPatch = (request, response) => {
    response.json({
        msg: 'Patch response'
    });
}

const usersDelete = (request, response) => {
    response.json({
        msg: 'Delete response'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}
