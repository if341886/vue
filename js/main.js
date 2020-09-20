/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

var app = new Vue({
  el: '#app',
  data: {
    city: '',
    weatherList: [],
    cityList: ['长沙', '衡阳', '佛山']
  },
  methods: {
    ck: function () {
      var wter = this
      console.log('天气查询')
      console.log(this.city)
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then(function (resport) {
          wter.weatherList = resport.data.data.forecast
        })
    },
    getCity: function (city) {
      this.city = city
      this.ck()
    }
  }
})
