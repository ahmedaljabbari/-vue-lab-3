<template>
  <div class="x">
    <p style="font-weight: bold; padding-top: 30px">
      Add new snippet
    </p>
    <div class="form-area">
      <input
        id="imputTi"
        placeholder="Snippet's Title"
        v-model="title"
        type="text"
      />
      <textarea
        id="inputCo"
        placeholder="Snippet's Content"
        v-model="content"
      ></textarea>
    </div>
    <button id="btnAdd" @click="Addo">Add snippet</button>
    <p class="resulto" style="font-weight: bold"></p>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "AddSnipets",
  data: () => ({
    title: "",
    content: "",
  }),
  methods: {
    Addo() {
      axios
        .post("https://www.forverkliga.se/JavaScript/api/api-snippets.php", {
          add: "",
          title: this.title,
          content: this.content,
        })
        .then(function(response) {
          console.log(response);
          if (response.data.status == "success") {
            $(".resulto")
              .text("Snippet added successfuly!")
              .css({ color: "#42b983" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.x{
  margin-top: -15px;
  box-shadow: 0 0 10px wheat;
}

#imputTi {
  box-sizing: border-box;
  width: 280px;
  display: block;
  margin: 30px auto 10px;
  padding: 5px;
  box-shadow: 0 0 10px #0004;
}
#inputCo {
  box-sizing: border-box;
  width: 280px;
  display: block;
  margin: 0 auto 10px;
  height: 100px;
  padding: 5px;
  box-shadow: 0 0 10px #0004;
}
#btnAdd {
  box-sizing: border-box;
  width: 280px;
  padding: 5px 30px;
  margin: 10px auto 30px;
  font-weight: bold;
  font-size: 15px;
  box-shadow: 0 0 5px #000;
  background-color: #869940;
  border: none;
  color: white;
}
#btnAdd:hover {
  cursor: pointer;
}
</style>
