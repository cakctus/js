class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(status, statusText, url)
    this.status = status
    this.statusText = statusText
    this.url = url
  }
}

const httpError = new HTTPError("404", "Page not found", "google.com")

console.log(httpError.status)
console.log(httpError.statusText)
console.log(httpError.url)
