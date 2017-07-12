<template>
  <div>
    <highcharts :options="highoptions" ref="highcharts"></highcharts>
  </div>
</template>

<script>
  export default {
    name: "Timeline",
    props: ["timeline", "user"],
    data() {
      return {
        highoptions: {}
      }
    },
    created: function () {
      var self = this;
      if (this.timeline.length > 0) {
        this.highoptions = this.initOptions();
      } else {
        var interval = setInterval(() => {   
          if (this.timeline.length > 0) {
            self.highoptions = this.initOptions();
            clearInterval(interval);
          }
        }, 500)
      }
    },
    methods: {
      initOptions: function (cb) {
        var options = {
          title: {
            text: 'Timeline',
            x: -25
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
            name: this.user,
            data: this.timeline
          }]
        };
        return options;
      }
    }
  }

</script>
<style scoped>


</style>
