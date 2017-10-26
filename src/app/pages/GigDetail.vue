<template>
  <div v-if="gig" class="full-width">
      <h1>{{gig.title}}</h1>
      <div class="block place" v-if="gig.place">
        <strong>{{gig.place}}</strong><br />
        {{gig.address}}<br />
        <a @click="openMap()">¿Cómo llegar?</a>
      </div>
      <div class="block price" v-if="gig.price">
        Precio: {{gig.price}}
      </div>
      <div class="block ticket" v-if="gig.affiliate_url">
        <a @click="openAffiliate()">Compra tu entrada ahora</a>
      </div>
      <div class="block date">
        <!--<div v-for="schedule in gig.schedule">-->
          <!--<strong>{{schedule.day | date : "dd/MM/yyyy"}}</strong> a las <strong>{{schedule.hour}} h.</strong>-->
        <!--</div>-->
        <div>
          <a class="block" @click="downloadICS()">Añádelo a tu calendario</a>
        </div>
      </div>
      <div class="block description" v-if="gig.description">
        {{gig.description}}
      </div>
      <div class="photo" v-if="gig.image_url">
        <img :src="gig.image_url" />
      </div>
      <div class="block share ticket">
        <a @click="share()">Compártelo con tus amigos</a>
      </div>
    </div>
</template>

<script>
  import { gigService } from '../services/mosica-instances'

  export default {
    data () {
      return {
        gigService,
        gig: null
      }
    },
    async created() {
      // We could mapState this route param with vuex-sync-router
      console.log('SHOWING DETAIL OF GIG WITH id: ', this.$router.currentRoute.params.id)
      this.gig = await gigService.retrieveAGig(this.$router.currentRoute.params.id)
    }
  }
</script>

<style>
</style>
