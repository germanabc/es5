<template>
    <div class="content mt40">
	    <div class="newsList">
	    	<ul>
	          <li v-for="(item ,index) in dataList" v-bind:key=item.id>
                   <h2>{{index+1}}. {{item.title}}</h2>
				   <p>{{item.detail}}</p>         
			  </li>
	          <li>follow 2</li>
	          <li>follow 3</li>
	            
	        </ul>
	    </div>
	</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData() {
      var _this = this;
      axios
        .get("src/data/follow.data")
        .then(function(res) {
           console.log('follow-res',res)
          _this.dataList = res.data;
        })
        .catch(function(err) {
          console.log("follow-err", err);
        });
    }
  }
};
</script>

<style scoped>
.mt40 {
  margin-top: 40px;
}
</style>

