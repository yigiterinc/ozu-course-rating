<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row>
      <b-navbar id="container" fixed="top" toggleable="lg" type="dark" variant="danger">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#" >OzuCourseRating</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" >
            <b-navbar-nav id="coursesSection">
              <b-nav-item href="#">Courses</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav id="homeSection">
              <b-nav-item href="#">Home</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-row>


    <b-row>
      <b-col>
        <div id="authenticator">
          <p> Please enter your “@ozu” email, you should click to the
              link in your mail to navigate to evaluation page. </p>
          <b-form-group
            horizontal
            :label-cols="4"
            breakpoint="md">
            <b-col lg="6">
              <b-form-input id="inputLive"
                            v-model.trim="studentEmail"
                            type="mail"
                            :state="isValidOzuMail"
                            aria-describedby="inputLiveHelp inputLiveFeedback"
                            placeholder="Your email">
              </b-form-input>
              <b-form-invalid-feedback id="inputLiveFeedback">
                <br>
                <b-button disabled variant  v-on:click="authenticateEmail">Submit</b-button>
              </b-form-invalid-feedback>
              <b-form-valid-feedback id="inputLiveFeedback">
                <br>
                <b-button variant  v-on:click="authenticateEmail">Submit</b-button>
              </b-form-valid-feedback>
            </b-col>
          </b-form-group>
          <p v-if= "isMailAuthenticated">  <br>{{authenticatedMail}}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
      name: "authentication-page",
      data() {
          return {
            studentEmail: "",
            authenticatedMail: "You have been successfully authenticated.",
            isMailAuthenticated: false,
            OZU_MAIL_FORMAT:"ozu.edu.tr"
          }
      },
      methods: {
          authenticateEmail: function () {
            this.isMailAuthenticated= true;
            this.studentEmail= "";
          },
      },
      computed: {
        isValidOzuMail: function() {
          const mailAddress = this.studentEmail.split('@')[0];
          const mailDomain = this.studentEmail.split('@')[1];
          return (mailDomain === this.OZU_MAIL_FORMAT) && (mailAddress !== '');
        }
      }
    }
</script>

<style scoped>
  #authenticator {
    margin-top: 150px;
    text-align: center;
    font-size: 20px;
  }

  #container {
    background-color: #a30050 !important;
  }

  #coursesSection, #homeSection {
    margin-right: 70px;
  }

</style>
