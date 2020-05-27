<template>
    <div class="req-nav">
        <p v-for="(item, index) in nav" :key="index">
            <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </p>
    </div>
</template>
<script>
import router from "../../router/index";
export default {
    name: "reqNav",
    data() {
        return {
            nav: router.options.routes
        };
    },
    mounted() {
        console.log(router, "routerrouter");
    },
    modules: {}
};
</script>
<style lang="scss" scoped>
.req-nav {
    p {
        text-align: center;
        margin: 0;
        line-height: 50px;
        font-size: 18px;
        a {
            width: 100%;
        }
    }
}
</style>
