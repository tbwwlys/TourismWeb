<template>
    <div class="post">
        <img :src="post.ar_img" alt="">
        <div class="introduce">{{ post.introduce }}</div>
        <div class="post-des">
            <div class="author-des">
                <el-avatar :size="20" :src="post.author_img"></el-avatar>
                <span class="author"> {{ post.author }}</span>
            </div>
            <div class="look-des">
                <i class="iconfont icon-eye"></i>
                <span class="like"> {{ post.look }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['post'])
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.post
    width 100%
    border 1px solid #fff
    border-radius .2rem
    margin-bottom .3rem 
    background-color #fff
    padding-bottom .2rem
    box-shadow 0 0 8px 4px #DDD
    img
        width 100%
        height 100%
    .introduce
        margin .2rem
    .post-des
        fj()
        margin .2rem
        .author-des
            fc()
            .author
                margin 0 .1rem
        .look-des
            fc()
            .like
                margin 0 .1rem
</style>