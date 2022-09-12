module.exports = (req, res) => {
    if(req.method === 'GET')
    {
        res.json([
            {Nome: "Diego", Email: "diego.b.montenegro@gmail.com"},
            {Nome: "Bruno", Email: "cistema@hotmail.com"}
        ]);
		//Comentario desnecessario que sera removido apos merge
    }
    else
    {
        const { Nome, Email } = req.body;
        res.send({status: "Usuário Criado", Nome, Email})
    }

    

}