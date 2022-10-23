const db = require("../../config/db.config")
const formCtrl = {}

formCtrl.getForms = async (req, res) => {
    try {
        const result = await db.denuncia.findMany({
            include: {
                denunciante: true,
                direcciones: true,
                asuntodenuncia: true,
                procedenciadenuncia: true,
                ubicacionproblematica: true,
                denunciado: true,
                estadodenuncia: true
            }
        })
        res.send(result)
    } catch (error) {

    }
}

formCtrl.getForm = async (req, res) => {
    try {
        const { id } = req.params
        const result = await db.denuncia.findUnique({
            where: {
                idDenuncia: Number(id)
            },
            include: {
                denunciante: true,
                direcciones: true,
                asuntodenuncia: true,
                procedenciadenuncia: true,
                ubicacionproblematica: true,
                denunciado: true,
                estadodenuncia: true
            }
        })
        res.send(result)
    } catch (error) {
        res.status(404).send(error)
    }
}

formCtrl.createForm = async (req, res) => {
    try {
        const {
            nombreDenunciante, apellDenunciante, dniDenunciante, //!tabla denunciante//!
            calleDomiDenunciante, numeDomiDenunciante, calleRefeUnoDomiDenunciante,  //!tabla domiciliodenunciante//!   
            calleRefeDosDomiDenunciante, chacraDomiDenunciante,
            idBarrio,  //!tabla barrio//!
            idDirec,  //!tabla direcciones//!
            idAsunDenun,  //!tabla asuntoDenuncia//!
            idProceDenun, //!tabla procedenciaDenuncia//!
            calleUbiProble, //!tabla ubicacionProblematica//!
            numeUbiProble,
            edificioUbiProble,
            pisoUbiProble,
            descripUbiProble,
            idBarrioUbiProble,
            nombreDenunciado,  //!tabla denunciado//!
            apellDenunciado,
            apodoDenunciado,
            descripUbiDenunciado,
            descripDenunciado,
            descripEstadoDenun  //!tabla estadoDenuncia//!
        } = req.body

        const result = await db.denuncia.create({
            data: {
                denunciante: {
                    create: {
                        nombre: nombreDenunciante,
                        apellido: apellDenunciante,
                        dni: dniDenunciante,
                        domiciliodenunciante: {
                            create: {
                                calle: calleDomiDenunciante,
                                numeracion: numeDomiDenunciante,
                                entreCalleUno: calleRefeUnoDomiDenunciante,
                                entreCalleDos: calleRefeDosDomiDenunciante,
                                chacra: chacraDomiDenunciante
                            }
                        },
                        barrio: {
                            connect: {
                                idBarrio: Number(idBarrio)
                            }
                        }
                    }
                },
                direcciones: {
                    connect: {
                        idDireccion: Number(idDirec)
                    }
                },
                asuntodenuncia: {
                    connect: {
                        idAsuntoDenuncia: Number(idAsunDenun)
                    },
                },
                procedenciadenuncia: {
                    connect: {
                        idProceDenuncia: Number(idProceDenun)
                    }
                },
                ubicacionproblematica: {
                    create: {
                        calle: calleUbiProble,
                        numeracion: numeUbiProble,
                        edificio: edificioUbiProble,
                        piso: pisoUbiProble,
                        descripcion: descripUbiProble,
                        barrio: {
                            connect: {
                                idBarrio: idBarrioUbiProble
                            }
                        }
                    }
                },
                denunciado: {
                    create: {
                        nombre: nombreDenunciado,
                        apellido: apellDenunciado,
                        apodo: apodoDenunciado,
                        decripcionUbicacion: descripUbiDenunciado,
                        descripcion: descripDenunciado
                    }
                },
                estadodenuncia: {
                    create: {
                        descripcion: descripEstadoDenun
                    }
                }
            },
            include: {
                denunciante: true,
                direcciones: true,
                asuntodenuncia: true,
                procedenciadenuncia: true,
                ubicacionproblematica: true,
                denunciado: true,
                estadodenuncia: true
            }
        })

        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

formCtrl.updateForm = async (req, res) => {
    try {

    } catch (error) {

    }
}

formCtrl.deleteForm = async (req, res) => {
    try {

    } catch (error) {

    }
}


module.exports = formCtrl