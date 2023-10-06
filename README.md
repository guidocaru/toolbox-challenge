
## Toolbox Challenge

This is a Fullstack Code Challenge created for Toolbox company. Inside this repository, you will discover the two components of the challenge: the API and the Frontend.

To run this project immediately, please refer to the instructions provided in the next section. Below that, you will also find specifications regarding the technologies used in this project.

### How to run

**Using Docker Compose (reccomended)**

To run the project using Docker Compose, simply clone the repository: 

```sh
git clone https://github.com/guidocaru/toolbox-challenge.git
```

Next, navigate to the project's root directory (where the docker-compose.yml file is located), and execute the following command:

```sh
docker compose up
```

This command will start both the API and Frontend components on your local. To test them:

- Frontend: http://localhost:5173/
- API: http://localhost:1234/

**Using NPM (manual)**

To run the repository using NPM, clone the repository:

```sh
git clone https://github.com/guidocaru/toolbox-challenge.git
```

Next, install the NPM dependendies in both API and Frontend folders and run the two components

API
```sh
cd api
npm install
npm start
```

Frontend
```sh
cd frontend
npm install
npm run dev
```

This will get both API and frontend running:

- Frontend: http://localhost:5173/
- API: http://localhost:1234/

### How to test

In order to run the API tests, simply navigate to the API directory and run the command:

```sh
npm run test
```
This will run some unit and integration tests.

### Technologies

**API**

- Main language: Javascript
- Frameworks/libraries: Node.js (14) and Express.js
- Package Manager: npm
- Testing: Mocha and Chai
- Additional libraries: csvtojson

**Frontend**

- Main language: Javascript
- Frameworks/libraries: Vite, React.js and Node.js (16)
- Package Manager: npm
- Additional libraries: React Bootstrap

**Global**

- Docker and Docker Compose