'use strict';
// const apiKey = '48ccc19174mshdc7442c60f3ce8bp142970jsn12d75508ec96' ;
//
// const searchURL = 'https://api.github.com/user/repos';
// https://api.github.com/users/{user}

var form =document.getElementById("search-form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let search = document.getElementById("search").value;
    let originalName = search.split(' ').join('')

    //alert(originalName);
    $('#results').removeClass('hidden');
    $('#results-list').empty();
    fetch("https://api.github.com/users/"+originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);

            document.getElementById("results-list").innerHTML = `
            <li>${data.login} <a href="https://github.com/${originalName}" target="_blank">Link to repo</a></li>
            `
        })

})




// const textBtn = document.getElementById('js-btn-search');
// let searchText = document.getElementById('js-search');
// textBtn.addEventListener("click", getRepos);
//
// async function getRepos(){
//     const url = "https://api.github.com/users/"+searchText;
//     const response = await fetch(url)
//     const result = await response.json();
//     console.log(result);
// }