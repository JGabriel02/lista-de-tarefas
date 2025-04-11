# Lista de Tarefas

Este é um aplicativo de lista de tarefas desenvolvido com [Expo](https://expo.dev) e React Native feito para o desafio prático da rocketseat. Ele permite que os usuários adicionem, concluam e excluam tarefas, além de acompanhar o progresso das tarefas concluídas. No momento ainda quero organizar melhor e dividir o arquivo app/_layout.jsx para que fique melhor organizado.

## Funcionalidades

- Adicionar novas tarefas com título.
- Marcar tarefas como concluídas.
- Excluir tarefas individualmente ou todas de uma vez.
- Barra de progresso para acompanhar a porcentagem de tarefas concluídas.
- Persistência de dados usando `AsyncStorage`.

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

### Principais Arquivos

- **[`app/_layout.jsx`](app/_layout.jsx)**: Componente principal que gerencia a lógica e a interface do aplicativo.
- **[`components/Task.jsx`](components/Task.jsx)**: Componente que representa uma tarefa individual.
- **[`constants/colors.js`](constants/colors.js)**: Arquivo que define as cores usadas no aplicativo.
- **[`app.json`](app.json)**: Configurações do projeto Expo.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Plataforma para desenvolvimento e execução de aplicativos React Native.
- **AsyncStorage**: Biblioteca para persistência de dados localmente.
- **react-native-gesture-handler**: Para suporte a gestos, como swipe.
