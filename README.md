Snolab - Vale.com
=================

Mais uma página da `Vale.com`.

## Desenvolvimento

Esta página necessita das tecnologias abaixo:

### Necessita

- Node.js
- NPM
- Volo
- Grunt
- Sass
- Compass

### Instalação

Configuração para o desenvolvimento.

    gem install compass
    npm install -g requirejs
    npm install -g volo
    npm install -g grunt-cli
    git clone git@git.tribointeractive.com.br:vale-com/estrada-de-ferro-carajas.git estrada
    cd estrada
    npm install -d
    
### Deploy

Gera os arquivos finais na pasta `public/Documents` que deverão ser copiados para a pasta `Documents` no gerenciador de arquivos da `Vale.com`

    grunt deploy
    

### Trabalhando

Para fazer alteração nesse projeto, você deverá trabalhar com os conteúdos das pastas `template`, `dev` e `sass`.

Execute o `grunt watch` e abra o seu navegador `http://127.0.0.1/estrada/dev/Pages`.

## Contributors

- [Thiago Lagden](https://twitter.com/thiagolagden)