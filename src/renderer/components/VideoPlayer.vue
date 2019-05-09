<template>
    <div id="videoplayer">
        <iframe v-show="true" id="show-iframe"  frameborder=1 name="showHere" scrolling=auto src=""></iframe>
    </div>
</template>

<script>
    export default {
        name: "VideoPlayer",
        methods:{

        }
    }
</script>

<style scoped>
    #videoplayer{
        height: 100vh;
        width:150vw;
    }

    #show-iframe{
        width:100%;
        height:100%;
    }


</style>