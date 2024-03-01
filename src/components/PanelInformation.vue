<template>
    <section class="panel_information">
        <InfoItem title="IP address" :content="ip" :extraClass="true"/>
        <InfoItem title="location" :content="location" :extraClass="true"/>
        <InfoItem title="timezone" :content="timezone" :extraClass="true"/>
        <InfoItem title="Isp" :content="isp" :extraClass="false"/>
    </section>
</template>

<script setup>
    import { useStore } from '@nanostores/vue'
    import { $data } from '../store/ipStore.js'
    import InfoItem from './InfoItem.vue'
    const data = useStore($data)
    const {ip, location, timezone, isp} = data._value
    console.log(data._value)
</script>

