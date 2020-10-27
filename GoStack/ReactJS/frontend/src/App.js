import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import api from './services/api';

import './App.css';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });

    }, []);

    const handleAddProject = async () => {
        const project = {
            title: `Novo projeto ${Date.now()}`,
            owner: "Luciano Zan"
        };

        const response = await api.post('projects', project);
        alert('Projeto cadastrado com sucesso');
        setProjects([...projects, response.data]);
    }

    return (
        <>
            <Header title="Now are you working?" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
};

export default App;