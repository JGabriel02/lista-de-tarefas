# 📋 Lista de Tarefas

Este é um aplicativo de lista de tarefas desenvolvido com **Expo** e **React Native**, criado como parte de um desafio prático da Rocketseat.  
Ele permite que os usuários adicionem, concluam e excluam tarefas, além de acompanhar o progresso das tarefas concluídas.

> ⚠️ Ainda estou trabalhando para organizar melhor o projeto, principalmente o arquivo `app/_layout.jsx`.

---

## 🧠 Funcionalidades

- ✅ Adicionar novas tarefas com título  
- ✔️ Marcar tarefas como concluídas  
- ❌ Excluir tarefas individualmente ou todas de uma vez  
- 📊 Barra de progresso para acompanhar a porcentagem de tarefas concluídas  
- 💾 Persistência de dados usando `AsyncStorage`  

---

## 📱 Demonstração

<div align="center">
  <img src="assets/demo/demo.gif" width="300" alt="Demonstração do aplicativo em funcionamento" />
</div>

---

## Estrutura do Projeto

```
.gitignore
app.json
package.json
README.md
app/
  _layout.jsx
assets/
  images/
    Check.png
components/
  Task.jsx
constants/
  colors.js
context/
styles/
  styles.js
```

## 🗂️ Principais Arquivos

- `app/_layout.jsx`: Componente principal que gerencia a lógica e a interface do aplicativo.  
- `components/Task.jsx`: Componente que representa uma tarefa individual.  
- `constants/colors.js`: Define as cores utilizadas no app.  
- `app.json`: Configurações do projeto Expo.

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) – Framework para desenvolvimento de apps móveis  
- [Expo](https://expo.dev/) – Plataforma para desenvolvimento e execução  
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) – Persistência de dados local  
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) – Suporte a gestos (como swipe)

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões, correções ou melhorias.

---

## 📄 Licença

Este projeto ainda não possui uma licença definida.
