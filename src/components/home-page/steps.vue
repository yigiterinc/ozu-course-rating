<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col id="image">
        <img id="screenshot" src="../../assets/ocrScreenshot.png" >
      </b-col>
      <b-col id="steps">
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

  #screenshot {
    max-width: 800px;
    height: 390px;
    border: 6px solid #e9ecef;
    border-radius: 10px;
  }

  #image {
    padding-left: 20px;
  }

  #steps {
    font-size: 19px;
    text-align: left;
    padding-right: 100px;
  }
</style>
