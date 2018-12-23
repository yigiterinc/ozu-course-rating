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
        name: "comments-section",
      data() {
          return {

            users: [
              {nickname: "user1", comment:"Very good. Very nice. Take it Very good. Very nice. Take it Very good. Very nice. Take it Very good. Very nice. Take it"},
              {nickname: "user2", comment:"not bad"},
              {nickname: "user3", comment:"dont recommend"},
              {nickname: "user4", comment:"dont recommend"},
              {nickname: "user5", comment:"dont recommend"},
            ]
          }
      }
    }
</script>

<style scoped>

</style>
