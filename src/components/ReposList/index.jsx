import { useEffect, useState } from 'react';

import styles from './ReposList.module.css';
import spinner from '../../assets/spinner.gif';

const ReposList = ({ nomeUsuario }) => {
    const url = `https://api.github.com/users/${nomeUsuario}/repos`;

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                setErro(false);
                return res.json();
            })
            .then(resJson => {
                setEstaCarregando(false);
                setRepos(resJson);
            })
            .catch(e => {
                console.log('Entrou no catch.');
                setEstaCarregando(false);
                setErro(true);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {erro ? (
                <div className="erro">
                    <p>Usuário não encontrado.</p>
                </div>
            ) : (
                <>
                    {estaCarregando ? (
                        <div className={styles.carregando}>
                            <img src={spinner} alt="Carregando..." />
                        </div>
                    ) : (
                        <>
                            <p className={styles.numeroRepos}>
                                Existem <strong>{repos.length}</strong> repositórios públicos.
                            </p>
                            <ul className={styles.list}>
                                {repos && (
                                    <>
                                        {repos.map(({ id, name, language, html_url }) => (
                                            <li className={styles.listItem} key={id}>
                                                <div className={styles.listItemName}>
                                                    <strong>Nome:</strong>
                                                    {name}
                                                </div>
                                                <div className={styles.listItemLanguage}>
                                                    <strong>Linguagem:</strong>
                                                    {language}
                                                </div>
                                                <a
                                                    className={styles.listItemLink}
                                                    href={html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Visitar no GitHub
                                                </a>
                                            </li>
                                        ))}
                                    </>
                                )}
                            </ul>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default ReposList;
