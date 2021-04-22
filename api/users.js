module.exports = (req, res) => {
    if(req.method === 'GET')
    {
        res.json([
            {nome: "Diego", email: "diego.b.montenegro@gmail.com"},
            {nome: "Bruno", email: "cistema@hotmail.com"}
        ]);
    }
    else
    {
        const { nome, email } = req.body;
        res.send({status: "Usuário Criado", nome, email})
    }

    

}