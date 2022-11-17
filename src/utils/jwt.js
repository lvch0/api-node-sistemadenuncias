const jwt = require("jsonwebtoken")

function generateToken(usuario) {
    return jwt.sign({
        idusuario: usuario.idUsuario
    }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "5m"
    })
}

function generateRefreshToken(usuario, jti) {
    return jwt.sign({
        IdUsuario: usuario.idUsuario,
        jti
    }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: '8h'
    });
}

function generateTokens(usuario, jti) {
    const accessToken = generateAccessToken(usuario)
    const refreshToken = generateRefreshToken(usuario, jti)

    return { accessToken, refreshToken }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateToken,
    generateTokens
}
