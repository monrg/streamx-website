"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[574],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7462),a=t(7294),i=t(2389),o=t(9443);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),d=t(6010),c="tabItem_vU9c";function p(e){var n,t,i,o=e.lazy,p=e.block,u=e.defaultValue,m=e.values,k=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=h[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),T=b.tabGroupChoices,S=b.setTabGroupChoices,R=(0,a.useState)(y),E=R[0],C=R[1],N=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var w=T[k];null!=w&&w!==E&&v.some((function(e){return e.value===w}))&&C(w)}var x=function(e){var n=e.currentTarget,t=N.indexOf(n),r=v[t].value;r!==E&&(I(n),C(r),null!=k&&S(k,r))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,d.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function u(e){var n=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},4292:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(6396),s=t(8215),l=["components"],d={id:"Redis-Connector",title:"Redis Connector",sidebar_position:4},c=void 0,p={unversionedId:"connector/Redis-Connector",id:"connector/Redis-Connector",title:"Redis Connector",description:"Redis\u662f\u4e00\u4e2a\u5f00\u6e90\u5185\u5b58\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002 \u5b83\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e",source:"@site/docs/connector/redis.md",sourceDirName:"connector",slug:"/connector/Redis-Connector",permalink:"/docs/connector/Redis-Connector",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/connector/redis.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Redis-Connector",title:"Redis Connector",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Http Connector",permalink:"/docs/connector/Http-Connector"},next:{title:"Hbase Connector",permalink:"/docs/connector/Hbase-Connector"}},u=[{value:"Redis\u5199\u5165\u4f9d\u8d56",id:"redis\u5199\u5165\u4f9d\u8d56",children:[],level:2},{value:"\u5e38\u89c4\u65b9\u5f0f\u5199Redis",id:"\u5e38\u89c4\u65b9\u5f0f\u5199redis",children:[{value:"1.\u63a5\u5165source",id:"1\u63a5\u5165source",children:[],level:3},{value:"2. \u5199\u5165redis",id:"2-\u5199\u5165redis",children:[],level:3}],level:2},{value:"StreamX \u5199\u5165 Redis",id:"streamx-\u5199\u5165-redis",children:[{value:"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f",children:[],level:3},{value:"2. \u5199\u5165Redis",id:"2-\u5199\u5165redis-1",children:[],level:3},{value:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4",id:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4",children:[],level:3}],level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",children:[],level:2}],m={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.redis.cn/"},"Redis"),"\u662f\u4e00\u4e2a\u5f00\u6e90\u5185\u5b58\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002 \u5b83\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\n\u7ed3\u6784\uff0c\u5982 \u5b57\u7b26\u4e32\uff08strings\uff09\uff0c \u6563\u5217\uff08hashes\uff09\uff0c \u5217\u8868\uff08lists\uff09\uff0c \u96c6\u5408\uff08sets\uff09\uff0c \u6709\u5e8f\u96c6\u5408\uff08sorted sets\uff09 \u4e0e\u8303\u56f4\u67e5\u8be2\uff0c bitmaps\uff0c\nhyperloglogs \u548c \u5730\u7406\u7a7a\u95f4\uff08geospatial\uff09 \u7d22\u5f15\u534a\u5f84\u67e5\u8be2\u3002 Redis \u5185\u7f6e\u4e86\u4e8b\u52a1\uff08transactions\uff09 \u548c\u4e0d\u540c\u7ea7\u522b\u7684 \u78c1\u76d8\u6301\u4e45\u5316\uff08persistence\uff09\uff0c\n\u5e76\u901a\u8fc7 Redis\u54e8\u5175\uff08Sentinel\uff09\u548c\u81ea\u52a8 \u5206\u533a\uff08Cluster\uff09\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff08high availability\uff09\u3002"),(0,i.kt)("p",null,"flink\u5b98\u65b9\u672a\u63d0\u4f9b\u5199\u5165reids\u6570\u636e\u7684\u8fde\u63a5\u5668\u3002StreamX \u57fa\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://bahir.apache.org/docs/flink/current/flink-streaming-redis/"},"Flink Connector Redis"),"\n\u5c01\u88c5\u4e86RedisSink\u3001\u914d\u7f6eredis\u8fde\u63a5\u53c2\u6570\uff0c\u5373\u53ef\u81ea\u52a8\u521b\u5efaredis\u8fde\u63a5\u7b80\u5316\u5f00\u53d1\u3002\u76ee\u524dRedisSink\u652f\u6301\u8fde\u63a5\u65b9\u5f0f\u6709\uff1a\u5355\u8282\u70b9\u6a21\u5f0f\u3001\u54e8\u5175\u6a21\u5f0f\uff0c\u56e0\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u76ee\u524d\u672a\u652f\u6301\u3002"),(0,i.kt)("p",null,"StreamX \u4f7f\u7528Redis\u7684 ",(0,i.kt)("strong",{parentName:"p"},"MULTI")," \u547d\u4ee4\u5f00\u542f\u4e8b\u52a1\uff0c",(0,i.kt)("strong",{parentName:"p"},"EXEC")," \u547d\u4ee4\u63d0\u4ea4\u4e8b\u52a1\uff0c\u7ec6\u8282\u89c1\u94fe\u63a5:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"http://www.redis.cn/topics/transactions.html"},"http://www.redis.cn/topics/transactions.html")," \uff0c\u4f7f\u7528RedisSink \u9ed8\u8ba4\u652f\u6301AT_LEAST_ONCE (\u81f3\u5c11\u4e00\u6b21)\u7684\u5904\u7406\u8bed\u4e49\u3002\u5728\u5f00\u542fcheckpoint\u60c5\u51b5\u4e0b\u652f\u6301EXACTLY_ONCE\u8bed\u4e49\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"redis \u4e3akey,value\u7c7b\u578b\u6570\u636e\u5e93\uff0cAT_LEAST_ONCE\u8bed\u4e49\u4e0bflink\u4f5c\u4e1a\u51fa\u73b0\u5f02\u5e38\u91cd\u542f\u540e\u6700\u65b0\u7684\u6570\u636e\u4f1a\u8986\u76d6\u4e0a\u4e00\u7248\u672c\u6570\u636e\uff0c\u8fbe\u5230\u6700\u7ec8\u6570\u636e\u4e00\u81f4\u3002\u5982\u679c\u6709\u5916\u90e8\u7a0b\u5e8f\u5728\u91cd\u542f\u671f\u95f4\u8bfb\u53d6\u4e86\u6570\u636e\u4f1a\u6709\u548c\u6700\u7ec8\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u98ce\u9669\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","EXACTLY_ONCE\u8bed\u4e49\u4e0b\u4f1a\u5728flink\u4f5c\u4e1acheckpoint\u6574\u4f53\u5b8c\u6210\u60c5\u51b5\u4e0b\u6279\u91cf\u5199\u5165redis\uff0c\u4f1a\u6709\u4e00\u4e2acheckpoint\u65f6\u95f4\u95f4\u9694\u7684\u5ef6\u65f6\u3002\u8bf7\u6839\u636e\u4e1a\u52a1\u573a\u666f\u9009\u62e9\u5408\u9002\u8bed\u4e49\u3002"))),(0,i.kt)("h2",{id:"redis\u5199\u5165\u4f9d\u8d56"},"Redis\u5199\u5165\u4f9d\u8d56"),(0,i.kt)("p",null,"Flink Connector Redis \u5b98\u65b9\u63d0\u4f9b\u4e24\u79cd\uff0c\u4ee5\u4e0b\u4e24\u79cdapi\u5747\u76f8\u540c\uff0cStreamX \u4f7f\u7528\u7684\u662forg.apache.bahir\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.bahir</groupId>\n    <artifactId>flink-connector-redis_2.11</artifactId>\n    <version>1.0</version>\n</dependency>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-redis_2.10</artifactId>\n    <version>1.1.5</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"\u5e38\u89c4\u65b9\u5f0f\u5199redis"},"\u5e38\u89c4\u65b9\u5f0f\u5199Redis"),(0,i.kt)("p",null,"\u5e38\u89c4\u65b9\u5f0f\u4e0b\u4f7f\u7528Flink Connector Redis\u5199\u5165\u6570\u636e\u7684\u65b9\u5f0f\u5982\u4e0b:  "),(0,i.kt)("h3",{id:"1\u63a5\u5165source"},"1.\u63a5\u5165source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.flink.streaming.api.functions.source.SourceFunction;\nimport scala.util.Random;\n\npublic class TestSource implements SourceFunction<TestEntity> {\n\n    private boolean isRunning = true;\n\n    private Random random = new Random();\n\n    private int index = 0;\n\n    @Override\n    public void run(SourceContext<TestEntity> sourceContext) throws Exception {\n        while (isRunning && index <= 1000001) {\n            index += 1;\n            long userId = System.currentTimeMillis();\n            long orderId = random.nextInt(100);\n            int status = random.nextInt(1);\n            double price = random.nextDouble();\n            int quantity = new Random().nextInt(10);\n            TestEntity order = new TestEntity(userId, orderId, 1l, 1l, status, price, quantity, System.currentTimeMillis());\n            sourceContext.collect(order);\n        }\n    }\n\n    @Override\n    public void cancel() {\n        this.isRunning = false;\n    }\n}\nclass TestEntity {\n    Long userId;\n    Long orderId;\n    Long siteId;\n    Long cityId;\n    Integer orderStatus;\n    Double price;\n    Integer quantity;\n    Long timestamp;\n\n    /**\n     * @param userId      : \u7528\u6237Id\n     * @param orderId     : \u8ba2\u5355ID\n     * @param siteId      : \u7ad9\u70b9ID\n     * @param cityId      : \u57ce\u5e02Id\n     * @param orderStatus : \u8ba2\u5355\u72b6\u6001(1:\u4e0b\u5355,0:\u9000\u5355)\n     * @param price       : \u5355\u4ef7\n     * @param quantity    : \u8ba2\u5355\u6570\u91cf\n     * @param timestamp   : \u4e0b\u5355\u65f6\u95f4\n     */\n    public TestEntity(Long userId, Long orderId, Long siteId, Long cityId, Integer orderStatus, Double price, Integer quantity, Long timestamp) {\n        this.userId = userId;\n        this.orderId = orderId;\n        this.siteId = siteId;\n        this.cityId = cityId;\n        this.orderStatus = orderStatus;\n        this.price = price;\n        this.quantity = quantity;\n        this.timestamp = timestamp;\n    }\n}\n\n")),(0,i.kt)("h3",{id:"2-\u5199\u5165redis"},"2. \u5199\u5165redis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.connectors.redis.RedisSink;\nimport org.apache.flink.streaming.connectors.redis.common.config.FlinkJedisPoolConfig;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommandDescription;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisMapper;\n\npublic class FlinkRedisSink {\n\n    public static void main(String[] args) throws Exception {\n        //1.\u83b7\u53d6\u6267\u884c\u73af\u5883\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        env.setParallelism(1);\n\n        //2.\u8bfb\u6570\u636e\u5e76\u8f6c\u6362\u4e3aJavaBean\n        DataStreamSource<TestEntity> source = env.addSource(new TestSource(), TypeInformation.of(TestEntity.class));\n        //3.\u5c06\u6570\u636e\u5199\u5165Redis\n        FlinkJedisPoolConfig jedisPoolConfig = new FlinkJedisPoolConfig.Builder()\n                .setHost("localhost")\n                .setPort(6379)\n                .build();\n        source.addSink(new RedisSink<>(jedisPoolConfig, new MyRedisMapper()));\n\n        //4.\u6267\u884c\u4efb\u52a1\n        env.execute();\n    }\n\n    public static class MyRedisMapper implements RedisMapper<TestEntity> {\n        @Override\n        public RedisCommandDescription getCommandDescription() {\n            // \u8fd4\u56de\u5b58\u5728Redis\u4e2d\u7684\u6570\u636e\u7c7b\u578b  \u5b58\u50a8\u7684\u662fHash, \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5916\u9762\u7684key\n            return new RedisCommandDescription(RedisCommand.HSET, "");\n        }\n\n        @Override\n        public String getKeyFromData(TestEntity data) {\n            // \u4ece\u6570\u636e\u4e2d\u83b7\u53d6Key: Hash\u7684Key\n            return String.valueOf(data.userId());\n        }\n\n        @Override\n        public String getValueFromData(TestEntity data) {\n            // \u4ece\u6570\u636e\u4e2d\u83b7\u53d6Value: Hash\u7684value\n            return String.valueOf(data.price());\n        }\n    }\n\n}\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u521b\u5efaFlinkJedisPoolConfig\u8f83\u7e41\u7410\uff0credis\u7684\u6bcf\u79cd\u64cd\u4f5c\u90fd\u8981\u6784\u5efaRedisMapper,\u975e\u5e38\u7684\u4e0d\u7075\u654f\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4f7f\u7528\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u3001\u81ea\u52a8\u914d\u7f6e\u7684\u65b9\u5f0f\u53ea\u9700\u8981\u914d\u7f6eredis\n\u8fde\u63a5\u53c2\u6570\u3001flink\u8fd0\u884c\u53c2\u6570\uff0cStreamX \u4f1a\u81ea\u52a8\u7ec4\u88c5source\u548csink\uff0c\u6781\u5927\u7684\u7b80\u5316\u5f00\u53d1\u903b\u8f91\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u7ef4\u62a4\u6027\u3002"),(0,i.kt)("h2",{id:"streamx-\u5199\u5165-redis"},"StreamX \u5199\u5165 Redis"),(0,i.kt)("p",null,"RedisSink \u9ed8\u8ba4\u4e3aAT_LEAST_ONCE (\u81f3\u5c11\u4e00\u6b21)\u7684\u5904\u7406\u8bed\u4e49\uff0c\u5728\u5f00\u542fcheckpoint\u60c5\u51b5\u4e0b\u4e24\u9636\u6bb5\u6bb5\u63d0\u4ea4\u652f\u6301EXACTLY_ONCE\u8bed\u4e49\uff0c\u53ef\u4f7f\u7528\u7684\u8fde\u63a5\u7c7b\u578b\uff1a \u5355\u8282\u70b9\u6a21\u5f0f\u3001\u54e8\u5175\u6a21\u5f0f\u3002"),(0,i.kt)("h3",{id:"1-\u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"},"1. \u914d\u7f6e\u7b56\u7565\u548c\u8fde\u63a5\u4fe1\u606f"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"\u5355\u8282\u70b9\u914d\u7f6e",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink \u914d\u7f6e\nredis.sink:\n  host: 127.0.0.1 #\u5fc5\u987b\u53c2\u6570\n  #\u9009\u586b\u53c2\u6570\n  port: 6379\n  database: 2\n  password: \n  connectType: jedisPool #\u53ef\u9009\u53c2\u6570\uff1ajedisPool\uff08\u9ed8\u8ba4\uff09|sentinel\n  maxTotal: \n  maxIdle: \n  minIdle: \n  connectionTimeout: \n"))),(0,i.kt)(s.Z,{value:"\u54e8\u5175\u6a21\u5f0f\u914d\u7f6e",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#redis sink \u914d\u7f6e\nredis.sink:\n  masterName: master \u54e8\u5175\u6a21\u5f0f\u53c2\u6570\n  host: 192.168.0.1:6379, 192.168.0.3:6379 #\u5fc5\u987b\u53c2\u6570\uff0c\u5fc5\u987b\u6307\u5b9a\u8fde\u63a5\u7684port\n  connectType: sentinel\n  #\u9009\u586b\u53c2\u6570\n  soTimeout: 6379\n  database: 2\n  password: \n  maxTotal: \n  maxIdle: \n  minIdle: \n  connectionTimeout: \n")))),(0,i.kt)("h3",{id:"2-\u5199\u5165redis-1"},"2. \u5199\u5165Redis"),(0,i.kt)("p",null,"\u7528 StreamX \u5199\u5165redis\u975e\u5e38\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.sink.{RedisMapper, RedisSink}\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand\nimport org.json4s.DefaultFormats\n\nobject FlinkRedisSinkApp extends FlinkStreaming {\n\n  @transient\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n\n    /**\n     * \u521b\u9020\u8bfb\u53d6\u6570\u636e\u7684\u6e90\u5934\n     */\n    val source = context.addSource(new TestSource)\n\n\n    // Redis sink..................\n    //1)\u5b9a\u4e49 RedisSink\n    val sink: RedisSink = RedisSink()\n    //2)\u5199Mapper\u6620\u5c04\n    val personMapper: RedisMapper[TestEntity] = RedisMapper[TestEntity](RedisCommand.HSET, "flink_user", _.userId.toString, _.orderId.toString)\n\n    sink.sink[TestEntity](source, personMapper, 60000000).setParallelism(1)\n\n  }\n\n}\n\n\n/**\n * RedisMapper\n * @param cmd redis \u5199\u5165\u547d\u4ee4\n * @param additionalKey \u5199\u5165\u989d\u5916key,\u9002\u7528\u4e8e hset\n * @param key  \u5199\u5165key\n * @param value \u5199\u5165value\n * @tparam T\n */\ncase class RedisMapper[T](cmd: RedisCommand, additionalKey: String, key: T => String, value: T => String) extends RMapper[T] {\n\n  override def getCommandDescription: RedisCommandDescription = new RedisCommandDescription(cmd, additionalKey)\n\n  override def getKeyFromData(r: T): String = key(r)\n\n  override def getValueFromData(r: T): String = value(r)\n\n}\n')))),(0,i.kt)("p",null,"\u5982\u4ee3\u7801\u6240\u793a\uff0cStreamX \u4f1a\u81ea\u52a8\u52a0\u8f7d\u914d\u7f6e\u521b\u5efaRedisSink\uff0c\u7528\u6237\u901a\u8fc7\u521b\u5efa\u9700\u8981\u7684RedisMapper\u5bf9\u8c61\u5373\u5b8c\u6210redis\u5199\u5165\u64cd\u4f5c\uff0c",(0,i.kt)("strong",{parentName:"p"},"additionalKey\u4e3ahset\u65f6\u4e3a\u6700\u5916\u5c42key\u5176\u4ed6\u5199\u5165\u547d\u4ee4\u65e0\u6548"),"\u3002\nRedisSink.sink()\u5199\u5165\u76f8\u5e94\u7684key\u5bf9\u5e94\u6570\u636e\u662f\u9700\u8981\u6307\u5b9a\u8fc7\u671f\u65f6\u95f4\uff0c\u5982\u679c\u672a\u6307\u5b9a\u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u4e3ajava Integer.MAX_VALUE (67\u5e74)\u3002\u5982\u4ee3\u7801\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'class RedisSink() extends Sink {\n\n  def sink[T](stream: DataStream[T], mapper: RedisMapper[T], ttl: Int = Int.MaxValue): DataStreamSink[T] = {\n    val sinkFun = (enableCheckpoint, cpMode) match {\n      case (false, CheckpointingMode.EXACTLY_ONCE) => throw new IllegalArgumentException("redis sink EXACTLY_ONCE must enable checkpoint")\n      case (true, CheckpointingMode.EXACTLY_ONCE) => new Redis2PCSinkFunction[T](config, mapper, ttl)\n      case _ => new RedisSinkFunction[T](config, mapper, ttl)\n    }\n    val sink = stream.addSink(sinkFun)\n    afterSink(sink, parallelism, name, uid)\n  }\n\n}\n\n')),(0,i.kt)("h3",{id:"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4"},"\u652f\u6301\u7684redis\u64cd\u4f5c\u547d\u4ee4"),(0,i.kt)("p",null,"\u652f\u6301redis\u64cd\u4f5c\u547d\u4ee4\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public enum RedisCommand {\n\n    /**\n     * Insert the specified value at the head of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operations.\n     */\n    LPUSH(RedisDataType.LIST),\n\n    /**\n     * Insert the specified value at the tail of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operation.\n     */\n    RPUSH(RedisDataType.LIST),\n\n    /**\n     * Add the specified member to the set stored at key.\n     * Specified member that is already a member of this set is ignored.\n     */\n    SADD(RedisDataType.SET),\n\n    /**\n     * Set key to hold the string value. If key already holds a value,\n     * it is overwritten, regardless of its type.\n     */\n    SET(RedisDataType.STRING),\n\n    /**\n     * Adds the element to the HyperLogLog data structure stored at the variable name specified as first argument.\n     */\n    PFADD(RedisDataType.HYPER_LOG_LOG),\n\n    /**\n     * Posts a message to the given channel.\n     */\n    PUBLISH(RedisDataType.PUBSUB),\n\n    /**\n     * Adds the specified members with the specified score to the sorted set stored at key.\n     */\n    ZADD(RedisDataType.SORTED_SET),\n\n    /**\n     * Removes the specified members from the sorted set stored at key.\n     */\n    ZREM(RedisDataType.SORTED_SET),\n\n    /**\n     * Sets field in the hash stored at key to value. If key does not exist,\n     * a new key holding a hash is created. If field already exists in the hash, it is overwritten.\n     */\n    HSET(RedisDataType.HASH);\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8b66\u544a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RedisSink \u76ee\u524d\u652f\u6301\u5355\u8282\u70b9\u6a21\u5f0f\u3001\u54e8\u5175\u6a21\u5f0f\u8fde\u63a5\uff0c\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u652f\u6301\u4e8b\u52a1\uff0cStreamX \u76ee\u524d\u4e3a\u652f\u6301\uff0c\u5982\u6709\u4f7f\u7528\u573a\u666f\uff0c\u8bf7\u8c03\u7528Flink Connector Redis\u5b98\u65b9api\u3002",(0,i.kt)("br",null),"\nEXACTLY_ONCE\u8bed\u4e49\u4e0b\u5fc5\u987b\u5f00\u542fcheckpoint\uff0c\u5426\u5219\u7a0b\u5e8f\u4f1a\u629b\u51fa\u53c2\u6570\u5f02\u5e38\u3002",(0,i.kt)("br",null),"\nEXACTLY_ONCE\u8bed\u4e49\u4e0bcheckpoint\u7684\u6570\u636esink\u7f13\u5b58\u5728\u5185\u5b58\u91cc\u9762\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u6570\u636e\u5408\u7406\u8bbe\u7f6echeckpoint\u65f6\u95f4\u95f4\u9694\uff0c\u5426\u5219\u6709",(0,i.kt)("strong",{parentName:"p"},"oom"),"\u7684\u98ce\u9669\u3002",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,i.kt)("p",null,"\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,i.kt)("strong",{parentName:"p"},"StreamX")," \u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/development/conf"},"\u9879\u76ee\u914d\u7f6e")))}k.isMDXComponent=!0}}]);