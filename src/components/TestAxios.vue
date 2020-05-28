<template>
  <div id="main">
    <h2>World of snippets</h2>
    <div>
    <button class="btn1" @click="bringo">View Latest</button>
    <button class="btn2" @click="bestvoted">View Best</button>
    </div>

    <div class="lister" v-for="snipet in snipets" :key="snipet.id">
      <span id="snipId">{{ snipet.id }}</span>
      <span id="snipTi">{{ snipet.title }}</span>
      <p id="snipP">{{ snipet.content }}</p>
      <button @click="upvote(snipet.id)">Up Vote</button>&nbsp;
      <button @click="downvote(snipet.id)">Down Vote</button>
    </div>
    <hr>
    
    <div class="lister2" v-for="snipet in bestvotedData" :key="snipet.id">
      <span id="snipId2">{{ snipet.id }}</span>
      <span id="snipTi2">{{ snipet.title }}</span>
      <p id="snipP2">{{ snipet.content }}</p>
      <button @click="upvote(snipet.id)">Up Vote</button>&nbsp;
      <button @click="downvote(snipet.id)">Down Vote</button>
    </div>
    <span class="tat"></span>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "TestAxios",
  methods: {
    bringo() {
      axios
        .get(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest"
        )
        .then((response) => (this.snipets = response.data))
        $(".lister2").hide()
        $(".lister").show()
        .catch(function(error) {
          console.log("Something is not working" + error);
        });
    },
    bestvoted() {
      axios
        .get(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?best"
        )
        .then((response) => (this.bestvotedData = response.data))
        $(".lister2").show()
        $(".lister").hide()
        
        .catch(function(error) {
          console.log("Something is not working" + error);
        });
    },
    upvote(id) {
      axios
        .post(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?upvote&id="+id
        )
        .then((response) => {
          console.log("Success",response);
          $(".tat").fadeIn().text("up-voted success!").delay(2000).fadeOut();
        })
        .catch(function(error) {
          console.log("Something is not working" + error);
        });
    },
    downvote(id) {
      axios
        .post(
          "https://www.forverkliga.se/JavaScript/api/api-snippets.php?downvote&id="+id
        )
        .then((response) => {
          console.log("Success",response);

          $(".tat").fadeIn().text("down-voted success!").delay(2000).fadeOut();
        })
        .catch(function(error) {
          console.log("Something is not working" + error);
        });
    },
  },
  data: () => ({
    snipets: null,
    bestvotedData: null
  }),
};
</script>

<style scoped>
.lister {
  background-color: white;
  position: relative;
  color: black;
  width: 70%;
  margin-bottom: 10px;
  text-align: left;
  padding: 15px;
  overflow-wrap: break-word;
  box-shadow: 0 0 10px #0004;
  margin: 0 auto;
  margin-bottom: 20px;
}

.lister2 {
  background-color: white;
  position: relative;
  color: black;
  width: 70%;
  margin-bottom: 10px;
  text-align: left;
  padding: 15px;
  overflow-wrap: break-word;
  box-shadow: 0 0 10px #0004;
  margin: 0 auto;
  margin-bottom: 20px;
}

#snipId{
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: coral;
    padding: 1px 5px;
    border-radius: 4px;
    color: white;
    font-size: 12px;
}

#snipId2{
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: coral;
    padding: 1px 5px;
    border-radius: 4px;
    color: white;
    font-size: 12px;
}

#snipTi{

    font-weight: bold;
    color: #007E7E;
    font-size: 25px;
}
#snipTi2{

    font-weight: bold;
    color: #007E7E;
    font-size: 25px;
}

#snipP{
    margin-top: 40px;
    color: #2c3e50;
    line-height: 1.5;
    padding: 10px;
    font-size: 18px;
}

#snipP2{
    margin-top: 40px;
    color: #2c3e50;
    line-height: 1.5;
    padding: 10px;
    font-size: 18px;
}
.btn1{
    min-width: 150px;
    padding: 5px 30px;
    margin: 10px auto 30px;
    font-weight: bold;
    font-size: 15px;
    display: inline;
}

.btn2{
  min-width: 150px;
  display: inline;
    padding: 5px 30px;
    margin: 10px 10px;
    font-weight: bold;
    font-size: 15px;
}

.btn:hover{
    cursor: pointer;
}
#main{
  margin: 0;
  padding: 10px;
  position: relative;
  display: grid;
  grid-template-columns: auto;
}

.tat {
  display: none;
  position: fixed;
  top: 10px;
  right: 20px;
  color: green;
  font-weight: bold;
  margin-left: 10px;
  padding: 5px;
  background-color: honeydew;
  border-radius: 4px;
}
</style>
