(this["webpackJsonpmy-online-shop"]=this["webpackJsonpmy-online-shop"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){},63:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(21),a=c.n(n),i=(c(50),c(14)),l=c(5),j=c(3),d=(c(51),c(52),c(0));var o=function(e){var t=e.show,c=e.click;return t&&Object(d.jsx)("div",{className:"backdrop ",onClick:c})},u=c(13),b=c(110);c(54);var h=function(e){var t=e.item,c=e.handleQtyChange,r=e.handleRemoveCart;return Object(d.jsxs)("div",{className:"cartitem",children:[Object(d.jsx)("div",{className:"cartitem_image",children:Object(d.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(d.jsx)(l.b,{to:"/product/".concat(t.product),children:Object(d.jsx)("p",{children:t.name})}),Object(d.jsxs)("p",{className:"cartitem_price",children:["$",t.price]}),Object(d.jsx)("select",{className:"cartitem_select",value:t.qty,onChange:function(e){return c(t.product,e.target.value)},children:Object(u.a)(Array(t.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(d.jsx)("button",{className:"cartitem_delete",onClick:function(){return r(t.product)},children:Object(d.jsx)(b.a,{})})]})},p=(c(63),c(4)),O=c(9),x=c.n(O),m=c(20),f="ADD_TO_CART",v="REMOVE_FROM_CART",A=c(19),g=c.n(A),y=function(e,t){return function(){var c=Object(m.a)(x.a.mark((function c(r,s){var n,a;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,g.a.get("https://foodapisamju.herokuapp.com/api/products/".concat(e));case 2:n=c.sent,a=n.data,r({type:f,payload:{product:a._id,name:a.name,imageUrl:a.imageUrl,price:a.price,countInStock:a.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(s().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()};var S=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.cart})).cartItems,c=function(t,c){e(y(t,c))},r=function(t){e(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(c,r){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:v,payload:e}),localStorage.setItem("cart",JSON.stringify(r().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(t))};return Object(d.jsxs)("div",{className:"cartscreen",children:[Object(d.jsxs)("div",{className:"cartscreen_left",children:[Object(d.jsx)("h2",{children:" Shopping Cart"}),0===t.length?Object(d.jsxs)("div",{children:[" ","Your cart is Empty ",Object(d.jsx)(l.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(d.jsx)(h,{id:e.product,item:e,handleQtyChange:c,handleRemoveCart:r},e.product)}))]}),Object(d.jsxs)("div",{className:"cartscreen_right",children:[Object(d.jsxs)("div",{className:"cartscreen_info",children:[Object(d.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") Item"]}),Object(d.jsxs)("p",{children:["$",t.reduce((function(e,t){return t.price*t.qty+e}),0).toFixed(2)]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:" Proceed To Checkout"})})]})]})};c(84);var N=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(!1),a=Object(i.a)(n,2),l=(a[0],a[1]),j=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,o=Object(r.useState)(""),u=Object(i.a)(o,2),b=u[0],h=u[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Contact Us Here!"}),Object(d.jsx)("p",{children:"Address: Martha's Living products Ltd. 43 Longley road, Tooting, London, SW17 9LA, United Kingdom"}),Object(d.jsxs)("li",{children:[" ","Tel number:",Object(d.jsx)("a",{href:" tell:+2348084624301",children:" +2348084624301"})]}),Object(d.jsxs)("li",{children:["Email:"," ",Object(d.jsxs)("a",{href:" mailto:shopify.raymart7@gmail.com",children:[" ","shopify.raymart7@gmail.com"]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"About Business"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("a",{href:"#",children:" About Us "})]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("a",{href:"#",children:" Blog "})]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("a",{href:"#",children:" Contact Us "})]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Business Policy"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Privacy Policy"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Returns & Refund Policicy"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Terms of Service"})})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{action:"",className:"newsletter",children:[Object(d.jsx)("h3",{children:"Newsletter"}),Object(d.jsx)("p",{children:"Sign up for the latest news, offers and styles"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"email",placeholder:"Enter Your Email",value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("span",{class:"error",children:b}),Object(d.jsxs)("button",{type:"submit",onClick:function(e){if(e.preventDefault(),""===c)return e.preventDefault(),h("Please enter your Email Address"),!1;if(!c.match(j))return e.preventDefault(),h("Please enter a valid email"),!1;var t=g.a.post("https://foodapisamju.herokuapp.com/subscribe",{email:c}).data;localStorage.setItem("message",JSON.stringify(t)),console.log(t),l(!0),s("")},children:[" ","SUBSCRIBE"]})]})})]}),Object(d.jsxs)("div",{class:"copy",children:[Object(d.jsx)("p",{children:"Copyright \xa9 2020, Martha's Living Brands."}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:""}),Object(d.jsx)("i",{class:"fa fa-cc-amex","aria-hidden":"true"})]}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"",children:Object(d.jsx)("i",{class:"fa fa-cc-mastercard","aria-hidden":"true"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"",children:Object(d.jsx)("i",{class:"fa fa-paypal","aria-hidden":"true"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"",children:Object(d.jsx)("i",{class:"fa fa-cc-visa","aria-hidden":"true"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"",children:Object(d.jsx)("i",{class:"fa fa-google-wallet","aria-hidden":"true"})})}),Object(d.jsx)("l1",{children:Object(d.jsx)("a",{href:"",children:Object(d.jsx)("i",{class:"fa fa-credit-card","aria-hidden":"true"})})})]})]})]})};c(85);var k=function(e){var t=e.imageUrl,c=e.name,r=e.description,s=e.price,n=e.product_id;return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:t,alt:c}),Object(d.jsxs)("div",{className:"product_info",children:[Object(d.jsx)("p",{className:"info_name",children:c}),Object(d.jsxs)("p",{className:"info_description",children:[r.substring(1,100),"..."]}),Object(d.jsxs)("p",{className:"info_price",children:["$",s]}),Object(d.jsx)(l.b,{to:"./product/".concat(n),className:"info_button",children:"Veiw"})]})]})},I=(c(86),"GET_PRODUCTS_REQUES"),w="GET_PRODUCTS_SUCCESS",Z="GET_PRODUCTS_FAIL",T="GET_PRODUCTS_DETAILS_REQUES",D="GET_PRODUCTS_DETAILS_SUCCESS",z="GET_PRODUCTS_DETAILS_FAIL",U="GET_PRODUCT_DETAIL_RESET";var Y=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.getProducts})),c=t.products,s=t.loading,n=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(m.a)(x.a.mark((function e(t){var c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:I}),e.next=4,g.a.get("https://foodapisamju.herokuapp.com/api/products");case 4:c=e.sent,r=c.data,t({type:w,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:Z,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(d.jsxs)("div",{className:"homescreen",children:[Object(d.jsx)("h2",{className:"homescreen_title",children:"Lastest Products"}),Object(d.jsx)("div",{className:"homescreen_products",children:s?Object(d.jsx)("h2",{children:"Loading..."}):n?Object(d.jsx)("h2",{children:n}):c.map((function(e){return Object(d.jsx)(k,{product_id:e._id,name:e.name,price:e.price,description:e.description,imageUrl:e.imageUrl},e._id)}))})]})},C=(c(87),c(29)),M=c.n(C);var L=function(e){var t=e.click,c=Object(p.c)((function(e){return e.cart})).cartItems;return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("div",{className:"navbar_logo",children:Object(d.jsx)(l.b,{to:"/my-online-shop",children:Object(d.jsx)("h2",{children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:""})})})}),Object(d.jsxs)("ul",{className:"navbar_links",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/cart",className:"cart_link",children:[Object(d.jsx)(M.a,{}),Object(d.jsxs)("span",{children:[" ","Cart",Object(d.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/my-online-shop",children:"Shop"})})]}),Object(d.jsxs)("div",{className:"hamburger_menu",onClick:t,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})};c(92);var P=function(e){var t=e.match,c=e.history,s=Object(r.useState)(1),n=Object(i.a)(s,2),a=n[0],l=n[1],j=Object(p.b)(),o=Object(p.c)((function(e){return e.productDetails})),b=o.product,h=o.loading,O=o.error;return console.log(b),Object(r.useEffect)((function(){var e;b&&t.params.id!==b._id&&j((e=t.params.id,function(){var t=Object(m.a)(x.a.mark((function t(c){var r,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:T}),t.next=4,g.a.get("https://foodapisamju.herokuapp.com/api/products/".concat(e));case 4:r=t.sent,s=r.data,c({type:D,payload:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:z,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[j,b,t]),Object(d.jsx)("div",{className:"productscreen",children:h?Object(d.jsx)("h2",{children:"Loading...."}):O?Object(d.jsx)("h2",{children:O}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"productscreen_left",children:[Object(d.jsx)("div",{className:"left_image",children:Object(d.jsx)("img",{src:b.imageUrl,alt:b.name})}),Object(d.jsxs)("div",{className:"left_info",children:[Object(d.jsx)("p",{className:"left_name",children:b.name}),Object(d.jsxs)("p",{className:"left_price",children:["price: $",b.price]}),Object(d.jsxs)("p",{className:"left_description",children:["Description: ",b.description]})]})]}),Object(d.jsx)("div",{className:"productscreen_right",children:Object(d.jsxs)("div",{className:"right_info",children:[Object(d.jsxs)("p",{children:["Price: ",Object(d.jsxs)("span",{children:["$",b.price]})]}),Object(d.jsxs)("p",{children:["Status:"," ",Object(d.jsx)("span",{children:b.countInStock>0?"In Stock":"Out Of Stock"})]}),Object(d.jsxs)("p",{children:["Qty:",Object(d.jsx)("select",{value:a,onChange:function(e){return l(e.target.value)},children:Object(u.a)(Array(b.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(d.jsx)("p",{children:Object(d.jsxs)("button",{type:"button",onClick:function(){j(y(b._id,a)),c.push("/cart")},children:[" ","Add To Cart"]})})]})})]})})};c(93);var B=function(e){var t=e.show,c=Object(p.c)((function(e){return e.cart})).cartItems;return Object(d.jsx)("div",{className:t?"sidedrawer":"show",children:Object(d.jsxs)("ul",{className:"sidedrawer_links",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/cart",className:"sidedrawer_link",children:[Object(d.jsx)(M.a,{}),Object(d.jsxs)("span",{children:["Cart",Object(d.jsx)("span",{className:"sidedrawer__cartbadge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/my-online-shop",children:"Shop"})})]})})};var J=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(L,{click:function(){return s(!0)}}),Object(d.jsx)(B,{show:c}),Object(d.jsx)(o,{show:c,click:function(){return s(!1)}}),Object(d.jsx)("main",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/my-online-shop",component:Y}),Object(d.jsx)(j.a,{exact:!0,path:"/product/:id",component:P}),Object(d.jsx)(j.a,{exact:!0,path:"/cart",component:S})]})}),Object(d.jsx)("footer",{children:Object(d.jsx)(N,{})})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))},E=c(25),K=c(43),R=c(44),H=c(15),G=Object(E.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(H.a)(Object(H.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(H.a)(Object(H.a)({},e),{},{cartItems:[].concat(Object(u.a)(e.cartItems),[c])});case v:return Object(H.a)(Object(H.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0,products:[]};case w:return{loading:!1,products:t.payload};case Z:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case D:return{loading:!1,product:t.payload};case z:return{loading:!1,error:t.payload};case U:return{product:{}};default:return e}}}),Q=[K.a],F={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},V=Object(E.createStore)(G,F,Object(R.composeWithDevTools)(E.applyMiddleware.apply(void 0,Q)));a.a.render(Object(d.jsx)(p.a,{store:V,children:Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(J,{})})}),document.getElementById("root")),X()}},[[94,1,2]]]);
//# sourceMappingURL=main.4f4477b9.chunk.js.map