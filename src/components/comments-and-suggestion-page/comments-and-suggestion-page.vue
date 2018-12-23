<template>
  <b-container>
    <nav-bar></nav-bar>
    <h1 id="commentHeader">Comments About The Course</h1>
    <hr>
      <comment-section></comment-section>
    <h1 id="suggestionHeader">Suggestions For The Course</h1>
    <hr>
    <suggestion-section></suggestion-section>
    <div id="endOfPage"></div>
  </b-container>
</template>

<script>
  import NavBar from "../nav-bar/nav-bar"
  import CommentSection from "../comments-and-suggestion-page/comments-section"
  import SuggestionSection from "../comments-and-suggestion-page/suggestions-section"

    export default {
        name: "comments-and-suggestion-page",
        components: {
          NavBar,
          CommentSection,
          SuggestionSection
        }
    }
</script>

<style scoped>
  hr {
    height: 2px;
    background-color: black;
    opacity: 0.5;
  }

  #suggestionHeader {
    margin-top: 90px;
  }

  #endOfPage {
    margin-bottom: 90px;
  }

</style>
