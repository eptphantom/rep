var json_data,uuids,id=0;function sortData(t){var a=[],e=[],n=[];for(i=0;i<t.length;i++)a.push(`<b>${t[i].card.title}</b> - <i>${t[i].card.creator_username}</i>`),e.push(t[i].card.uuid);return n.push(a,e),n}function addToWrapper(t){var a=document.createElement("button");a.classList.add("answer"),a.id=id,a.innerHTML=t,document.getElementsByClassName("wrapper")[0].appendChild(a),document.getElementById(id.toString()).addEventListener("click",function(){window.location.assign("https://kahoot-cheatsheet.infiniti20.repl.co/answers/?uuid="+uuids[a.id])}),id++}function loadButtons(){data=sortData(json_data);var t=data[0];if(uuids=data[1],t.length<1){const t=new URL(document.location).searchParams;urlData=t.get("kahootName"),addToWrapper("No results found for <i><b>"+urlData+"</i></b>")}for(i=0;i<t.length;i++)addToWrapper(t[i])}function requestQuery(t){const a=new XMLHttpRequest,e="https://cors.infiniti20.repl.co/create.kahoot.it/rest/kahoots/?query="+t;a.open("GET",e),a.send(),a.onreadystatechange=function(){if(4==a.readyState){var t=a.responseText,e=JSON.parse(t);e=Object.entries(e)[0][1],json_data=e,loadButtons()}}}window.addEventListener("load",()=>{const t=new URL(document.location).searchParams;urlData=t.get("kahootName"),requestQuery(urlData)});