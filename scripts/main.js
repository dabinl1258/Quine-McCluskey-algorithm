submit_button = document.getElementById("submit_bit")
submit_button.onclick = () => { inital_by_bit() }

function decimal2bin(length, decimal) {
    ret = "0b"
    for (pos = length - 1; pos >= 0; pos--) {
        bit = decimal & (1 << pos)
        ret = ret + (bit ? "1" : "0")

    }
    return ret
}

function inital_by_bit() {

    nbit = document.getElementById("input_bit").value
    nbit = parseInt(nbit)
    if (!Number.isInteger(nbit)) {
        alert("invalid number")
        return
    }
    nterm = 1 << nbit;
    context = document.getElementById("context")
    context.innerHTML = ""

    //navigator.clipboard.read()

    for (term = 0; term < nterm; term++) {
        term_bin = decimal2bin(nbit, term)
        term_content = term_bin + '<input type="range" name="points" min="0" step="1" id="toggle_${term}" class="tgl-def" max="2" value="0">\n'
        /*
         * value 0 then 0 
         * value 1 then x
         * value 2 then 1
         */
        term_content += '<br>'
        context.innerHTML += term_content
    }

}



function simplify() {

}
