<template>
    <ul class='pagination' v-if='options.pageCount'>

      <li class='pagination__item'>
        <router-link
          :to='"/posts/" + prev'>
            &laquo;
        </router-link>
      </li>

      <li class='pagination__item'
        v-for='n in parseInt(options.pageCount)'
        :key='n'>
          <router-link
            exact-active-class=''
            active-class='active'
            :to='"/posts/" + n'>
              {{n}}
          </router-link>
      </li>

      <li class='pagination__item'>
        <router-link
          :to='"/posts/" + next'>
            &raquo;
        </router-link>
      </li>

    </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['options'],
  computed: {
    prev () {
      const { currentPage } = this.options
      const prevPage = currentPage > 1 ? currentPage - 1 : 1
      return prevPage
    },
    next () {
      const { currentPage, pageCount } = this.options
      const nextPage = currentPage < pageCount ? Number(currentPage) + 1 : pageCount
      return nextPage
    }
  }
}
</script>

<style scoped>
h1{
  color: #f00
}
.pagination{
  padding: 20px 0;
  list-style: none;
  text-align: center;
  font-size: 0;
}
.pagination__item{
  margin: 0 5px;
  display: inline-block;
}
.pagination__item a{
    padding: 0 5px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #2291ea;
    font-size: 14px;
    width: 30px;
    height: 30px;
    line-height: 29px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    color: #2291ea;
    text-decoration: none;
    transform: all .2s linear;
}
.pagination__item .active{
  background: #2291ea;
  color: #fff;
}
</style>
