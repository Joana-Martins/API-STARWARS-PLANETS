# STARWARS-PLANETS-BD

## Resumo

Backend de uma aplicação CRUD que lida com planetas baseados no universo de SW. Aplicação feita em node com MySQL.

## Pré requisitos:
<ol>
  <li>Node instalado(https://nodejs.org/en/download/) </li>
  <li>Docker instalado(https://docs.docker.com/desktop/windows/install/)</li>
  <li>Postman instalado(https://www.postman.com/downloads/) </li>
</ol> 

## Passo a passo

<ol>
  <li>  Baixe ou clone esse repositório para sua máquina </li>
  <li> Abra a pasta através do terminal </li>
  <li> Através da linha de comando digite:
    
  ```
    $ npm install
  ```
    
  </li>
  <li> Após a instalação dos módulos de node, vamos configurar o mysql através do docker
  
    
    $ docker pull mysql/mysql-server:latest
    
    $ docker run -p3306:3306 --name=mysql1 -d mysql/mysql-server:5.7
   
    $ docker exec -it mysql1 mysql -uroot -p
      Enter password: 
      ...
      mysql>
    
  </li>
  <li> Agora vamos configurar o banco de dados 
  
  ```
    mysql> create database db_planets;
    
    mysql> use db_planets;
    
    mysql> show tables;
  ```
  </li>
  
  <li> Saindo do mysql, vamos rodar o servidor
    
    
    $ node server.js
   
    
  </li>
</ol>


### Testando 

- Abra e crie uma conta no Postman 
- Adicicione um _request_ com o caminho com a opçao _POST_ 

```
http://localhost:8080/api/planets
```

- Na aba _Headers_ adicione uma chave _Content-Type_ com o valor _application/json_ 
- Na aba body escreva alguma entrada. Exemplo:

```
{
    "name": "planeta1",
    "climate": "seco",
    "terrain": "montanha"
}
```

- Clique em _Send_ e pronto! Aparecerá a resposta do servidor. 

### Autores:
- Joana Martins
- Juliane Ferreira
