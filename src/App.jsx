import { useState } from 'react';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';

function App() {
    const [nomeUsuario, setNomeUsuario] = useState('');

    return (
        <>
            <div className="container-input">
                <form>
                    <input
                        className="input-nome-usuario"
                        type="text"
                        placeholder="Nome do usuário"
                        onBlur={e => {
                            setNomeUsuario(e.target.value);
                        }}
                    />
                    <button className="button-nome-usuario" type="button">
                        Enviar
                    </button>
                </form>
            </div>
            {nomeUsuario.length > 3 && (
                <>
                    <Perfil nomeUsuario={nomeUsuario} />
                    <ReposList nomeUsuario={nomeUsuario} />
                </>
            )}
        </>
    );
}

export default App;
