
  let data = {}; 
  let cities = [];
  let xhr = new XMLHttpRequest(); //вытягиваю джсон файл
    xhr.open('GET', 'https://crossorigin.me/http://country.io/names.json', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
	data = JSON.parse(xhr.responseText);
        for (let key in data){
            cities.push(data[key]); // собираю для удобства все города в массив
        }
    }
        };

    xhr.send();


    class Autocomplete {

        constructor(arr) {
            this.arr = arr;  
            this.arr2 = [];
    }

      getArr2() { 
                     for (let key in this.arr){
                this.arr2.push(this.arr[key].toLowerCase());
                     };
                this.arr2.sort();
             return this.arr2;

            }
    
   
        allCities(){
                    let ul = document.createElement('ul');
                    ul.id = "ull";
            document.getElementById('foc').appendChild(ul);
            for (let key in this.arr2){
                let newBox = document.createElement('li');
                newBox.innerHTML = "<a href='#'>" + this.arr2[key] + "</a>";
                ul.appendChild(newBox);
        }


        }

        setTarget(event){
            document.getElementById('ull').contains(event.target);

        }

        keyUp(){
                 let filter, ul, li,a,i;
            filter = document.getElementById('input').value.toUpperCase();
            li = document.getElementsByTagName("li");

            let counter = 0;
            for (i = 0; i < li.length; i++){
                a = li[i].getElementsByTagName("a")[0];
                if ((a.innerHTML.toUpperCase().indexOf(filter) > -1) && (counter < 6) ){ // делает так, что не больше 5
                    li[i].style.display = "block";
                     counter++; 
                } else if (document.getElementById('input').value == ""){
                    for (let j = 0; j < li.length; j ++){    // возвращает обратно лист если убираем буквы
                        li[j].style.display = "block";
                    }
                } else {
                    li[i].style.display = "none"; // убираем несовпадения
                }}


        }

        blur(){
                       this.arr2 = [];
            
    }

       

       yourChoise(){
        this.blur();
                let a = document.getElementsByTagName('a'); 
                for (let j = 0; j <= a.length; j++){
                          a[j].addEventListener('click', function(){
                            document.getElementById('input').onfocus = true;
                 document.getElementById('input').value = a[j].innerText;
                    setTimeout(function(){alert(document.getElementById('input').value)}, 100);  
                    }
      
       
                    )}

       } 

        rem(){
                 document.getElementById('ull').remove(); 
        }

};


        
    
let city = new Autocomplete(cities);

  
document.getElementById('foc').addEventListener("click",  // выдает полный список по алфавиту при клике
function(){
    
    city.getArr2();
    city.allCities();
    city.yourChoise();
});




document.getElementById('main').addEventListener("click", // удаляет список при не фокусе (чтобы он не копировался дважды)
        function(){ 
       city.blur(); 
       // city.rem();
  
});


document.getElementById('input').addEventListener("keyup", 
  function (){                          // функция, которая показывает города по совпадениям    
city.keyUp();

    });








   
           





 
    




