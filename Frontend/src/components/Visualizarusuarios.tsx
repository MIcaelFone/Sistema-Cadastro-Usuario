"use client";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UpdateModal from './modal/modalUpdateUser';
import DeleteModal from './modal/modalDeleteUser';

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

export const VisualizarUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const handleCloseUpdateModal = () => {
    setModalUpdateUser(false);
    setSelectedUserId(null);
  };
const handleCloseDeleteModal = () => {
    setModalDeleteUser(false);
    setSelectedUserId(null);
  };

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleOpenUpdateModal = (id: number) => {
    setSelectedUserId(id);
    setModalUpdateUser(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setSelectedUserId(id);
    setModalDeleteUser(true);
  } 
  useEffect(() => {
    fetchUsuarios();
  }, []); 
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Alterar</th>
            <th scope="col">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>handleOpenUpdateModal(usuario.id)}>Alterar</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleOpenDeleteModal(usuario.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalUpdateUser && selectedUserId !== null && (
        <UpdateModal
          id={selectedUserId}
          isOpen={modalUpdateUser}
          onClose={handleCloseUpdateModal}
        />
      )}
      {modalDeleteUser && selectedUserId !== null && (
        <DeleteModal
          id={selectedUserId || 0}
          isOpen={modalDeleteUser}
          onClose={handleCloseDeleteModal}
        />
      )}
    </>
  );
};


export default VisualizarUsuarios;