# 📺 AluraFlix
Projeto AluraFlix criado durante a #ImersãoReact da @alura-cursos

![animacao-do-projeto-alura-flix](./src/assets/gif/aluraflix.gif)

## 🔥 API Fake
Durante a imersão com o uso da biblioteca Json Server foi possível simular uma API REST com o conteúdo do arquivo json db.json deste projeto, onde foi realizado o deploy ficando disponível em http://leticiacamposs2-aluraflix.herokuapp.com/

Método   | Endpoint   | Descrição
--------- | ------ | ------
GET | /videos | Lista todos os videos disponíveis
GET | /videos/1 | Lista o video especifico
GET | /categorias | Lista todas as categorias disponíveis
GET | /categorias/1 | Lista a categoria especifica
GET | /categorias?_embed=videos | Lista todas as categorias e os videos relacionados

