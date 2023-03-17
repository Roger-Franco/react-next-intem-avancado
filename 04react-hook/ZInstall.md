npx create-react-app .

Criar os arquivos .prettierrc.js / .editorconfig /.eslintrc.js / .babelrc.json
com as respectivas configurações;

Coloquei a linha 172 e comentei a linha 171. Nao sei se era pra colocar isso ali
ou criar a pasta .vscode com o settings ali dentro. Testar...

npm i -D prettier eslint-plugin-prettier eslint-config-prettier

npm i prop-types

fiz alteracoes nas configuraçoes na linha 170 por causa desse erro: Parsing error: No Babel config file detected for( coloquei essa linha:
// Parsing error: No Babel config file detected for (coloquei a linha abaixo por causa do erro anterior)
  "eslint.workingDirectories": [
    {"mode": "auto"}
],
 )
