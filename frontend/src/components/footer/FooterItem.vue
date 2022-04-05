<script>
</script>
<template>
    <footer>
        <nav>
            <ul>
                <li>
                    <div class="flowerActive"></div>
                </li>
                <li>
                    <div class="soundInactive"></div>
                </li>
                <li>
                    <div class="profileInactive"></div>
                </li>
            </ul>
        </nav>
    </footer>
</template>
<style lang="scss">
.flowerInactive {
    background: url("@/img/icons/main_small.png") center/cover no-repeat;
    height: 20px;
    width: 20px;
}
.flowerActive {
    background: url("@/img/icons/main_small.png") center/cover no-repeat;
    height: 30px;
    width: 30px;
}
.soundInactive {
    background: url("@/img/icons/sound_inactive.png") center/cover no-repeat;
    height: 20px;
    width: 20px;
}
.soundActive {
    background: url("@/img/icons/sound_active.png") center/cover no-repeat;
    height: 30px;
    width: 30px;
}
.profileInactive {
    background: url("@/img/icons/profile_inactive.png") center/cover no-repeat;
    height: 20px;
    width: 20px;
}
.profileActive {
    background: url("@/img/icons/profile_inactive.png") center/cover no-repeat;
    height: 30px;
    width: 30px;
}
footer {
    height: 7vh;
    padding: 2vh 7vw;
    background-color: #253334;
    > nav {
        > ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>