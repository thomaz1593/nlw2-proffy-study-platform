const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "99999-9999",
    bio:
      "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1250],
  },
  {
    name: "Thomaz Gabriel",
    avatar:
      "https://avatars0.githubusercontent.com/u/47394367?s=460&u=1b7f6b244d0b10a289510c5f7cb2a3d243431448&v=4",
    whatsapp: "99999-9999",
    bio: "Eu não sei o que estou fazendo aqui. Eu só tenho 5 anos!",
    subject: "Artes",
    cost: "25",
    weekday: [1],
    time_from: [720],
    time_to: [1250],
  },
  {
    name: "Otávio Pace",
    avatar:
      "https://avatars2.githubusercontent.com/u/15306309?s=460&u=92713c26531b96242d6a39e6cbb8c31868918931&v=4",
    whatsapp: "99999-9999",
    bio:
      "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Matemática",
    cost: "30",
    weekday: [2],
    time_from: [720],
    time_to: [1250],
  },
];

// Enviar arquivos para o servidor
function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  return res.render("study.html", { proffys });
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html");
}

// Instalar servidor Express
const express = require("express");
// Rodar o servidor Express
const server = express();
// Instalar o Nunjucks
const nunjucks = require("nunjucks");

// Configurar nunjucks
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  // Configurar os arquivos estáticos (css, imagens, scripts)
  .use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500);
