<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col id="image">
        <img src="../../assets/logo.png" >
      </b-col>
      <b-col id="list">
        <ul>
          <li><strong>Step 1)</strong> Authenticate with your OzU mail to use the website.</li>
          <p></p>
          <li><strong>Step 2)</strong> You can search courses via Courses section.</li>
          <p></p>
          <li><strong>Step 3)</strong> Search any course by its course name or code!</li>
          <p></p>
          <li><strong>Step 4)</strong> See other students' experiences about the courses you consider to take!</li>
          <p></p>
          <li><strong>Step 5)</strong> Rate and give feedback to courses you have taken before by submitting the form!
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  
    export default {
        name: "steps",
      
    }
</script>

<style scoped>

  #image {
    padding-left: 120px;
  }

  #list {
    font-size: 19px;
    text-align: left;
    padding-right: 120px;
  }
</style>
