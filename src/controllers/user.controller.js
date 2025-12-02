const { json } = require("express");

let users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Cauã" },
];

module.exports = {
  //GET /api/users
  listUsers: (req, res) => {
    res.json(users);
  },

  //GET /api/users/:id
  getUser: (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!users)
      return res.status(404).json({ message: "Usúario não encontrado" });

    res.json(user);
  },

  //POST /api/users
  createUser: (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: "Nome é obrigatório" });

    const newUser = {
      id: Date.now(),
      name,
    };

    users.push(newUser);

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: newUser,
    });
  },

  //PUT /api/users/:id
  updateUser: (req,res) =>{
    const id = Number(req.params.id);
    const {name} = req.body;

    const index = users.findIndex(u => u.id === id);
    if (index === -1)
        return res.status(404).json({message: "Usuário não encontrado"});

    users[index].name = name || users[index].name;

    res.json({
        message: "Usuário atualizado com sucesso",
        user: users[name]
    });
   },

   //DELETE /api/users/:id
   deleteUser: (req, res) =>{
    const id = Number(req.params.id);

    const exists = users.some(u => u.id === id);

    if (!exists)
        return res.status(404).json({message: "Usuário não encontrado"});

    users = users.filter(u => u.id !== id);

    res.json({
        message:"Usuário deletado com sucesso"
    });
   }
};
