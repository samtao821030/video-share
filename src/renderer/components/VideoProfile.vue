<template>
    <div class="doc">
        <div class="title alt">影视平台列表</div>
        <button class="alt" @click="open('https://electron.atom.io/docs/')">爱奇艺</button>
        <button class="alt" @click="open('https://vuejs.org/v2/guide/')">腾讯视频</button>
        <button class="alt" @click="open('https://vuejs.org/v2/guide/')">优酷</button>
    </div>
</template>

<script>
    export default {
        name: "VideoProfile"
    }
</script>

<style scoped>
    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .title.alt {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .doc button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }
</style>