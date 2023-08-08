submit_button = document.getElementById("submit_bit")
submit_button.onclick = () =>{inital_by_bit()}

function inital_by_bit()
{
    nbit = document.getElementById("input_bit").value 

    nbit = parseInt(nbit)
    if(!Number.isInteger(nbit))
    {
        alert("invalid number")
        return
    }
    nterm = 1 << nbit;
    context = document.getElementById("context")
    context.innerHTML = ""
    alert(nterm)

    for(term = 0; term < nterm; term++ )
    {
        term_content = '<input type="range" name="points" min="0" step="1" id="custom-toggle" class="tgl-def" max="2" value="0">\n'
        context.innerHTML += term_content

    }
}