import { v4 as uuidv4 } from 'uuid';
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda and Github! ${uuidv4()}`),
    };
    return response;
};