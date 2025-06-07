import VisualizarUsuarios from '../components/Visualizarusuarios';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="mb-4">DevOps CRUD Application</h1>
        <p className="mb-4">Bem-vindo à aplicação de gerenciamento de usuários</p>
        <VisualizarUsuarios />
      </div>
    </div>  
  );
}