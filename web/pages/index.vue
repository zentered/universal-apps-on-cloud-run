<template>
  <div class="mt-32">
    <div>
      <Logo />
      <h1 class="my-8 text-4xl">
        Universal, server-side rendered Web Apps on Google Cloud Run (managed)
      </h1>
      <h2 class="text-2xl my-4">You can meet us in:</h2>
      <p v-if="$fetchState.pending">Fetching travel plans ...</p>
      <p v-else-if="$fetchState.error">
        Error while fetching travel data: {{ $fetchState.error.message }}
      </p>
      <div v-else>
        <ul
          v-for="travel of travels"
          :key="travel.place"
          class="list-disc list-inside"
        >
          <li>{{ travel.place }}, {{ travel.country }}</li>
        </ul>
      </div>
      <div class="text-center mt-16">
        <a
          href="https://github.com/zentered/universal-apps-on-cloud-run"
          target="_blank"
        >
          Codebase on GitHub
        </a>
        <a href="https://zentered.co" target="_blank">
          with ❤️ by Zentered.co
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const { data } = await this.$axios.$get('/travels')
    this.travels = data
  },
  data() {
    return {
      travels: []
    }
  }
}
</script>
