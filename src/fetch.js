export default (url, method = 'get', options = {}) => {
  const defer = new Promise((resolve, reject) => {
    fetch(url, {
      method,
      body: options
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      resolve(data)
    })
    .catch(error => {
      // 捕获异常
      console.log(error.msg)
      reject()
    })
  })
  return defer
}



// Fetch('logout', {
//   method: 'POST',
//   body: {}
// })
// .then(response => {
// })
