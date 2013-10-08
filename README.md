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
    
### Desenvolvendo

Para trabalhar no projeto, você deverá fazer o seguinte:

- Execute o `grunt watch`
- Pastas de desenvolvimento: `template`, `dev` e `sass`

E para visualizar, abra no navegador: `http://127.0.0.1/estrada/dev/Pages`
    
### Deploy

O comando

    grunt deploy

gera os arquivos de publicação na pasta `public`. Você deverá acessar a pasta `public/Documents` e copiar os arquivos para a pasta `Documents` no gerenciador de arquivos da `Vale.com` no `Share Point`.

## Contributors

- [Thiago Lagden](https://twitter.com/thiagolagden)