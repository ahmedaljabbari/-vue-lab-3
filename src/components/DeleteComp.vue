<template>
  <div class="m">
    <p style="font-weight: bold; margin-top:70px;padding-top: 30px;">
      Delete snippet
    </p>
    <input id="inputId" placeholder="Snippet's Id" type="text" v-model="id" />
    <button id="btndel" @click="del">Delete snippet</button>
    <p class="result1" style="font-weight: bold"></p>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "DeleteComp",
  data: () => ({
    id: ""
  }),
  methods: {
    del() {
      axios
        .post("https://www.forverkliga.se/JavaScript/api/api-snippets.php", {
          delete: "",
          id: this.id
        })
        .then(function(response) {
          console.log(response);
          if (response.data.status == "success") {
            $(".result1")
              .text("Snippet deleted successfuly!")
              .css({ color: "#42b983" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.m{
  box-shadow: 0 0 10px wheat;

}
#inputId {
  box-sizing: border-box;
  width: 280px;
  display: block;
  margin: 30px auto 10px;
  padding: 10px;
  box-shadow: 0 0 10px #0004;
}
#btndel {
  box-sizing: border-box;
  width: 280px;
  padding: 5px 30px;
  margin: 10px auto 30px;
  font-weight: bold;
  font-size: 15px;
  box-shadow: 0 0 5px #000;
  background-color: #EC2E3F;
  border: none;
  color: white;
}
#btnAdd:hover {
  cursor: pointer;
}
</style>
