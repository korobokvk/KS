
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

let data2 = [];
function bet(arr){    // функция, которая сортирует города по алфавиту, создавая новый массив( чтобы сохранить старый)
    for (let key in arr){
        data2.push(arr[key].toLowerCase());
            };

    data2.sort();
    console.log(data2);
    return data2;
};


document.getElementById('input').addEventListener("focus",  // выдает полный список по алфавиту при клике
function(){
        bet(cities);
        let ul = document.createElement('ul');
        ul.id = "ull"
        document.getElementById('main').appendChild(ul);
        for (let key in data2){
            let newBox = document.createElement('li');
            newBox.innerHTML = "<a href='#'>" + data2[key] + "</a>";
            ul.appendChild(newBox);
        }
});



document.getElementById('input').addEventListener("blur", // удаляет список при не фокусе (чтобы он не копировался дважды)
        function(){  
    
            let a = document.getElementsByTagName('a'); // но, чтобы при клике на список он не удалялся - делаем это
                for (let j = 0; j <= a.length; j++){
                    if (a[j] !== undefined){
                          a[j].addEventListener('click', function(){
                 document.getElementById('input').value = a[j].innerText; // выбираем город
                  document.getElementById('ull').remove(); // а все остальное стираем
                    setTimeout(function(){alert(document.getElementById('input').value)}, 100);  
                    data2 = [];
                    })} else {
                       document.getElementById('input').value = ""; // выбираем город
                  document.getElementById('ull').remove(); // а все остальное стираем
                    data2 = [];
                    }
    }
});



          






document.getElementById('input').addEventListener("keyup", 

  function (){                          // функция, которая показывает города по совпадениям
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




    });








   
           





 
    




