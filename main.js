window.addEventListener('load', ()=> {
    document.getElementById('btn').addEventListener('click', ()=> {
    const zipcode = document.getElementById('zipcode').value;
    const sc = document.body.appendChild(document.createElement('script'));
    sc.src = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode + '&callback=callbackFuncName';
    document.body.appendChild(sc);
    document.body.removeChild(sc);
})
});

function callbackFuncName(data) {
    if(data.results){
        prefecture = data.results[0]['address1'];
        document.getElementById('prefecture').value = prefecture;
        city = data.results[0]['address2'];
        document.getElementById('city').value = city;
        address = data.results[0]['address3'];
        document.getElementById('address').value = address;

    } else {
        alert('該当するデータが見つかりませんでした');
    }
}