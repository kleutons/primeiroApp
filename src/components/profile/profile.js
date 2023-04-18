import React, { useContext }  from 'react'
import { UserContext } from '../../contexts/userContext'

function Profile(){

    const {login,data} = useContext(UserContext);
 
    return (
        <div>
           {
           login ? 
            <div>
                Nome: {data.nome}
                <br />
                Idade: {data.age}
            </div> :
             'Faça o Seu Login para mais informações!'
            }
            
        </div>
    )
}

export default Profile