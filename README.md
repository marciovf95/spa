# SPA
# introdução

- Após contato no linkedin foi solicitado um exemplo de crud via API.

### Editor.md

faça o download do projeto e navegue até a pasta api(./api) crie a imagem do node
**docker build --pull --rm -f "node.dockerfile" -t node-ga-14v1:latest .**

Navegue ate a pasta gazin(./gazin) crie a imagem do React
**docker build --pull --rm -f "reactjs.dockerfile" -t reactjsga:latest .**



> Após As Imagens Criadas Navegue Até O Diretorio Base E Sobe O Compose

**docker-compose -f "docker-compose.yaml" up -d --build **


Quando subir o composer subir chame no navegador **localhost:3000** vai subir o projeto.

para consumir a API a posta é 3001

**localhost:3001/api/dev/**

