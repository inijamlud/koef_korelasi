
var n, jml_data = 0;

function jml() {
    n = document.getElementById('jml_data').value
    jml_data = parseFloat(n)
    let fjml = document.getElementById('fjml')

    let fadd_x = document.getElementById('fadd_x')
    let fadd_y = document.getElementById('fadd_y')

    let btn_hit = document.getElementById('btn_hit')
    let btn = document.getElementById('btn')

    console.log(jml_data)

    fadd_x.style.display = 'block'
    fadd_y.style.display = 'block'
    fjml.style.display = 'none'
    btn_hit.style.display = 'block'

    for (var i = 0; i < jml_data; i++) {
        console.log('hello');
        fadd_x.innerHTML += `<input type="text" id="nx[]" name="nx[]" placeholder="Masukkan nilai x"
        class="p-2 mt-2 rounded border block w-full focus:ring-2 ring-offset-2 focus:ring-gray-400  border-gray-400 rounded-md shadow-sm"" />`
        fadd_y.innerHTML += `<input type="text" id="nx[]" name="ny[]" placeholder="Masukkan nilai y"
        class="p-2 mt-2 rounded border block w-full focus:ring-2 ring-offset-2 focus:ring-gray-400  border-gray-400 rounded-md shadow-sm"" />`
    }
    return jml_data
}

function average(arr) {
    var avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    return avg
}


function hit() {
    var table = document.getElementById('table')
    table.style.display = 'block'

    let a_nx = []
    let a_ny = []
    var nx = document.getElementsByName('nx[]')
    var ny = document.getElementsByName('ny[]')
    var tbody = document.getElementById('body')

    for (var i = 0; i < jml_data; i++) {

        var a = nx[i];
        var b = ny[i];

        a_nx.push(parseFloat(a.value))
        a_ny.push(parseFloat(b.value))
    }

    var x_avg = average(a_nx)
    var y_avg = average(a_ny)
    var X = [], Y = [], xy = [], x2 = [], y2 = [], txy = 0, tx2 = 0, ty2 = 0

    for (var i = 0; i < jml_data; i++) {
        X[i] = a_nx[i] - x_avg
        Y[i] = a_ny[i] - y_avg
        xy[i] = X[i] * Y[i]
        x2[i] = X[i] * X[i]
        y2[i] = Y[i] * Y[i]
        tbody.innerHTML += `
        <tr>
            <td class="border border-gray-300 p-3">${a_nx[i]}</td>
            <td class="border border-gray-300 p-3">${a_ny[i]}</td>
            <td class="border border-gray-300 p-3">${X[i]}</td>
            <td class="border border-gray-300 p-3">${Y[i]}</td>
            <td class="border border-gray-300 p-3">${xy[i]}</td>
            <td class="border border-gray-300 p-3">${x2[i]}</td>
            <td class="border border-gray-300 p-3">${y2[i]}</td>
        </tr > `;


        txy += xy[i]
        tx2 += x2[i]
        ty2 += y2[i]

    }

    document.getElementById('x').innerHTML += x_avg
    document.getElementById('y').innerHTML += y_avg
    document.getElementById('txy').innerHTML = txy
    document.getElementById('tx2').innerHTML = tx2
    document.getElementById('ty2').innerHTML = ty2
    document.getElementById('sr').innerHTML = txy + "/" + (Math.sqrt(tx2 * ty2));
    document.getElementById('r').innerHTML = txy / (Math.sqrt(tx2 * ty2));
}
