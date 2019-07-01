class MemoryStore {
  constructor() {
    this.sessions = Object.create(null);
  }

  get(sessionId) {
    let sess = this.sessions[sessionId];
    if (!sess) {
      return
    }
    sess = JSON.parse(sess);
    if (sess.expire && sess.expire <= Date.now()) {
      delete this.sessions[sessionId];
      return
    }
    return sess
  }

  set(sessionId, session, maxAge) {
    if (maxAge > 0) {
      session.expire = Date.now() + maxAge;
    }
    this.sessions[sessionId] = JSON.stringify(session);
  }


  destroy(sessionId) {
    delete this.sessions[sessionId];
  }
}

module.exports = MemoryStore;
