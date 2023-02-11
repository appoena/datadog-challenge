# Datadog Challenge

Para iniciar o projeto, clone o repositório e execute o ```docker-compose up -d```. 

> Dica, o argumento do docker compose `--force-recreate --build` forçar o build da imagem docker: 

### Problema

Os clientes não conseguem finalizar a compra no checkout, essa é a ```atividade principal da organização```. 

### Observabilidade

O Datadog já coleta métricas, logs e trace da aplicação.

### Atenção

- Você só precisa do docker instalado na sua máquina.
- Para consultar os erros no Datadog acesse ```APM > Traces```
- Você irá precisar da env DD_API_KEY.

### Arquitetura

- Frontend: utiliza porta 3000
- Backend: utiliza porta 3333
