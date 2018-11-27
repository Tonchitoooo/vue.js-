export default {
  state: {
    ads: [
      {title: 'First ad',
        description: 'hello i am descriptor',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'},
      {title: 'Second ad',
        description: 'hello i am descriptor',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '124'},
      {title: 'Third ad',
        description: 'hello i am descriptor',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '125'},
      {title: 'First ad',
        description: 'hello i am descriptor',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '126'
      }]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}
