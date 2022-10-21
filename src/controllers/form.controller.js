const { asuntoespecifico } = require("../../config/db.config")
const db = require("../../config/db.config")
const formCtrl = {}

formCtrl.getForms = async (req, res) => {
    try {

    } catch (error) {

    }
}

formCtrl.getForm = async (req, res) => {
    try {

    } catch (error) {

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
            descripEstadoDenun,  //!tabla estadoDenuncia//!
            idAsunEspeci //!tabla asuntoEspecifico
        } = req.body

        let resultAsun;

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
            if (idAsunDenun = 1) {
                const resultAsun = db.denuncia.update({
                    data: {
                        idAsuntoEspecifico: Number(idAsunEspeci)
                    },
                    include: {
                        asuntoespecifico: {
                            select: {
                                descripcion: true
                            }
                        }
                    }
                })
            }
        })

        res.send(result)
        res.send(resultAsun)
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