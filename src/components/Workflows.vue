<script setup>


</script>

<template>
    <div class="Workflow">
        <div style="display: inline-block;">
            <label class="Workflow_Name"> Workflow_Name </label>
            <label class="Workflow_Status"> Workflow_Status </label>
        </div>

        <button class="">Config</button>
    </div>

    <footer>

    </footer>
</template>

<style scoped>
header {
    padding-left: 20px;
}

.Workflow_Name {
    font-size: 20px;
    color: black;
    display: block;
    margin-bottom: 5px;
}

.Workflow_Status {
    font-size: 15px;
    color: gray;
}

.Workflow {
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    margin: 10px 20px 10px 20px;
    background-color: bisque;
    border-radius: 5px;
}
</style>