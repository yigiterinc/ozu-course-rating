<template>
  <b-container>
    <b-row >
      <div v-for="user in users">
        <b-col>
          <b-card bg-variant="light" v-bind:title=user.nickname
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </b-card>
        </b-col>
      </div>
    </b-row>

  </b-container>
</template>

<script>
    export default {
        name: "suggestions-section",
      data() {
        return {

          users: [
            {nickname: "user1", comment:"Very good. Very nice. Take it Very good.", suggestion: "bla bla bla"},
            {nickname: "user2", comment:"not bad", suggestion: "bla bla bla"},
            {nickname: "user3", comment:"dont recommend", suggestion: "bla bla bla"},
          ]
        }
      }
    }
</script>

<style scoped>


</style>
