// const db = require("../../config/db.config")
// const hashToken = require("../utils/hashToken")

const { JsonWebTokenError } = require("jsonwebtoken")

// //! used when we create a refresh token
// function addRefreshTokenToWhitelist({
//     jti, refreshToken, idUsuario
// }) {
//     return db.refreshToken.create({
//         data: {
//             idRefreshToken: jti,
//             hashToken: hashToken(refreshToken),
//             idUsuario
//         }
//     })
// }

// //! used to check if the token sent by the client is in the database
// function findRefreshTokenById(id) {
//     return db.refreshToken.findUnique({
//         where: {
//             id
//         }
//     })
// }

// //! soft delete tokens after usage
// function deleteRefreshToken(id) {
//     return db.refreshToken.update({
//         where: {
//             id
//         },
//         data: {
//             revoked: true
//         }
//     })
// }

// function revokeTokens(idUsuario) {
//     return db.refreshToken.updateMany({
//         where: {
//             idUsuario
//         },
//         data: {
//             revoked: true
//         }
//     })
// }

// module.exports = {
//     addRefreshTokenToWhitelist,
//     findRefreshTokenById,
//     deleteRefreshToken,
//     revokeTokens
// }

const jwt = require("jsonwebtoken")
const { unless } = require("express-unless")
const { application } = require("express")

const auth = (req, res, next) => {
    try {
        let token = req.headers['authorization']
        if (!token) {
            throw new Error("El usuario no se encuentr logueado.")
        }
        token = token.replace("Bearer ", "")
        jwt.verify(token, "Secret", (err, usuario) => {
            if (err) {
                throw new Error("token invalido")
            }
        })
        next();
    } catch (error) {
        res.status(413).send(error)
    }
}

auth.unless = unless;

module.exports = auth