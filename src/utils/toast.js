import Toastify from 'toastify-js'

const successToast = (text) => {
  Toastify({
    text,
    duration: 3000,
    close: true,
    position: 'right',
    backgroundColor: 'green',
    color: 'white',
  }).showToast()
}

const errorToast = (text) => {
  Toastify({
    text,
    duration: 3000,
    close: true,
    position: 'right',
    backgroundColor: 'red',
    color: 'white',
  }).showToast()
}
export { successToast, errorToast }
