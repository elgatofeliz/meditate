<script>
import { RouterLink } from "vue-router";
</script>
<template>
    <main class="splashView">
        <RouterLink to="/welcome">
            <div class="mainLogo"></div>
        </RouterLink>
    </main>
</template>

<style lang="scss">
.splashView {
    background: url("../../img/images/background.jpg") center/cover no-repeat;
    display: grid;
    place-items: center;
}
</style>
