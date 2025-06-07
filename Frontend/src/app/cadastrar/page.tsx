"use client";
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Toast from 'react-hot-toast';
export default function CadastrarUsuario() {
  const [nome,setNome] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const sendData = async() =>{
    const response=await axios.post('http://localhost:3001/api/users/', {
      nome: nome,
      email: email
    })
    if (response.status === 201) {
      Toast.success('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setTimeout(() => {
        window.location.href = '/';
      },1500)
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  }
  return (
    <>
      <Header/>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Formulário </h1>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder="name"
              value={nome} 
              onChange={(e)=>setNome(e.target.value)}/> 
            </div>
            <button type="button" className="btn btn-primary container" onClick={()=>sendData()}>Cadastrar</button>
          </div>
        </div>
      </div>
    </> 
  );
}