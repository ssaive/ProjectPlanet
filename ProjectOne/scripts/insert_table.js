function insertTable() {
    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');
    var tableBody = document.createElement('tableBody');
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 3; j++) {
                var td = document.createElement('td');
                td.innerHTML(document.createTextNode('\u0020')))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.innerHTML=td.outerHTML
            }
        }
        tableBody.innerHTML=tr.outerHTML;
    }
    table.innerHTML=tableBody.outerHTML;
    body.innerHTML = table.outerHTML
}