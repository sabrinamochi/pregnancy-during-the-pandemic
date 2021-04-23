const { NODE_ENV } = process.env;
const CWD = process.cwd();
const fs = require('fs');
const handlebars = require('handlebars');
const { inlineSource } = require('inline-source');

const helpers = require(`${CWD}/src/html/helpers/helpers.js`);

const ENV = NODE_ENV || 'dev';
const DIR_IN = './src/html';
const DIR_TMP = './.tmp';
const DIR_OUT = `./${ENV}`;

function registerPartials() {
  ['base', 'story'].forEach(path => {
    fs.readdirSync(`${DIR_IN}/partials/${path}`)
      .filter(d => d.endsWith('.hbs'))
      .forEach(file => {
        const name = file.replace('.hbs', '');
        const filepath = `${DIR_IN}/partials/${path}/${file}`;
        const content = fs.readFileSync(filepath, 'utf-8');
        handlebars.registerPartial(`${path}/${name}`, content);
      });
  });

  return Promise.resolve();
}

function registerHelpers() {
  Object.keys(helpers).forEach(name => {
    handlebars.registerHelper(name, helpers[name]);
  });
  return Promise.resolve();
}

function loadData() {
  const files = fs.readdirSync('./data').filter(d => d.endsWith('.json'));

  const data = files.reduce((prev, file) => {
    const name = file.replace('.json', '');
    const content = fs.readFileSync(`./data/${file}`, 'utf-8');
    const json = JSON.parse(content);
    prev[name] = json;
    return prev;
  }, {});

  data.timestamp = Date.now();
  data.basepath = ENV === 'dev' ? '' : 'https://pudding.cool/';
  return Promise.resolve(data);
}

function compileTemplate(data, filename) {
  const content = fs.readFileSync(`${DIR_IN}/${filename}.hbs`, 'utf-8');

  const template = handlebars.compile(content);
  const result = template(data);

  const output = `${DIR_TMP}/${filename}.html`;
  fs.writeFileSync(output, result);

  return Promise.resolve(output);
}

function inlineScriptStyle(input, filename) {
  return new Promise((resolve, reject) => {
    inlineSource(input, {
      compress: false,
      rootpath: DIR_OUT,
      ignore: ENV === 'dev' ? ['link', 'script'] : null,
    })
      .then(html => {
        const output = `${DIR_OUT}/${filename}.html`;
        fs.writeFileSync(output, html);
        resolve(output);
      })
      .catch(reject);
  });
}

function inlineSVG(input, filename) {
  return new Promise((resolve, reject) => {
    inlineSource(input, {
      compress: false,
      rootpath: './svg',
      ignore: ['link', 'script'],
    })
      .then(html => {
        const output = `${DIR_TMP}/${filename}-svg.html`;
        fs.writeFileSync(output, html);
        resolve(output);
      })
      .catch(reject);
  });
}

function init() {
  console.time('compiling html');

  registerHelpers()
    .then(registerPartials)
    .then(loadData)
    .then((r) => compileTemplate(r, 'index'))
    .then((r) => inlineSVG(r, 'index'))
    .then((r) => inlineScriptStyle(r, 'index'))
    .then(() => console.timeEnd('compiling html'))
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
    registerHelpers()
    .then(registerPartials)
    .then(loadData)
    .then((r) => compileTemplate(r, 'infection'))
    .then((r) => inlineSVG(r, 'infection'))
    .then((r) => inlineScriptStyle(r, 'infection'))
    .then(() => console.timeEnd('compiling html'))
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
    registerHelpers()
    .then(registerPartials)
    .then(loadData)
    .then((r) => compileTemplate(r, 'isolation'))
    .then((r) => inlineSVG(r, 'isolation'))
    .then((r) => inlineScriptStyle(r, 'isolation'))
    .then(() => console.timeEnd('compiling html'))
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
    registerHelpers()
    .then(registerPartials)
    .then(loadData)
    .then((r) => compileTemplate(r, 'insecurity'))
    .then((r) => inlineSVG(r, 'insecurity'))
    .then((r) => inlineScriptStyle(r, 'insecurity'))
    .then(() => console.timeEnd('compiling html'))
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
    registerHelpers()
    .then(registerPartials)
    .then(loadData)
    .then((r) => compileTemplate(r, 'inequality'))
    .then((r) => inlineSVG(r, 'inequality'))
    .then((r) => inlineScriptStyle(r, 'inequality'))
    .then(() => console.timeEnd('compiling html'))
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
}

init();
