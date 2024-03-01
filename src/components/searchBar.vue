<script>
  import { useStore } from '@nanostores/vue'
  import { $data } from '../store/ipStore.js'
  // import ArrowIcon from '../icons/Arrow.svg';
  import ArrowIcon from '../icons/Arrow.vue';
  // import { useStore } from '../store/ipStore.js';
  // const updateData = useStore(state => state.updateData)
  // const data = useStore(state => state.data)
  // console.log(admins)
  // const volume = usePlayerStore(state => state.volume)
  // const setVolume = usePlayerStore(state => state.setVolume)

  export default {
    data() {
      return {
        firstRender: true,
        query: "",
        ipAddress: null,
        base: "https://geo.ipify.org/api/v2/country?apiKey=at_EEOzfjW8qe4PoAY0S5wOpx1PnVnch&ipAddress="
      }
    },
    components: { ArrowIcon },
    methods: {
      structurateData(information){
        if(information!==undefined){
          const {ip, location, as, isp} = information
          const locationIP = `${location?.region}, ${location.country} ${as?.asn}`
          const timezone = `UTC ${location.timezone}`
          const data = {
            ip:ip,
            location: locationIP,
            timezone: timezone,
            isp: isp
          }
          // console.log(data)
          // updateData(data)
          $data.set(data)
          // $ipInformation.set(data)
          // isQueryEntered.set(true)
          // console.log($ipInformation)
        }
      },
      async getData() {
        let url = this.base
        url += (this.query!=="") ?  this.query : this.ipAddress

        const response = await fetch(url);
        const information = await response.json();
        this.structurateData(information)
      },

      async getCurrentIP() {
        if(this.ipAddress===null){
          const response = await fetch('https://api.ipify.org?format=json');
          const { ip } = await response.json();
          this.ipAddress = ip;
          this.getData()
        }
      }
    },
    beforeMount(){
      this.getCurrentIP() 
    }
  }
  // console.log(admins)
</script>

<template >
  <section @change.once="getCurrentIP" class="search_bar">
    <input type="text" id="search_bar" v-model="query" placeholder="Search for any IP address or domain" @submit="getData">
    <button id="search_button" @click="getData">
        <ArrowIcon />
    </button>
  </section>
</template>



<style scoped>
</style>