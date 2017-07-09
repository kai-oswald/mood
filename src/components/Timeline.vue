<template>
  <div>
    <highcharts :options="options" ref="highcharts"></highcharts>
    <button @click="update">update credits</button>
  </div>
</template>

<script>
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
          series: []
        }
      }
    },
    created: function () {
      setTimeout(this.update, 300);
    },
    methods: {
      update: function () {
        var obj = {
          name: this.user,
          data: this.timeline
        }
        this.options.series.push(obj);
      }
    }
  }

</script>
<style scoped>


</style>
