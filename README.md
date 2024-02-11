
# Documentação da Calculadora IMC
### 
## [🗽 English](./md/english.md)  <-->   ⛵️ Português

## 🌮 Introdução

Este documento serve como uma documentação detalhada do projeto de uma Calculadora de Índice de Massa Corporal (IMC), desenvolvido utilizando HTML, CSS e JavaScript. A calculadora permite aos usuários calcular seu IMC com base em sua altura e peso, fornecendo informações sobre a classificação do IMC e o status de saúde correspondente.

## 🫗 Descrição do Projeto

O projeto consiste em uma aplicação web que permite aos usuários calcular seu IMC de forma rápida e fácil. A interface é simples e intuitiva, com campos para inserção do nome, altura e peso do usuário, além de um botão para calcular o IMC.

![Projeto](./img/calc_now_imc2.gif)

### 🥕 Funcionalidades Principais

- Calcula o IMC com base na altura e peso inseridos pelo usuário.
- Fornece informações sobre a classificação do IMC e o status de saúde correspondente.
- Validação dos campos para garantir que todos os dados necessários sejam fornecidos antes do cálculo.

## 🥢 Detalhes de Implementação

Este código é responsável por calcular o Índice de Massa Corporal (IMC) com base nos valores de altura e peso fornecidos pelo usuário em uma aplicação web. Vou descrever em detalhes o que cada parte do código faz:

### 🥩 Seleção de elementos HTML:

```const btn_calcular = document.getElementById('calculate')```

  * Esta linha seleciona o botão de calcular da página com o ID 'calculate' e o armazena na variável btn_calcular.
---
### 🍧 Função de cálculo do IMC:

```function imc() { ... }```
* Define uma função chamada imc, que será executada quando o botão de calcular for clicado.

```const nome = document.getElementById('name').value```
* Obtém o valor inserido no campo de entrada de nome na página e armazena na variável nome.

```const altura = document.getElementById('height').value```
* Obtém o valor inserido no campo de entrada de altura na página e armazena na variável altura.

```const peso = document.getElementById('weight').value```
* Obtém o valor inserido no campo de entrada de peso na página e armazena na variável peso.

```const resultado = document.getElementById('final-result')```
* Seleciona o elemento HTML onde o resultado do cálculo do IMC será exibido e armazena na variável resultado.
---

### 🍭 Condições para cálculo do IMC e exibição do resultado:

1 - Verifica se todos os campos (nome, altura e peso) estão preenchidos.
  * Se algum estiver vazio, exibe uma mensagem solicitando que todos os campos sejam preenchidos.

2 - Calcula o IMC utilizando a fórmula peso / (altura * altura).
  * Com base no valor calculado do IMC, determina a classificação do IMC e exibe uma mensagem correspondente ao status de saúde. As classificações e status são:
      * IMC < 18.5: ABAIXO DO PESO, AUMENTE SEU PESO.
      * 18.5 <= IMC <= 24.9: PESO NORMAL, PESO SAUDÁVEL. Continue assim.
      * 25.0 <= IMC <= 29.9: SOBREPESO, você está ACIMA DO PESO.
      * 30.0 <= IMC <= 34.9: OBESIDADE GRAU I, OBESIDADE LEVE, CUIDADO!
      * 35.0 <= IMC <= 39.9: OBESIDADE GRAU II (severa), OBESIDADE MODERADA, cuide-se!
      * IMC >= 40.0: OBESIDADE GRAU III, OBESIDADE GRAVE, CONSULTE UM MÉDICO.
---
### 🍖 Listener de evento:

```btn_calcular.addEventListener('click', imc)```
* Adiciona um ouvinte de evento ao botão de calcular. Quando o botão é clicado, a função imc é chamada para calcular e exibir o resultado do IMC.
---

