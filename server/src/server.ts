import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
   return response.send([
      {id: '1', ads: 'teste'},
      {id: '1', ads: 'teste'},
      {id: '1', ads: 'teste'},
      {id: '1', ads: 'teste'}
   ]);
});

app.listen(3333);