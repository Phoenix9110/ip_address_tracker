<script>
  import { ref } from "vue";
  import { iPInformation } from '../store/ipStore';
  import { holi } from "../lib/main";
  let query= ref("8.8.8.8");
  import Arrow from '../icons/Arrow.vue'

  console.log(holi())

  export default {
    data: () => ({
      value: 20,
    }),
    methods: {
      calculate() {
        let aux = this.value;
        console.log(this.double(aux));
      },
      double(value) {
        return value * 2;
      },
    },
  };
  
  async function searchIP() {
    const base = "https://geo.ipify.org/api/v2/country?apiKey=at_EEOzfjW8qe4PoAY0S5wOpx1PnVnch&ipAddress="

    const response = await fetch(base+query.value);
    const information = await response.json();
    structurateData(information)
    // interface data {
    //   ip:string
    //   location: string
    //   timezone: string
    //   isp: string
    // }

    // console.log(information)

    // console.log("https://geo.ipify.org/api/v2/country?apiKey=at_EEOzfjW8qe4PoAY0S5wOpx1PnVnch&ipAddress=8.8.8.8")
    // console.log(query)
  }

  const structurateData = (information) => {
    // console.log(information)
    let data = {
      ip:"",
      location: "",
      timezone: "",
      isp: ""
    }
    if(information!==undefined){
      const {ip, location, as, isp} = information
      console.log(information)
      console.log({ip, location, isp})
      const locationIP = `${location.region}, ${location.country} ${as.asn}`
      const timezone = `UTC ${location.timezone}`
      data = {
        ip:ip,
        location: locationIP,
        timezone: timezone,
        isp: isp
      }
      iPInformation.set(data)
    }
  }
</script>

<template>
  <section class="search_bar">
    <input type="text" id="search_bar" v-model="query" placeholder="Search for any IP address or domain">
    <button id="search_button" @click="searchIP">
      <Arrow/>
    </button>
  </section>
</template>



<style scoped>
</style>