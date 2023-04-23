<script setup>

</script>

<template>
    <header>
        <label class="HeaderTitle">Work Board For ZM</label>

        <div class="router">
            <router-link to="/workflow">workflow</router-link>
        </div>

    </header>

    <div class="content">
        <router-view style="margin-top: 90px;"></router-view>
    </div>
    
</template>

<style scoped>

header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 80px;
    background-color: blueviolet;
    padding: 5px 20px 5px 20px;
    box-sizing: border-box;
}

.HeaderTitle {
    color: azure;
    font-size: 20px;
}

.router {
    margin-top: 5px;
}

.content {
    margin-top: 90px;
}


</style>