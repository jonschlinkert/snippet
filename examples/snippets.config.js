var engine = require('engine');
var Snippets = require('..');

var snippets = new Snippets({
    templates: {
      readme: {path: 'README.md'},
      license: {path: 'LICENSE'},
      a: {path: 'test/fixtures/a.txt'}
    }
  })


var snippet = snippets
  .get('readme')
  .read()
  .set('data', {
    first: 'Jon',
    last: 'Schlinkert'
  })
  .use(function (contents) {
    var str = contents.toString();
    return engine.render(str, this.data);
  })
  .write('test/actual/', function (err) {
    if (err) console.log(err);
  });

