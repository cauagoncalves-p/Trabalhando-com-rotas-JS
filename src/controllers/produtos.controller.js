const {json} = require('express');

const produtos = [
    {
        id: 1, 
        name:"Alface",
        preco: 12
    },
    {
        id: 2, 
        name:"Batata",
        preco: 5  
    }
]

module.exports = {
    // GET 
    listProdutos: (req, res) =>{
        res.json(produtos)
    },

    getProdutos: (req, res) =>{
        const id = Number(req.params.id);
        const product = produtos.find(p => p.id === id);

        if (!product)
            return res.status(404).json({message: "Produto não encontrado"});

        res.json(product);
    },
    
    postProdutos: (req, res) =>{
       const {name, preco} = req.body;
       if (!name || !preco)
            return res.status(404).json({message: "Nome e Preço são obrigatórios!"})

        const newProduct = {
            id: produtos.length() + 1,
            name, 
            preco
        }

        produtos.push(newProduct)

        res.status(202).json({
            message:"Produto criado com sucesso", 
            produtos: newProduct
        })
    }
}