var json_data;function mapQuestions(e,t){var a=[],s={};for(i=0;i<e.length;i++)(s={})[e[i]]=t[i],a.push(s);return a}function sortData(e){var t=[],a=[],s=[];for(i=0;i<e.length;i++)if("choices"in e[i])for(choices=e[i].choices,l=0;l<choices.length;l++)1==choices[l].correct&&(t.push(choices[l].answer),s.push(l),a.push(e[i].question));return[t,a,s]}function addToWrapper(e,t){var a=document.createElement("p");a.classList.add("answers"),a.classList.add({0:"red",1:"blue",2:"yellow",3:"green"}[t]),a.innerHTML=e,document.getElementsByClassName("wrapper")[0].appendChild(a)}function loadButtons(){for(data=sortData(json_data.questions),answers=data[0],questions=data[1],index=data[2],i=0;i<answers.length;i++)addToWrapper(`<b>${questions[i]}</b> - <i>${answers[i]}</i>`,index[i])}function requestQuery(e){const t=new XMLHttpRequest,a="https://cors.infiniti20.repl.co/create.kahoot.it/rest/kahoots/"+e;t.open("GET",a),t.send(),t.onreadystatechange=function(){if(4==t.readyState){var e=t.responseText,a=JSON.parse(e);json_data=a,console.log(json_data),loadButtons()}}}window.addEventListener("load",()=>{const e=new URL(document.location).searchParams;urlData=e.get("uuid"),requestQuery(urlData)});