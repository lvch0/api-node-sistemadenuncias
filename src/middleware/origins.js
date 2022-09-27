// const checkOrigin = (req, res, next) => {
//  const token = req.headers.authorization.split(" ").pop()
//     if (token == "123456") {
//         next()
//     }
//     else {
//         res.status(400)
//         res.send({ error: "No tienes permiso para acceder"})
//     }
// }

// module.exports = checkOrigin