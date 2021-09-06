import express from 'express';
import Colaboradores from './controllers/colaborador/ColaboradorController';

const routes = express.Router();

routes.get('/teste', (req,res) => {
  return res.json({ teste:'Teste de Rotas...'})
});

routes.post('/create', Colaboradores.store);

routes.get('/listar', Colaboradores.show);

routes.get('/listar/:id', Colaboradores.index);


export default routes;