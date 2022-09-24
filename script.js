var url = new URL("http://127.0.0.1:5500/weddingPage.html");


function assignCategory(value) {
    localStorage.setItem("category", value);
    url.searchParams.set('c', value);
    if (localStorage.getItem("subCategory") == '') {
        url.searchParams.set('sc', 'all');
    }else{
        url.searchParams.set('sc', localStorage.getItem("subCategory"));
    }
    window.location.href = url.href;
}

function assignSubCategory(value) {
    localStorage.setItem("subCategory", value);
    if (localStorage.getItem("category") == '') {
        url.searchParams.set('c', 'all');
    }else{
        url.searchParams.set('c', localStorage.getItem("category"));
    }
    url.searchParams.set('sc', value);
    window.location.href = url.href;
}

// var category = localStorage.getItem('category')
// var subCategory = localStorage.getItem('subCategory')


document.getElementById("output__area").innerHTML = window.location.href;

