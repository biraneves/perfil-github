import { useEffect, useState } from 'react';
import { header, avatar, name } from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setErro(false);
    }, [nomeUsuario]);

    return (
        <header className={header}>
            {!erro && (
                <>
                    <img
                        className={avatar}
                        src={`https://github.com/${nomeUsuario}.png`}
                        alt={nomeUsuario}
                        onError={e => setErro(true)}
                    />
                    <h1 className={name}>{nomeUsuario}</h1>
                </>
            )}
        </header>
    );
};

export default Perfil;
