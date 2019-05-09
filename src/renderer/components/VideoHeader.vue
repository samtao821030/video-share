<template>
    <div id="video_header">
        <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">返回首页</button><br><br>
    </div>
</template>

<script>
    export default {
        name: "VideoHeader"
    }
</script>

<style scoped>
    #video_header{
        height:37px;
        background-color: #DBDBDB;
    }

    #video_header button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        display: inline-block;
        color: #000;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }
</style>