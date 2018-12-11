<template>
  <div>
    <p> Please enter your “@ozu” email, you should click to the link in your mail to navigate to evaluation page. </p>
    <b-form-group
      horizontal
      :label-cols="4"
      breakpoint="md"
    >
      <b-col lg="6">
        <b-form-input id="inputLive"
                  v-model.trim="mail"
                  type="mail"
                  :state="ozuMailState"
                  aria-describedby="inputLiveHelp inputLiveFeedback"
                  placeholder="Your email">
        </b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          <br><b-button disabled variant  v-on:click="authenticateEmail">Submit</b-button>
        </b-form-invalid-feedback>
        <b-form-valid-feedback id="inputLiveFeedback">
          <br><b-button variant  v-on:click="authenticateEmail">Submit</b-button>
        </b-form-valid-feedback>
      </b-col>
    </b-form-group>

    <p v-if= "isMailAuthenticated" >  <br>{{authenticatedMail}} </p>
  </div>
</template>

<script>
    export default {
        name: "authentication-page",
      computed: {
        ozuMailState () {
          return this.mail.charAt(this.mail.length-10) == this.ozuMail.charAt(0) &&
          this.mail.charAt(this.mail.length-9) == this.ozuMail.charAt(1) &&
          this.mail.charAt(this.mail.length-8) == this.ozuMail.charAt(2) &&
          this.mail.charAt(this.mail.length-7) == this.ozuMail.charAt(3) &&
          this.mail.charAt(this.mail.length-6) == this.ozuMail.charAt(4) &&
          this.mail.charAt(this.mail.length-5) == this.ozuMail.charAt(5) &&
          this.mail.charAt(this.mail.length-4) == this.ozuMail.charAt(6) &&
          this.mail.charAt(this.mail.length-3) == this.ozuMail.charAt(7) &&
          this.mail.charAt(this.mail.length-2) == this.ozuMail.charAt(8) &&
          this.mail.charAt(this.mail.length-1) == this.ozuMail.charAt(9) ? true : false
        }
      },
      data(){
          return {
            mail: "",
            authenticatedMail: "You have been successfully authenticated.",
            isMailAuthenticated: false,
            ozuMail:"ozu.edu.tr"
          }
      },
      methods: {
          authenticateEmail: function () {
            this.isMailAuthenticated= true;
            this.mail= "";
          },

      }


    }
</script>

<style scoped>
  div{
    text-align: center;
    color: black;
    font-family: Helvetica;

  }


</style>
