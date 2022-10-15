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
            nombreBarrio,  //!tabla barrio//!
            idDirec,  //!tabla direcciones//!
            idAsunDenun,  //!tabla asuntoDenuncia//!
            descripProceDenun, //!tabla procedenciaDenuncia//!
            calleUbiProble, //!tabla ubicacionProblematica//!
            numeUbiProble,
            edificioUbiProble,
            pisoUbiProble,
            descripUbiProble,
            nombreDenunciado,  //!tabla denunciado//!
            apellDenunciado,
            apodoDenunciado,
            descripUbiDenunciado,
            descripDenunciado,
            descripEstadoDenun,  //!tabla estadoDenuncia//!
            descripAsunEspeci //!tabla asuntoEspecifico
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
                                chacra: chacraDomiDenunciante,
                            }
                        },
                        barrio: {
                            create: {
                                nombre: nombreBarrio
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

            }
        })
    } catch (error) {

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
