const todosOsItens = $input.all();

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
