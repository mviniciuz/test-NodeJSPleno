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

Possui uma api RESTfull desenvolvida em NodeJs e mongodb para armazenamento das coordenadas.

- **Pré-requisitos**: Docker, docker-compose, nodeJs and reactJs .

- **Instalação**: 

- 1 - No diretório ./places-api/, execute  o comando
      'docker-compose up -d' para carregar os containers do 
      mongodb e da api. (contele-api e contele-mongo).

- 2 - Acesse a rota get http://localhost:3333/storeplaces
      para carrega as coordenadas para a base mongodb automaticamente.

- 3 - A rota http://localhost:3333/places permite a manipulação das coordenadas, com
      a função Crud

      CRUD REST:

      -post:
      http://localhost:3333/places
            json - exemplo:       
            {
                  "name": "local s1",
                  "lat": 1,
                  "lng": -1
            }

      -update:
      http://localhost:3333/places/id
            json - exemplo:       
            {
                  "name": "local s1",
                  "lat": 1,
                  "lng": -1
            }

            
      -delete:
      http://localhost:3333/places/id

      -show:
      http://localhost:3333/places/id

      -index:
      http://localhost:3333/places

      
- 4 - Entre no diretório ./places-web
      renomeie o arquivo .env exemple para .env
      Informe sua API-KEY do Google maps no arquivo .env
      execute mpm ou yarn start para executar front-end.

- 5 - Arquivo JSON Insomnia para testes disponível no diretório ./insomnia.

- 5 - Obrigado pela oportunidade!

