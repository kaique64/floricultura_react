import React, { useState } from 'react';
import api from '../../services/api';
import './Logar.css';

export default function Usuarios() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(){
        if(nome === '' || nome === null || cpf === '' || cpf === null 
        || email === '' || email === null || senha === '' || senha === null){
          alert('Preencha todos os dados');
        }else{
          const data = {
            nomeU: nome,
            emailU: email,
            cpfU: cpf,
            senhaU: senha
          }

          const response = await api.post('/api/usuarios', data);

          if(response.status === 200){
            alert('Cadastro feito com sucesso');

            window.location.href = '/'
          }else{
            alert('Falha ao cadastrar')
          }
        }
    }

    return (
      <div>
        <form className = 'formCadastro'>
          <h1> Cadastro </h1>
          
           <input 
            type = 'text' 
            placeholder = 'Nome'
            className = 'txt'
            id = 'txtForm'
            value = {nome}
            onChange = { (e) => {setNome(e.target.value)}}
            />

            <input 
            type = 'email' 
            placeholder = 'Email'
            className = 'txt'
            id = 'txtForm1'
            value = {email}
            onChange = { (e) => {setEmail(e.target.value)}}
            />

            <input 
            type = 'text' 
            placeholder = 'CPF'
            className = 'txt'
            id = 'txtForm2'
            value = {cpf}
            onChange = { (e) => {setCpf(e.target.value)}}
            />

            <input 
            type = 'password' 
            placeholder = 'Senha'
            className = 'txt'
            id = 'txtForm3'
            value = {senha}
            onChange = { (e) => {setSenha(e.target.value)}}
            />

            {/* <button 
            onClick = {handleSubmit} 
            className = 'btnCadastrar'
            > 
            Cadastrar 
            </button> */}
            <button 
            type="button" 
            class="btn btn-outline-success"
            onClick = {handleSubmit}
            width = '100%'
            >
              Cadastrar
            </button>

        </form>
      </div>
    );
  }

