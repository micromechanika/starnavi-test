<template>
  <div class="leaders">
    <div class="content">
      <h2>Leader Board</h2>
      <ul>
        <li v-for="item in winners" :key="item.id">
          <div class="info">
            <p class="name">{{ item.winner }}</p>
            <p class="date">{{ item.date }}</p>
          </div>
        </li>
      </ul>
    </div>
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
  color: $textColor;
  width: 50%;
  height: 100%;
  padding-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .content{
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  h2{
  display: block;
  margin: 0 0 2em 0;
  }
  ul{
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li{
      margin: .5em 0 .5em 0;
    }
  }
}
.info{
  display: flex;
  flex-direction: row;
  background-color: $fieldColor;
  justify-content: space-between;
  padding: 0 1em;
}
</style>
