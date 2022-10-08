const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

const jwtFrom = ({ headers }) => {
    console.log(headers);
    console.log(headers.host);
    console.log(headers["user-agent"]);
    console.log(headers["authorization"]);
    // console.log(headers["authorization"]);
    // console.log(headers.authorization);
    if (headers?.authorization) {

        const [scheme, token] = headers.authorization.split(" ");
        if (scheme.trim() === "Bearer") {
            return token;
        }
    }
    return undefined;
};

const extractUserFromJwt = (req, res, next) => {
    try {
        // console.log(req);
        const token = jwtFrom(req);
        if (token) {
            res.locals.user = jwt.verify(token, SECRET_KEY);
        }
        return next();
    } catch (error) {
        return next();
    }
};

const requireAuthenticatedUser = (req, res, next) => {
    try {
        const { user } = res.locals;
        if (!user?.email) {
            throw new UnauthorizedError();
        }
        return next();
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    extractUserFromJwt,
    requireAuthenticatedUser,
};
