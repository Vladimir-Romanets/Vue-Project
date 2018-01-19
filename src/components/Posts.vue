<template>
  <div class="posts">
    <h1>Articles</h1>
    <ul class='posts-list' v-if='posts'>
      <li class='post' v-for='item in posts' :key='item.id'>
        <div class="post__title"> {{ item.title }} </div>
        <div class="post__text" v-html='item.text' />
        <div class="post__read">
          <router-link :to="'/article/' + item.id">Read more</router-link>
        </div>
        <div class="post__delete">
          <span @click='deleteArticle(item.id)'>
            Delete
          </span>
        </div>
        <div class="post__date">{{ (new Date(item.created_at)).toDateString() }}</div>
      </li>
    </ul>
    <div v-else-if='posts === false'>
      No articles
    </div>
    <div v-else>
      <Spinner />
    </div>
    <Pagination :options='pagination'/>
  </div>
</template>

<script>
import Pagination from './Pagination'
import Spinner from './Spinner'

export default {
  name: 'Posts',
  components: {
    Pagination,
    Spinner
  },
  computed: {
    posts () {
      return this.$store.state.posts
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  created () {
    this.getPosts()
  },
  watch: {
    '$route' ({params}) {
      this.getPosts(params.page)
    }
  },
  methods: {
    getPosts (page) {
      page = page || this.$route.params.page
      this.$store.dispatch('getPostsFetch', {page})
    },
    deleteArticle (id) {
      this.$store.dispatch('deleteArticle', {id})
    }
  }
}
</script>

<style scoped>
h1{
  color: #076ab9;
  text-transform: uppercase;
}
h1:after{
  margin: 0 auto;
  content: '';
  display: block;
  width: 50%;
  border-top: 1px solid #076ab9;
}
.posts-list{
  padding: 0;
  list-style: none;
  text-align: left;
  line-height: 1.4em;
}
.post{
  padding: 15px 0 20px;
}
.post__title{
  font-family: "Roboto Medium";
}
.post__text{
  margin-bottom: 10px;
  max-height: 105px;
  overflow: hidden;
  text-align: justify;
}
.post__date{
  text-align: right;
  line-height: 30px;
  font-size: .75em;
  font-family: 'Roboto medium';
}
.post__read,
.post__delete{
  margin-right: 5px;
  float: left;
}
.post__read a,
.post__delete span{
  text-decoration: none;
  display: block;
  padding: 3px 10px;
  transition: all .2s linear
}
.post__read a{
  color: #2291ea;
  border: 1px solid #2291ea;
}
.post__read a:hover{
  background: #2291ea;
  color: #fff;
}
.post__delete span{
  border: 1px solid #f00;
  color: #f00;
  cursor: pointer;
}
.post__delete span:hover{
  background: #f00;
  color: #fff;
}
</style>
