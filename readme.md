# Projeto: Sorteador de Números

## Descrição

Este projeto é um **sorteador de números** que permite ao usuário definir a quantidade de números a serem sorteados, além de especificar o intervalo (mínimo e máximo) desses números. A aplicação inclui dois botões principais: um botão **Sortear**, que gera os números aleatórios, e um botão **Reiniciar**, que limpa o sorteio e restaura o estado inicial.

O objetivo deste exercício é implementar as funções JavaScript necessárias para que o sorteio de números funcione corretamente, além de gerenciar a interatividade da página, como a ativação e desativação do botão **Reiniciar**.

## Estrutura de Funcionalidades

### Funções Implementadas

- **buscarPeloId(id)**:
  - Utilizada para buscar um elemento HTML pelo seu `id`.
  
- **gerarNumeroAleatorio(min, max)**:
  - Gera e retorna um número aleatório entre os valores mínimos e máximos definidos pelo usuário.

- **sortear()**:
  - Coleta os valores de quantidade de números, mínimo e máximo.
  - Gera números aleatórios dentro do intervalo definido pelo usuário.
  - Armazena os números sorteados e os exibe na tela.
  - Habilita o botão **Reiniciar** quando os números forem sorteados.

- **mostrarResultado()**:
  - Exibe os números sorteados na área destinada ao resultado, no formato de uma lista separada por vírgulas.

- **reiniciar()**:
  - Reinicia o sorteador, limpando os números sorteados e desativando o botão **Reiniciar** até que novos números sejam sorteados.

- **manuseiaEstilosDoBotao()**:
  - Controla a ativação e desativação do botão **Reiniciar**, alternando suas classes para ativar ou desativar a função.

## Passo a Passo do Exercício

1. **Inicialização**:
   - Carregue o arquivo HTML no navegador e veja o formulário onde o usuário pode escolher quantos números sortear, o intervalo de números (de/até), e dois botões (Sortear e Reiniciar).

2. **Implementar as Funções**:
   - Preencha as funções do script em `app.js` para que:
     - O botão **Sortear** colete os valores dos campos e sorteie a quantidade de números desejada.
     - O botão **Reiniciar** volte ao estado inicial, desativando-se após o reinício.

3. **Lógica de Sortear**:
   - A função `sortear()` deve:
     - Pegar o valor da quantidade de números e do intervalo de números (mínimo e máximo).
     - Sortear os números e exibir o resultado.
     - Ativar o botão **Reiniciar** se houver números sorteados.

4. **Lógica de Reiniciar**:
   - A função `reiniciar()` deve limpar a lista de números sorteados e desativar o botão **Reiniciar** até que um novo sorteio seja realizado.

## Estrutura de Arquivos

- **index.html**:
  - Estrutura HTML com o formulário de entrada e botões.
  
- **style.css**:
  - Estilização básica para o layout da página.
  
- **app.js**:
  - Script responsável pela lógica de sorteio, manipulação de DOM e controle de estado dos botões.

## Desafios Propostos

1. **Melhorias de Estilo**:
   - Experimente melhorar o visual da aplicação com diferentes estilos e cores.

2. **Validação de Entrada**:
   - Adicione validações nos inputs para garantir que os valores de quantidade, mínimo e máximo sejam números válidos.

3. **Evitar Números Repetidos**:
   - Modifique a lógica de sorteio para evitar que números repetidos sejam sorteados.

## Exemplos de Uso

1. Digite o número **5** para a quantidade de números a serem sorteados.
2. Defina o intervalo de **1 a 50**.
3. Clique no botão **Sortear** para ver os 5 números sorteados.
4. Clique em **Reiniciar** para limpar os resultados e voltar ao estado inicial.

---

Este exercício tem como objetivo praticar a manipulação de DOM e a criação de funções JavaScript simples para interatividade em uma aplicação web.

