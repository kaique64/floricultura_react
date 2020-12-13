const usuarios = require('../models/usuarios.models');

module.exports = {
    index(req, res){
        res.json({ msg: 'Olá' });
    },
    async create(req, res){
        const { nomeU, emailU, cpfU, senhaU } = req.body;

        let data = {};

        let user = await usuarios.findOne({ cpfU });

        if(!user){
            data = { nomeU, emailU, cpfU, senhaU };

            user = await usuarios.create(data);

            return res.status(200).json(user);
        }else{
            alert('Cpf já existente');
            
            return res.status(500).json(user);
        }
    },
    async login(req, res){
        const { emailU, senhaU } = req.body;

        let user = await usuarios.find({ emailU, senhaU });

        return res.status(200).json(user);
    }
}