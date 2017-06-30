<template>
  <div>
    <highcharts :options="options"></highcharts>
  </div>
</template>

<script>
var moment = require("moment");
console.log("moment " + moment);
  export default {
    name: "Timeline",
    props: ["timeline", "user"],
    data() {
      return {
        options: {
          title: {
            text: 'Timeline',
            x: -20 //center
          },
          subtitle: {
            text: 'mood score timeline for ' + this.user,
            x: -20
          },
          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              month: '%e. %b',
              year: '%b'
            },
            title: {
              text: 'Date'
            }
          },
          yAxis: {
            title: {
              text: 'Score'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: 'temp_name',
            data: []
          }]
        }
      }
    },
    created: function () {
      this.options.series = [{
        name: this.user,
        data: this.getHighData()
      }]
      // [{ name: "temp_2", data: [["c", 13], ["d", 6]]}]
    },
    watch: {
      highData: function () {
        if (this.timeline.length > 0) {
          var data = [];
          this.timeline.forEach(function (entry) {
            data.push([entry.date, entry.score]);
          });
          return data;
        }
      }
    },
    methods: {
      getHighData: function () {
        if (this.timeline.length > 0) {
          var data = [];
          this.timeline.forEach(function (entry) {
            var tweetDate = entry.date;
            // var date = moment(tweetDate, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en');
            var date = moment(tweetDate, "dd MMM DD HH:mm:ss ZZ YYYY", "en").format("DD.MM.YYYY");
            var newD = new Date(date);
            console.log(newD);
            var y = newD.getFullYear();
            var d = newD.getDate();
            var m = newD.getMonth();
            // var date = Date.UTC(utc.year(), utc.m, 21)
            // var date = tweetDate;
            data.push([Date.UTC(y, m, d), entry.score]);
          });         
         return data;
        }
      }
    }
  }

</script>
<style scoped>


</style>
