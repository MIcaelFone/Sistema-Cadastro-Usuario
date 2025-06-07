 "use client";
import axios from 'axios';
import toast from 'react-hot-toast';

interface ModalDeleteUserProps {
    id: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function modalDeleteUser({id, isOpen, onClose}: ModalDeleteUserProps) {
    const handleDelete = async (id: number) => {
        try {
            const deleteUser = await axios.delete(`http://localhost:3001/api/users/${id}`);
            if(deleteUser.status === 200){
                toast.success('Usuário deletado com sucesso!');
                onClose(); // Fechar modal antes de recarregar
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            toast.error('Erro ao deletar usuário.');
        }
    }

    if (!isOpen) return null;

    return(
        <div>
            <div 
                className={`modal fade ${isOpen ? 'show d-block' : ''}`} 
                id="deleteModal" 
                tabIndex={-1}
                aria-labelledby="deleteModalLabel" 
                aria-hidden={!isOpen}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Confirmar Exclusão</h1>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            Deseja realmente deletar este usuário?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(id)}>
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}