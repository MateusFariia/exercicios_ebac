# Exercícios EBAC - QA (Testes Manuais e Automatizados)

Repositório com exercícios práticos desenvolvidos durante o curso de Engenharia de Qualidade de Software (EBAC), com foco em testes manuais e automação de testes E2E utilizando Cypress.

Este projeto simula cenários reais de validação de aplicações web, com foco em qualidade, comportamento do sistema e experiência do usuário.

---

## 🎯 Objetivo

Aplicar na prática conceitos de QA, incluindo:

- Criação de cenários de teste baseados em regras de negócio
- Execução de testes manuais e automatizados
- Validação de fluxos críticos de aplicações web
- Identificação e documentação de falhas (bugs)
- Garantia da qualidade e confiabilidade do sistema

---

## 🧠 Estratégia de Testes

Os testes foram elaborados considerando:

- Fluxos críticos da aplicação (ex: autenticação e navegação)
- Testes positivos (comportamento esperado)
- Testes negativos (validação de erros e exceções)
- Validação de regras de negócio
- Simulação do comportamento real do usuário

---

## 🧮 Tecnologias Utilizadas

- JavaScript
- Cypress
- Appium
- Node.js

---

## 🧪 Cenários de Teste Cobertos

### 🔐 Autenticação (Login)

- Login com credenciais válidas
- Login com senha incorreta
- Login com campos vazios
- Validação de mensagens de erro para cada cenário
- Verificação de redirecionamento após login

---

### 🧭 Navegação

- Acesso a páginas após autenticação
- Validação de elementos obrigatórios na interface
- Verificação de comportamento de botões e links

---

### 📋 Validações de Interface

- Campos obrigatórios
- Estados de botões (ativo/inativo)
- Mensagens exibidas ao usuário

---

## 🐞 Bugs Identificados

Durante a execução dos testes, foram observados possíveis comportamentos inconsistentes:

- Sistema permite tentativa de login com campos vazios
- Mensagens de erro não correspondem corretamente ao cenário apresentado
- Botão de login ativo mesmo sem preenchimento dos campos obrigatórios
- Falhas na validação de navegação após login
