<p align="center">
  <a href="https://date-fns.org/">
    <img alt="date-fns" title="date-fns" src="https://github.com/mviniciuz/test-NodeJSPleno/blob/master/Logo.PNG" width="200" />
  </a>
</p>

<br/>

<h1> Teste Full Pleno - Contele</h1>

<br/>
 
- **Decrição do projeto**                        


Sistema desenvolvido para plotar coordenadas no google maps agrupando-as em 
clusters conforme o zoom diminui.

Conta com api RESTfull desenvolvida em NodeJs para armazenamento das coordenadas.

- **Pré-requisitos**: Docker, docker-compose, nodeJs and reactJs .

- **Instalação**: 

- 1 - No diretório ./places-api/, execute  o comando
      'docker-compose up -d' para carregar os containers do 
      mongodb e da api.

- 2 - Após acesse a rota get http://localhost:3333/storage-places 
      para carrega as coordenadas para a base mongodb automaticamente.

- 3 - A http://localhost:3333/places permite a manipulação das coordenadas.
      
- 4 - Entre no diretório ./places-web
      Informe sua API-KEY do Google maps no arquivo .env
      execute mpm ou yarn start para executar front-end.

- 5 - Obrigado pela oportunidade! 

