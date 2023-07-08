const route = require(`express`).Router();
const { buildResponse } = require(`../helper/buildRes`);
const { getAllUsers, postCreateUser } = require(`../service/api.service`);

route.get(`/`, async (request, response) => {
    try {
        const data = await getAllUsers();

        buildResponse(response, 200, data);
    } catch (error) {
        buildResponse(response, 404, error.message)
    }
})

route.post(`/`, async (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = await postCreateUser(name, surname, email, pwd);

        buildResponse(response, 200, data);
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
})


module.exports = route;