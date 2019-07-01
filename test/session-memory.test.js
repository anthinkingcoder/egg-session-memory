'use strict';

const mock = require('egg-mock');

describe('test/session-memory.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/session-memory-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sessionMemory')
      .expect(200);
  });
});
