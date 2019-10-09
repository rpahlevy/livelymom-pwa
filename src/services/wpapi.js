class wpapi {
  constructor (baseURL) {
    this._baseURL = baseURL
  }

  set baseURL (baseURL) {
    this._baseURL = baseURL
  }

  get baseURL () {
    return this._baseURL
  }

  get (resource) {
    return fetch(this._baseURL + resource)
  }
}

export default wpapi
