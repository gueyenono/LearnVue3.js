const img1 = document.querySelector('#img1')
const divImg = document.querySelector('#div-img')

// App 1
const app = Vue.createApp({
  data() {
    return {
      firstName: 'Nitani',
      middleName: 'Ethan',
      lastName: 'Gueye',
      age: 2,
      animal: 'cat',
      isVisible: true
    }
  },

  methods: {
    logFirstName() {
      console.log(Math.random());
    },
    toggleImg() {
      this.isVisible = !this.isVisible
    },
    generateRandomImg(size) {
      const newImg = document.createElement('img')
      newImg.alt = 'Random image'
      newImg.src = `https://picsum.photos/${size}`
    },
    resizeImg() {
      let newSize
      const imgSize = Number(img1.src.split('/')[3])
      const coef = Math.random()

      if(coef > 0.5) {
        newSize = Math.round((1+coef) * imgSize)
      } else {
        newSize = Math.round((1-coef) * imgSize)
      }

      // let newImg = this.generateRandomImg(newSize)
      // divImg.innerHTML = newImg
      img1.src = `https://picsum.photos/${newSize}`
      console.log(img1.src);
    },
    logInput(msg) {
      console.log(msg);
    }
  }
})

app.mount('#app')
