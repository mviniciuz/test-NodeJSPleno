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

- 2 - Após acesse a rota post http://localhost:3333/storage-places 
      Esta rota carrega as coordenadas para a base mongodb automaticamente.

- 3 - A http://localhost:3333/places permite manipular as coordenadas.
      
- 4 - Após executar o back-end, entre no diretório ./places-web
      execute mpm ou yarn start para executar o Google maps.

- 5 - Obrigado pela oportunidade! 

