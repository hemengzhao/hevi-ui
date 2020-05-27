<template>
    <div class="home">
        <ReqHeader></ReqHeader>
        <div class="conter">
            <div class="left">
                <ReqNav></ReqNav>
            </div>
            <div class="right">
                <ReqRigth></ReqRigth>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ReqHeader from "../lanyout/top/header";
import ReqNav from "../lanyout/left/nav";
import ReqRigth from "../lanyout/right/index";
export default {
    name: "Home",
    components: {
        ReqHeader,
        ReqNav,
        ReqRigth
    }
};
</script>
<style scoped lang="scss">
.home {
    width: 1200px;
    margin: 0 auto;
    & > .conter {
        display: flex;
        & > .left {
            width: 150px;
            border-right: 1px solid #999;
        }
        & > .right {
            flex: 1;
        }
    }
}
</style>
