(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{387:function(s,a,n){"use strict";n.r(a);var e=n(10),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_9-5-应用配置解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-应用配置解析"}},[s._v("#")]),s._v(" 9.5 应用配置解析")]),s._v(" "),a("p",[s._v("配置是微服务治理里最重要的环节之一。但现在的行业内，大部分都只做到配置的下发，而没有梳理配置的关系，依赖配置的探活。\n因此本文主要介绍以上的配置治理。")]),s._v(" "),a("h2",{attrs:{id:"_9-5-1-用户配置玩法多样性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-1-用户配置玩法多样性"}},[s._v("#")]),s._v(" 9.5.1 用户配置玩法多样性")]),s._v(" "),a("p",[s._v("因为用户的配置的格式是多种多样，我们需要用户自己设置的配置模板，来解析对应的配置。以下举一个例子\n例如一个用户的MySQL配置可能存在如下三种配置方式。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[mysqlconfig]\n    addr = "ip:port"\n    user = "hello"\n    password = "world"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[mysqlconfig]\n    ip = "ip"\n    port = "port"\n    user = "hello"\n    password = "world"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[mysqlconfig]\n    dsn = "user:password@ip:port"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在我们不清楚用户配置的字段情况下，我们是无法将这些配置解析出来。所以我们必须设计一种方式，能够让我们的"),a("code",[s._v("Juno agent")]),s._v("能够准确理解用户的这些配置。")]),s._v(" "),a("h2",{attrs:{id:"_9-5-2-配置模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-2-配置模板"}},[s._v("#")]),s._v(" 9.5.2 配置模板")]),s._v(" "),a("p",[s._v("为了适应用户不同配置方式，所以我们首先需要引入模板的概念。\n我们要将用户不同的配置方式，配置成一个解析模板，将这种模板存入到数据库中，将其标记为一种类型，我们把这种类型称之为"),a("code",[s._v("JunoTpl")]),s._v("，那么我们可以把上面的三种mysql配置方式，可以将配置设置为"),a("code",[s._v("JunoTpl")]),s._v("=1，"),a("code",[s._v("JunoTpl")]),s._v("=2，"),a("code",[s._v("JunoTpl")]),s._v("=3，这样我们就可以去类型去解析不同的配置方式。")]),s._v(" "),a("h2",{attrs:{id:"_9-5-3-配置基础结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-3-配置基础结构"}},[s._v("#")]),s._v(" 9.5.3 配置基础结构")]),s._v(" "),a("p",[s._v("但这样只是解决了配置的方式，但是我们的"),a("code",[s._v("Juno agent")]),s._v("还是无法理解模板里的字段类型，这个字段是将起解析为ip，还是port，还是dsn，我们需要一个基础结构去识别。\n在这里"),a("code",[s._v("Juno agent")]),s._v("规范了基本的几个基础结构，定义如下：")]),s._v(" "),a("ul",[a("li",[s._v("$SCHEME")]),s._v(" "),a("li",[s._v("$IP")]),s._v(" "),a("li",[s._v("$PORT")]),s._v(" "),a("li",[s._v("$DSN")]),s._v(" "),a("li",[s._v("$USERNAME")]),s._v(" "),a("li",[s._v("$PASSWORD")])]),s._v(" "),a("h2",{attrs:{id:"_9-5-4-配置类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-4-配置类型"}},[s._v("#")]),s._v(" 9.5.4 配置类型")]),s._v(" "),a("p",[a("code",[s._v("Juno agent")]),s._v("可以通过模板和基础结构，很好的解析出配置。但是他仍然不知道这个配置类型，因为配置解析出来，他可以是MySQL，也可能是Redis，我们还需要识别配置的类型。这样的好处，是为了根据不同类型，去做该类型的探活，这样效果更准确。（例如MySQL，如果只做接口探活，那么有可能你可以访问端口，但你该机器其实是没有访问权限。而"),a("code",[s._v("Juno agent")]),s._v("用MySQL客户端方式访问，就可以提前知道你的应用[agent和你的应用同机部署]部署的机器是否有该MySQL权限）。")]),s._v(" "),a("p",[s._v("目前"),a("code",[s._v("Juno agent")]),s._v("支持以下类型")]),s._v(" "),a("ul",[a("li",[s._v("$MYSQL")]),s._v(" "),a("li",[s._v("$REDIS")]),s._v(" "),a("li",[s._v("$GRPC")])]),s._v(" "),a("p",[s._v("后续会支持更多类型")]),s._v(" "),a("h2",{attrs:{id:"_9-5-5-配置结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-配置结构"}},[s._v("#")]),s._v(" 9.5.5 配置结构")]),s._v(" "),a("p",[s._v("根据上述的介绍，我们的"),a("code",[s._v("Juno agent")]),s._v("可以将之前多样性的而用户配置完全解析。")]),s._v(" "),a("h3",{attrs:{id:"_9-5-5-1-第一种配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-1-第一种配置"}},[s._v("#")]),s._v(" 9.5.5.1 第一种配置")]),s._v(" "),a("p",[s._v("我们在用户端的配置的表现形式将是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[mysqlconfig]\n    addr = "ip:port"\n    user = "hello"\n    password = "world"\n    JunoTpl = 1\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("我们在后台配置JunoTpl为1的模板内容以下所示，该数据存储在ETCD中。\nkeyname为/Juno-agent/configtpl/1\nvalue如下所示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("addr = $IP:$PORT\nuser = $USERNAME\npassword = $PASSWORD\nJunoType = $MYSQL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_9-5-5-2-第二种配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-2-第二种配置"}},[s._v("#")]),s._v(" 9.5.5.2 第二种配置")]),s._v(" "),a("p",[s._v("我们在用户端的配置的表现形式将是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[mysqlconfig]\n    ip = "ip"\n    port = "port"\n    user = "hello"\n    password = "world"\n    JunoTpl = 2\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("我们在后台配置JunoTpl为2的模板内容以下所示，该数据存储在ETCD中。\nkeyname为/Juno-agent/configtpl/2\nvalue如下所示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ip = $IP\nport = $PORT\nuser = $USERNAME\npassword = $PASSWORD\nJunoType =  $MYSQL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_9-5-5-3-第三种配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-3-第三种配置"}},[s._v("#")]),s._v(" 9.5.5.3 第三种配置")]),s._v(" "),a("p",[s._v("我们在用户端的配置的表现形式将是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[mysqlconfig]\n    dsn = "user:password@ip:port"\n    JunoTpl = 3\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("我们在后台配置JunoTpl为3的模板内容以下所示，该数据存储在ETCD中。\nkeyname为/Juno-agent/configtpl/3\nvalue如下所示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dsn = $DSN\nJunoType = $MYSQL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);