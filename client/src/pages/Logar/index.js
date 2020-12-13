import React, { useState } from 'react';
import api from '../../services/api';

export default function Usuarios() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(){
        
    }
    
    return (
        <div>
          <form className = 'formCadastro'>
            <h1> Login </h1>

              <input 
              type = 'email' 
              placeholder = 'Email'
              className = 'txt'
              value = {email}
              onChange = { (e) => {setEmail(e.target.value)}}
              />

              <input 
              type = 'password' 
              placeholder = 'Senha'
              className = 'txt'
              value = {senha}
              onChange = { (e) => {setSenha(e.target.value)}}
              />
  
              <button 
              onClick = {handleSubmit} 
              className = 'btnCadastrar'
              > 
              Cadastrar 
              </button>
          </form>
        </div>
    );
}
