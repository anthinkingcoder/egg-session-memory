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
    this.sessions[key] = JSON.stringify(session);
  }


  destroy(key) {
    delete this.sessions[key];
  }
}

module.exports = MemoryStore;
