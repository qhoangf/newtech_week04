const mygroupModel = require('../models/mygroupModel')
const http = require('http');
const url = require('url');

module.exports = {
  getAll: function (request, respone) {
    // const protocol = request.method;
    // const url = request.originalUrl;
    // console.log(`Protocol: ${protocol}`);
    // console.log(`URL: ${url}`);

    respone.json(mygroupModel.mygroup)
  },

  getByMSSV: function (request, respone) {
    const { slug } = request.params;
    const student = mygroupModel.mygroup.find((item) => item.id === slug);

    if (!student) {
      return respone.send('Not found student');
    }

    // const protocol = request.method;
    // const url = request.originalUrl;
    // console.log(`Protocol: ${protocol}`);
    // console.log(`URL: ${url}`);

    respone.send(`Name: ${student.name}`);
  },

  getMessageById: function (request, respone) {
    const id = request.params.mssv;

    const student = mygroupModel.mygroup.find((student) => student.id === id);
    if (student) {
      const studentHTML = `
        <html>
          <body>
              <h1>Student Information</h1>
              <p>ID: ${student.id}</p>
              <p>Name: ${student.name}</p>
          </body>
        </html>`;
      respone.send(studentHTML);
    } else {
      return respone.send('Not found student!');
    }

    // const protocol = request.method;
    // const url = request.originalUrl;
    // console.log(`Protocol: ${protocol}`);
    // console.log(`URL: ${url}`);
  },

  getMessage: function (request, respone) {
    const studentList = mygroupModel.mygroup;
    const studentListHTML = `
      <html>
        <body>
          <h1>Student List</h1>
          <ul>
            ${studentList.map((student) => `<li>${student.name}</li>`).join('')}
          </ul>
        </body>
      </html>
    `;

    // const protocol = request.method;
    // const url = request.originalUrl;
    // console.log(`Protocol: ${protocol}`);
    // console.log(`URL: http://localhost:5000/${url}`);

    respone.send(studentListHTML);
  },
  addStudent: function (request, respone) {
    const data = request.body;
    if (data && data.id && data.name) {
      mygroupModel.mygroup.push({ id: data.id, name: data.name });
      respone.send('Student added successfully');
    } else {
      respone.status(400).send('Invalid data');
    }
    // const protocol = request.method;
    // const url = request.originalUrl;
    // console.log(`Protocol: ${protocol}`);
    // console.log(`URL: http://localhost:5000/${url}`);
  },
}