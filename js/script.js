console.log('JS OK')

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello world!',
            imgUrl: 'https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif'
        }
    }
}).mount('#app')
