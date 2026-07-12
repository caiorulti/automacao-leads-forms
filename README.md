# 🚀 Automação de Alertas de Leads de Alta Prioridade (n8n + JavaScript)

Este projeto consiste em uma automação desenvolvida no **n8n** para filtrar e processar respostas de formulários vindas do Google Sheets. O fluxo identifica clientes marcados com "Grande Importância" e formata os dados dinamicamente usando **JavaScript** para preparar um alerta personalizado destinado à equipe de vendas.

## 🛠️ Tecnologias utilizadas
* **n8n**: Plataforma de automação de fluxos de trabalho (Workflow Automation).
* **JavaScript (ES6+)**: Manipulação de objetos JSON e tratamento de dados com métodos de array (`.map()`).
* **Google Sheets**: Banco de dados e origem dos leads coletados.

## ⚙️ Como funciona o fluxo
1. **Gatilho (Trigger)**: O fluxo é iniciado quando novos formulários são enviados ou atualizados na planilha do Google Sheets.
2. **Filtro**: A automação verifica se o projeto possui "Grande Importância".
3. **Tratamento de dados (Nó de Código)**: Um script em JavaScript roda no modo *Run Once for All Items*, capturando todos os leads qualificados em lote (Batch Processing). Ele valida se o nome do cliente existe (com tratamento para campos vazios) e estruturando o JSON final de saída.

## 📄 Código principal (JavaScript)
```javascript
// Captura TODOS os itens que vieram do nó anterior
const todosOsItens = \$input.all();

// Processa cada item da lista gerando o relatório completo
return todosOsItens.map(item => {
  const dadosCliente = item.json;
  
  return {
    json: {
      status: "sucesso_simulado",
      acao: "Simulação de Envio de WhatsApp",
      destino: "Número vendas",
      mensagem_enviada: `Alerta: O cliente ${dadosCliente['Seu nome'] || 'Interessado'} demonstrou grande interesse no projeto!`
    }
  };
});
```

## 🚀 Como replicar este projeto
1. Crie um novo fluxo no seu **n8n**.
2. Baixe o arquivo `workflow.json` deste repositório, abra-o com um bloco de notas, copie o conteúdo e cole (`Ctrl + V`) direto na tela do seu n8n.
3. Conecte o nó inicial à sua própria planilha do Google Sheets contendo a coluna `Seu nome`.
