<template>
  <div id="app">
      <div id="video_header">
          <button class="alt" @click="openPage('mainpage')">回首页</button>
          <button class="alt" @click="openPage('aiqiyi')">爱奇艺</button>
          <button class="alt" @click="openPage('tencent')">腾讯视频</button>
          <button class="alt" @click="openPage('youku')">优酷</button>
      </div>
    <router-view></router-view>
  </div>
</template>


<style>
    button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #333;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
        margin-right: 5px;
    }
</style>

<script>


    export default {
        name: 'video-share',
        data(){
            return{}
        },
        methods:{
            openPage(typeName){
                if('mainpage'!=typeName) {
                    this.$router.push({name: 'videoplayer', params: {typeName: typeName}});
                    // this.$http.get('https://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=4&amp;isiframe=1&amp;_pos=1&amp;agenttype=1&amp;verifyPhone=1&amp;ptid=01010021010000000000&amp;fromSDK=1&amp;sdk_version=1.0.0',
                    //     {'Access-Control-Allow-Origin': '*'}
                    // )
                    //     .then(
                    //         function (response) {
                    //             const html = response.data;
                    //             console.log(html);
                    //         }
                    //     )
                    //     .catch(function (error) {
                    //         console.log(error);
                    //     });
                    this.$http.post(
                        'http://119.185.24.174:5000/helloworld',
                        {},
                        {'Access-Control-Allow-Origin': '*'}
                    ).then(function (response) {
                        console.log(response.data);
                    }).catch(function (error) {
                        console.log(error);
                    })
                    ;
                }
                else{
                    this.$router.push({name: 'main-page'});
                }
            }
        }
    }
</script>
