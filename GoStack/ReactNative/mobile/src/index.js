import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    const handleAddProject = () => {
        const data = {
            "title": `New Project ${Date.now()}`,
	        "owner": "Luciano Zangeronimo"
        }

        api.post('projects', data).then(response => {
            setProjects([...projects, response.data]);
        });
    }

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({ item }) => (
                    <Text style={styles.project}>{item.title}</Text>
                )}
            />

            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7159c1",
    },
    project: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default App;