import{S as w,i as B,s as M,e as c,k as E,c as d,a as u,n as T,d as h,b as r,f as g,F as f,E as m,M as _,J as b}from"./vendor-edd652e5.js";var A={"Sep 03 2021":{Sandwiches:["Milkbun Brioche","Grilled Atlantic Char","Tomato Ginger Chutney","Arugula + Balsamic"],others:["Side Greens","Kielbasa","Browned Butter Blonides","Moscow Mules"]},"Sep 10 2021":{"Spaghetti and Meatballs":["1/3 each Beef, Pork, Veal Meatballs (and Beyond)","Tomato Basil Marinara","Thin Spaghetti"],others:["Garlic Knots","Side Green Salad"]},"Sep 17 2021":{Ramen:["Chicken Bone Sh\u014Dyu Broth","Noodles","Baby Corn","Stir-Fried Bok Choy","Saut\xE9ed Shiitake Mushrooms","Marinated Soft-boiled Eggs","Enoki Mushrooms","Edamame","Gogujang + Roasted Garlic Oil"]},"Sep 24 2021":{"Pork and Cabbage Dumplings":["Ground Pork","Napa Cabbage"],"Cod and Chive Dumplings":["Chopped Fresh Cod","Fresh Chives"],others:["Scallion Pancakes","Gogujang + Roasted Garlic Oil","Dumpling Sauce"]},"Oct 22 2021":{"Borgatti's Ravioli":["Cheese","Meat and Spinach"],others:["San Marzano Red Sauce","Apple Crumble","Strawberry Shortcake"]},"Nov 05 2021":{"Miso-Glazed Sable":["Sablefish Fillets","White Miso","Mirin","Rice Vinegar","Water"],"Fried Rice":["Chopped Broccoli","Edamame","Shaved Carrot","Julienned Red Pepper","Oyster Sauce","Soy Sauce"],others:["Roasted Brussel Sprouts","Roasted Delicata Squash"]},"Nov 12 2021":{"Cajun Gumbo":["The Holy Trinity","Okra","Andouille Sausage","Monkfish","Chicken Stock","Cayenne","Smoked Paprika"],others:["Bread Bowls","Fried Okra"]}},k=[{_layout:[3,2,3],sandwich:"Char sandwich presentation",cutting:"Meg cutting buns",grilling:"Colin and Elias grilling the Char",squid:"Squid-like charred kielbasa",elias:"Elias happily grilling Char",buns:"Nice buns",table:"Eating together",shoebench:"Presenting the suite shoebench"},{_layout:[3,2,3],beyond:"Beyond meatballs",colin:"Colin with the food",elias_nathan:"Elias and Nathan cooking",pasta:"All the pasta and sauce",food:"A plated presentation of Beyond meatballs",carpet:"A plated presentation of the real meatballs",laughing:"Elias and Colin laughing",cart:"Colin and Elias moving the food and cart"},{_layout:[3,2,2],can_of_corn:"A can of mini corn, on a stove",onions:"Sizzling onions on the stove",pour:"The onions moving to a plate",ramen:"The final ramen, tv ad edition",cart:"The cart with ramen goods",ramen2:"More ramen, carpet edition",elias:"Elias drinking ramen broth"},{_layout:[3,2,2],katie:"Katie, as seen by Nathan",cooking:"Colin, Duncan, and Dieter cooking",dumplings:"A lot of fried pork dumplings",elias_chop_fish:"Elias chopping white fish filling",folding:"A dumpling being folded",rolling:"The dumplings dough being rolled",sizzling:"Dumplings frying in a cast iron"},{_layout:[2,2,2],pots:"Marinara and a boiling pot",pastabowl:"The ravioli in a bowl",pastabox:"The ravioli in the Borgatti's box",cart:"The pasta in a bowl dressed with chiffonaded basil",crumble:"The apple crisp",dessert:"The crisp and strawberry shortcake"},{_layout:[3,2,1],cooking:"Elias and Colin cooking",fish:"Elias portioning the Sable",elias_hands:"Elias showing Colin's mitts",veggies:"Veggies being cooked",oven:"Brussel sprouts and squash in the oven",plate:"The plated food"},{_layout:[2,3,2],roux:"Roux and holy trinity in progress",breads:"The bread bowls, uncooked",okra:"Frying okra",baking:"The bread bowls in the oven",deglazing:"Deglazing the cast iron",bowl:"The gumbo in the bowl",death:"Nathan and Colin extremely full"}];function v(s,n,o){const i=s.slice();return i[4]=n[o],i}function S(s,n,o){const i=s.slice();return i[7]=n[o],i}function y(s){let n,o,i,e,l;return{c(){n=c("div"),o=c("img"),this.h()},l(a){n=d(a,"DIV",{class:!0});var t=u(n);o=d(t,"IMG",{class:!0,src:!0,alt:!0}),t.forEach(h),this.h()},h(){r(o,"class","u-max-full-width svelte-qlc22q"),m(o.src,i="/dinners/"+(s[0]+1)+"/"+s[7][0]+".jpg")||r(o,"src",i),r(o,"alt",e=s[7][1]),r(n,"class",l="one-"+(s[4].length==3?"third":"half")+" column")},m(a,t){g(a,n,t),f(n,o)},p(a,t){t&3&&!m(o.src,i="/dinners/"+(a[0]+1)+"/"+a[7][0]+".jpg")&&r(o,"src",i),t&2&&e!==(e=a[7][1])&&r(o,"alt",e),t&2&&l!==(l="one-"+(a[4].length==3?"third":"half")+" column")&&r(n,"class",l)},d(a){a&&h(n)}}}function C(s){let n,o,i=s[4],e=[];for(let l=0;l<i.length;l+=1)e[l]=y(S(s,i,l));return{c(){n=c("div");for(let l=0;l<e.length;l+=1)e[l].c();o=E(),this.h()},l(l){n=d(l,"DIV",{class:!0});var a=u(n);for(let t=0;t<e.length;t+=1)e[t].l(a);o=T(a),a.forEach(h),this.h()},h(){r(n,"class","row")},m(l,a){g(l,n,a);for(let t=0;t<e.length;t+=1)e[t].m(n,null);f(n,o)},p(l,a){if(a&3){i=l[4];let t;for(t=0;t<i.length;t+=1){const p=S(l,i,t);e[t]?e[t].p(p,a):(e[t]=y(p),e[t].c(),e[t].m(n,o))}for(;t<e.length;t+=1)e[t].d(1);e.length=i.length}},d(l){l&&h(n),_(e,l)}}}function G(s){let n,o=s[1],i=[];for(let e=0;e<o.length;e+=1)i[e]=C(v(s,o,e));return{c(){n=c("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){n=d(e,"DIV",{class:!0});var l=u(n);for(let a=0;a<i.length;a+=1)i[a].l(l);l.forEach(h),this.h()},h(){r(n,"class","container")},m(e,l){g(e,n,l);for(let a=0;a<i.length;a+=1)i[a].m(n,null)},p(e,[l]){if(l&3){o=e[1];let a;for(a=0;a<o.length;a+=1){const t=v(e,o,a);i[a]?i[a].p(t,l):(i[a]=C(t),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=o.length}},i:b,o:b,d(e){e&&h(n),_(i,e)}}}function D(s,n,o){let{week:i}=n,e,l,a;return s.$$set=t=>{"week"in t&&o(0,i=t.week)},s.$$.update=()=>{s.$$.dirty&13&&(o(2,e=k[i]._layout),o(3,l=Object.entries(k[i]).splice(1)),o(1,a=[l.splice(0,e[0]),l.splice(0,e[1]),l.splice(0,e[2])]))},[i,a,e,l]}class P extends w{constructor(n){super();B(this,n,D,G,M,{week:0})}}export{P,A as m};
