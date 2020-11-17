const x = require('express');
const app = x();

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
app
  .all('/ru', (req, res) => {
        res
        .status(200)
        .set({ 'Content-Type': 'text/html; charset=utf-8', ...CORS })
        .send('<h1><i>Да</i></h1>\n'); 
  })
  .all('/doc/new/vasya-new.htm', (req, res) => {
        res
        .send('<h1><i>Vasya Web Page</i></h1>\n');
  })
  .all('/download', (req, res) => {
        res
        .status(200)
        .set({ 
         'Content-Disposition': 'attachment; filename="file.txt"'
        })
        .send('File\n'); 
  })
  .use((req, res) => {
        res
        .status(404)
        .set({ 'Content-Type': 'text/html; charset=utf-8', ...CORS })
        .send('<h1><i>Не найдено!</i></h1>\n');    
  })
  .listen(4321); 