let searchInput = document.getElementById("searchInput");
let btnSend = document.getElementById("btn-searchID");
let divOne = document.getElementById("gridLibri");

function display() {
    btnSend.onclick = function() {
        fetch('https://openlibrary.org/subjects/'+searchInput.value+ '.json')
       .then(response => response.json())
       .then(function (response) {
        
         for(let i=0;i<15;i++) {
      
             let separatore2 = document.createElement('div');
             divOne.append(separatore2);
             separatore2.setAttribute("class","separator2");
             let container = document.createElement('div');
             divOne.append(container);
             container.setAttribute('class','container flex-column')
             let cover = document.createElement('img');
             cover.setAttribute('class','img-cover p-2');
             cover.setAttribute('src', 'https://covers.openlibrary.org/b/id/'+response.works[i].cover_id+'-M.jpg');
             container.append(cover);
             let title = document.createElement('h2');
             title.innerText = response.works[i].title;
             container.append(title);
             title.setAttribute('class','text-center');
             let authors = document.createElement('h3');
             authors.innerText = response.works[i].authors[0].name;
             container.append(authors);
             authors.setAttribute('class','text-center mt-1');
             let btndisplay = document.createElement('button');
             container.append(btndisplay);
             btndisplay.setAttribute("class","button");
             btndisplay.setAttribute("id","button");
             btndisplay.textContent = "leggi la descrizione";
             btndisplay.onclick = function(e) {
      
               fetch('https://openlibrary.org'+response.works[i].key+'.json')
               .then(response=> response.json())
               .then(function(response) {
                 let description = document.createElement("p");
                 description.innerHTML = response.description;
                 authors.append(description);
                 
               })
      
             }
             
      
         }
         
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
       .then(function () {
         // always executed
       })
      }
}
export default display