import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useNavigate, useLocation } from 'react-router-dom'


export default function Repositories() {
    const location = useLocation();
    const repositoryNames = location.state.repositories;
    const navigate = useNavigate();
    
    if(!repositoryNames) {
        navigate('/');
    }

    return (
    <S.Container>
        <S.Title>Repositórios</S.Title>
        <S.List>
           {
               repositoryNames.map((repositoryName, idx) => {
                return <S.ListItem key={idx}> Repositório: { repositoryName }</S.ListItem>
            })
          }
        </S.List>
        <S.LinkHome to={'/'}>Voltar</S.LinkHome>
    </S.Container>
    )
}
