"use client";
import axios from 'axios'
import { useState } from 'react';
import toast from 'react-hot-toast';
interface ModalUpdateUserProps {
    id: number;
    isOpen: boolean;
    onClose: () => void;
}
import { useEffect } from 'react';
export default function modalUpdateUser({ id, isOpen, onClose }: ModalUpdateUserProps) {
    const [nome ,setNome] =useState('');
    const [email ,setEmail] =useState('');
    const handleUpdate = async (id: number) => {
        const updateUser = await axios.put(`http://localhost:3001/api/users/${id}`, {
            nome:nome,
            email:email
        })
        if (updateUser.status === 200) {
            toast.success('Usuário atualizado com sucesso!');
            setInterval(() => {
                window.location.reload();
            },1000);
        } else {
            toast.error('Erro ao atualizar usuário.');
        }
    };
    const fetchUser=async(id:number)=>{
       const getUser=await axios.get(`http://localhost:3001/api/users/${id}`)
       setNome(getUser.data.nome);
       setEmail(getUser.data.email);
    }
    useEffect(() => {
        if (id) {
            fetchUser(id);
        }
    },[])

    return (
        <div> 
            <div 
                className={`modal fade ${isOpen ? 'show d-block' : ''}`} 
                id="updateModal" 
                tabIndex={-1}
                aria-labelledby="updateModalLabel" 
                aria-hidden={!isOpen}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateModalLabel">Atualizar Usuário</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" id="nome" placeholder="Nome" className="form-control mb-2" onChange={(e)=>setNome(e.target.value)} value={nome}/>
                            <input type="email" id="email" placeholder="Email" className="form-control mb-2" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleUpdate(id)}>Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}