import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const saudar = () => {
    if (nome.trim() === '') return alert('Digite seu nome para continuar!');
    alert(`Olá, ${nome}! Bem-vindo ao seu mini-app criativo 🎉`);
  };

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    setLista(prev => [...prev, { id: Date.now().toString(), texto: tarefa, concluida: false }]);
    setTarefa('');
  };

  const alternarConclusao = (id) => {
    setLista(prev =>
      prev.map(item => item.id === id ? { ...item, concluida: !item.concluida } : item)
    );
  };

  const limparConcluidas = () => {
    setLista(prev => prev.filter(item => !item.concluida));
  };

  return (
    <View style={styles.container}>
     

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Digite seu nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <Button title="Saudar" onPress={saudar} />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>📋 Lista de tarefas com toque</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>Adicionar </Text>
        </TouchableOpacity>

        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => alternarConclusao(item.id)}>
              <Text style={[styles.tarefa, item.concluida && styles.concluida]}>
                {item.concluida ? '✅ ' : ' '} {item.texto}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa ainda. Adicione uma acima.</Text>}
        />

        <TouchableOpacity style={[styles.botao, styles.botaoSecundario]} onPress={limparConcluidas}>
          <Text style={styles.botaoTexto}>Limpar concluídas </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>
        Feito com View, Text, TextInput, Button, TouchableOpacity e StyleSheet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // fundo mais moderno
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#E2E8F0', // texto mais claro
  },

  card: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#CBD5E1',
  },

  input: {
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#0F172A',
    marginBottom: 10,
    color: '#F1F5F9',
  },

  botao: {
    backgroundColor: '#6366F1', // roxo moderno
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#6366F1',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },

  botaoSecundario: {
    backgroundColor: '#14B8A6', // verde água
    marginTop: 10,
    shadowColor: '#14B8A6',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  botaoTexto: {
    color: '#F8FAFC',
    fontWeight: '700',
    fontSize: 16,
  },

  tarefa: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    color: '#E2E8F0',
  },

  concluida: {
    textDecorationLine: 'line-through',
    color: '#64748B',
  },

  vazio: {
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 10,
  },

  rodape: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 8,
  },
});
