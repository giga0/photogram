webpackJsonp([10],{147:function(t,i,e){"use strict";function a(t){e(148)}var s=e(150),n=e(6),o=a,r=n(null,s.a,!1,o,"data-v-39acc826",null);i.a=r.exports},148:function(t,i,e){var a=e(149);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(5)("4d5a638c",a,!0,{})},149:function(t,i,e){i=t.exports=e(2)(!1),i.push([t.i,".a-spinner[data-v-39acc826]{position:relative;top:0;left:50%;transform:translateX(-50%);width:10%;height:auto;margin:5% 0 3%;color:#232429}.a-spinner svg[data-v-39acc826]{width:100%;height:100%}",""])},150:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"a-spinner"},[e("icon",{attrs:{name:"spinner",pulse:""}})],1)},s=[],n={render:a,staticRenderFns:s};i.a=n},171:function(t,i,e){"use strict";var a=e(3),s=e(10),n=e(200),o=e(147);i.a={props:["postId","typeId"],mixins:[s.a],data:function(){return{likes:[],loading:!1,infScrollDisable:!1,likesAmount:15,likesPage:1}},computed:{token:function(){return this.$store.getters["login/token"]},newsFeedPost:function(){return this.$store.getters["nfPosts/newsFeedPost"]},likesAll:function(){return this.$store.getters["nfPosts/likesAll"]}},methods:{axiosGetLikes:function(){var t=this;this.loading=!0,this.infScrollDisable=!0,a.c.get("",{headers:{Authorization:"Bearer "+this.token},params:{likable_id:this.postId,likable_type:this.typeId,amount:this.likesAmount,page:this.likesPage}}).then(function(i){if(i.data.data.length>0){for(var e=0;e<i.data.data.length;e++)t.likes.push(i.data.data[e]);t.likesPage++,t.$store.dispatch("nfPosts/pushLikes",t.likes),t.loading=!1,t.infScrollDisable=!1}else t.loading=!1,t.infScrollDisable=!0,console.log("empty array")})},closeLikes:function(){var t=this;setTimeout(function(){t.$store.dispatch("nfPosts/pushLikes",[])},500)}},components:{appLike:n.a,appSpinner:o.a},created:function(){this.windowWidth>this.breakpoint?this.$store.dispatch("headings/actSetHeading","photogram"):this.$store.dispatch("headings/actSetHeading","Likes")},destroyed:function(){this.$store.dispatch("nfPosts/pushLikes",[])}}},172:function(t,i,e){"use strict";var a=e(10);i.a={mixins:[a.b],props:["likeObj"],data:function(){return{like:this.likeObj}},computed:{token:function(){return this.$store.getters["login/token"]},loggedUserId:function(){return this.$store.getters["login/idUser"]}},methods:{followUser:function(){var t=this,i=this.like.id;this.$store.dispatch("nfPosts/followUser",i).then(function(i){t.like.auth_follow=!0}).catch(function(t){console.log(t)})},unfollowUser:function(){var t=this,i=this.like.id;this.$store.dispatch("nfPosts/unfollowUser",i).then(function(i){t.like.auth_follow=!1}).catch(function(t){console.log(t)})}}}},198:function(t,i,e){var a=e(199);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(5)("3b6fc273",a,!0,{})},199:function(t,i,e){i=t.exports=e(2)(!1),i.push([t.i,".o-likes[data-v-aac04acc]{font-family:Roboto,sans-serif;width:100%;height:100%;z-index:9}@media (min-width:768px){.o-likes[data-v-aac04acc]{position:fixed;top:0;left:0;background-color:rgba(35,36,41,.9)}}.o-likes__wrapper--main[data-v-aac04acc]{background-color:#fff}@media (min-width:768px){.o-likes__wrapper--main[data-v-aac04acc]{position:absolute;width:57rem;height:74vh;top:55%;left:50%;transform:translate(-50%,-50%)}}@media (min-width:768px){.o-likes__wrapper--sub[data-v-aac04acc]{position:absolute;width:57rem;height:74vh;overflow-y:auto}}.o-likes__close[data-v-aac04acc]{position:absolute;width:4rem;height:4rem;color:#fff;top:-5%;right:-7%;cursor:pointer}.o-likes__close svg[data-v-aac04acc]{width:100%;height:100%}",""])},200:function(t,i,e){"use strict";function a(t){e(201)}var s=e(172),n=e(203),o=e(6),r=a,l=o(s.a,n.a,!1,r,"data-v-010c6a30",null);i.a=l.exports},201:function(t,i,e){var a=e(202);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(5)("47466f72",a,!0,{})},202:function(t,i,e){i=t.exports=e(2)(!1),i.push([t.i,".m-like[data-v-010c6a30]:last-child{margin-bottom:1rem}@media (min-width:768px){.m-like[data-v-010c6a30]:last-child{margin-bottom:4rem}}.m-like__user-img[data-v-010c6a30]{display:inline-block;width:4.1rem;height:4.1rem;margin-top:.9rem;margin-left:1.5rem;cursor:pointer}@media (min-width:768px){.m-like__user-img[data-v-010c6a30]{width:4.6rem;height:4.6rem;margin-top:4.8rem;margin-left:3.5rem}}.m-like__user-img img[data-v-010c6a30]{width:100%;height:100%;border-radius:50%}.m-like__content[data-v-010c6a30]{display:inline-block;width:55%;margin-top:2.2rem;margin-left:.6rem;vertical-align:top}@media (max-width:767px){.m-like__content[data-v-010c6a30]{font-size:1.4rem}}@media (min-width:768px){.m-like__content[data-v-010c6a30]{font-size:1.6rem}}@media (max-width:767px){.m-like__content[data-v-010c6a30]{line-height:1.7rem}}@media (min-width:768px){.m-like__content[data-v-010c6a30]{line-height:1.9rem;width:60%;margin-top:6rem}}.m-like__username[data-v-010c6a30]{font-family:Roboto-Bold,sans-serif;cursor:pointer}.m-like__txt[data-v-010c6a30]{display:inline}.m-like__button[data-v-010c6a30]{float:right;padding-top:1.7rem;padding-right:1rem}@media (min-width:768px){.m-like__button[data-v-010c6a30]{padding-top:5.1rem;padding-right:2rem}}.m-like__btn[data-v-010c6a30]{font-family:Roboto,sans-serif;color:#fff;border-radius:30px;cursor:pointer}@media (max-width:767px){.m-like__btn[data-v-010c6a30]{font-size:1rem}}@media (min-width:768px){.m-like__btn[data-v-010c6a30]{font-size:2rem}}@media (max-width:767px){.m-like__btn[data-v-010c6a30]{line-height:1.2rem}}@media (min-width:768px){.m-like__btn[data-v-010c6a30]{line-height:2.4rem}}.m-like__btn--follow[data-v-010c6a30]{background-color:#232429;padding:.5rem 1.4rem}@media (min-width:768px){.m-like__btn--follow[data-v-010c6a30]{padding:.5rem 2rem}}.m-like__btn--unfollow[data-v-010c6a30]{background-color:#95989a;padding:.5rem .9rem}",""])},203:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"m-like"},[e("router-link",{staticClass:"m-like__user-img",attrs:{to:{name:"user",params:{userId:t.like.id}},tag:"div"}},[e("img",{attrs:{src:t.storage+t.like.image.avatar,alt:"user avatar that made this comment"}})]),t._v(" "),e("div",{staticClass:"m-like__content"},[e("router-link",{staticClass:"m-like__username",attrs:{to:{name:"user",params:{userId:t.like.id}},tag:"span"}},[t._v("\n            "+t._s(t.like.username)+"\n        ")]),t._v(" "),e("p",{staticClass:"m-like__txt"},[t._v("liked this post")])],1),t._v(" "),e("div",{staticClass:"m-like__button"},[t.like.auth_follow||t.like.id==t.loggedUserId?t._e():e("button",{staticClass:"m-like__btn  m-like__btn--follow",attrs:{type:"button"},on:{click:t.followUser}},[t._v("Follow")]),t._v(" "),t.like.auth_follow?e("button",{staticClass:"m-like__btn  m-like__btn--unfollow",attrs:{type:"button"},on:{click:t.unfollowUser}},[t._v("Unfollow")]):t._e()])],1)},s=[],n={render:a,staticRenderFns:s};i.a=n},204:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"o-likes"},[e("div",{staticClass:"o-likes__wrapper--main"},[e("a",{staticClass:"o-likes__close  u-only-desktop",attrs:{href:"javascript:history.go(-1)"},on:{click:t.closeLikes}},[e("icon",{staticClass:"icon",attrs:{name:"close"}})],1),t._v(" "),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.axiosGetLikes,expression:"axiosGetLikes"}],staticClass:"o-likes__wrapper--sub",attrs:{"infinite-scroll-disabled":"infScrollDisable","infinite-scroll-distance":t.windowHeight/3}},[t._l(t.likesAll,function(t,i){return e("app-like",{key:t.id+"-"+i,staticClass:"o-likes__like",attrs:{likeObj:t}})}),t._v(" "),t.loading?e("app-spinner"):t._e()],2)])])},s=[],n={render:a,staticRenderFns:s};i.a=n},37:function(t,i,e){"use strict";function a(t){e(198)}Object.defineProperty(i,"__esModule",{value:!0});var s=e(171),n=e(204),o=e(6),r=a,l=o(s.a,n.a,!1,r,"data-v-aac04acc",null);i.default=l.exports}});
//# sourceMappingURL=10.build.js.map