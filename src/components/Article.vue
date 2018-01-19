<template>
  <div class='article' v-if='text.length || title.length'>
    <h1>
      {{title}}
    </h1>
    <div class='article__created'>
      by <span class='article__author'>{{author}}</span> / {{createdAt}}
    </div>
    <div class='article__text' v-html='text' />
    <div class='article__updated' v-if='!!updatedAt'>Last updation: {{updatedAt}}</div>
    <router-link
      class='nav__back'
      :to='"/posts/" + currentPage'
      title='Back to articles list'>
    </router-link>
  </div>
  <Spinner v-else />
</template>

<script>
import { mapState } from 'vuex'
import Spinner from './Spinner'

export default {
  name: 'Article',
  components: {
    Spinner
  },
  computed: mapState({
    text: ({article}) => article.text,
    title: ({article}) => article.title,
    createdAt: ({article}) => (new Date(article.created_at)).toLocaleDateString(),
    author: ({article}) => article.createdBy,
    updatedAt: ({article}) => (new Date(article.updated_at)).toLocaleDateString(),
    currentPage: ({pagination}) => pagination.currentPage || 1
  }),
  created () {
    const articleID = this.$route.params.id
    this.$store.dispatch('getArticleFetch', {articleID})
  }
}
</script>

<style scoped>
.article{
  padding: 0 10px 0 20px;
}
h1,
.article__author{
  font-family: 'Roboto Medium';
}
.article__created,
.article__updated{
  font-size: 0.7rem;
  color: #aaa;
}
.article__created{
  text-transform: uppercase;
}
.article__author{
  color: #000;
}
.article__updated{
  text-align: right;
}
.article__text{
  font-size: 1rem;
}
.loader{
  height: 80vh;
}
.nav__back{
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 29px;
  overflow: hidden;
}
.nav__back:after{
  display: block;
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 9px;
  transform: translate(0,-50%) rotate(-45deg);
  border-left: 3px solid rgba(119,119,119,.3);
  border-top: 3px solid rgba(119,119,119,.3);
  transition: all .3s linear;
}
.nav__back:hover{
  background: rgba(200,200,200,.3);
}
.nav__back:hover:after{
  border-color: rgba(119,119,119,1);
}
</style>
