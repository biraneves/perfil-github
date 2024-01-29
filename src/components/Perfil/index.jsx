import { header, avatar, name } from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={header}>
            <img className={avatar} src={`https://github.com/${nomeUsuario}.png`} alt={nomeUsuario} />
            <h1 className={name}>{nomeUsuario}</h1>
        </header>
    );
};

export default Perfil;
