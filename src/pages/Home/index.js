import React, {useState} from 'react';
import axios from 'axios';
import * as S from "./styled"
import { useNavigate } from 'react-router-dom';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();
  
  const handlePesquisa = async () => {
    
    try {
      
       const response = await axios.get(`https://api.github.com/users/${usuario}/repos`),
          repositories = response.data.map(repository => repository.name);

        setErro(null); // tem que ver se desmonta
    
        navigate('/repositories', {
          replace: true,
          state: {
            repositories
        }
      
    } catch(error) {
    
      setErro(error);
      
    }
   
  };
    
  const updateNomeUsuario = evt => {
    
    const nomeUsuario = evt.target.value;
    
    setNomeUsuario(nomeUsuario);
    
  };
  
  return (
    <S.HomeContainer>
    <S.Content>
      <S.Input className='usuario' placeholder='usuário' value={nomeUsuario} onChange={updateNomeUsuario} />
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : ''}
    </S.HomeContainer>
    );
}

export default App;
