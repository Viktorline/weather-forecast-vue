<script setup>
import { ref, onMounted } from 'vue'
import { API_KEY, BASE_URL } from './constants/index'
import WeatherSummary from './components/WeatherSummary.vue'
import WeatherHighlights from './components/WeatherHighlights.vue'
import WeatherCoordinates from './components/WeatherCoordinates.vue'
import WeatherHumidity from './components/WeatherHumidity.vue'

const city = ref('Tomsk')
const weatherInfo = ref(null)

function getWeather() {
  fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => (weatherInfo.value = data))
    .then((data) => console.log(data))
}

onMounted(getWeather)
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input v-model="city" type="text" class="search" @keyup.enter="getWeather" />
                </div>
                <WeatherSummary :weatherInfo="weatherInfo" />
              </div>
            </section>
            <section class="section section-right">
              <WeatherHighlights :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div class="sections">
            <section class="section-bottom">
              <WeatherCoordinates :weatherInfo="weatherInfo" />
            </section>
            <section class="section-bottom">
              <WeatherHumidity :weatherInfo="weatherInfo" />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import './assets/styles/main'
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('./assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: $white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>
