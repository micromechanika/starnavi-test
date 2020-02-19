<template>
  <div class="leaders">
    <h1>leaders</h1>
    <ul>
      <li v-for="item in winners" :key="item.id">
        <div class="info">
          <div class="name">{{ item.winner }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leaders',
  data () {
    return {
      winners: [
        {
          id: 1,
          winner: 'Computer',
          date: '07:02; 19 February 2020'
        },
        {
          id: 2,
          winner: 'John',
          date: '07:02; 20 February 2020'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.leaders {
  width: 50%;
  ul{
    list-style-type: none;
  }
}
.info{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
