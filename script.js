function fun() {
    
    
    const change = document.getElementById('out');
    const area = document.getElementById('area');
    const usertext = area.value;
    if(usertext==="")
    {
        alert("Please enter values...")
    }
    else
    { 
    const a=1;
    console.log(usertext);
    const combinedArray = usertext.split(/[\s\n]+/);
    const len = (combinedArray.length)-1;
    if(len===1)
    {
        alert("Processing....");
        change.style.display = 'flex';
        out.innerHTML=combinedArray[0];
        return 0;
    }
    const b=Math.round(Math.random() * (len));
    console.log(b);
    console.log(len);
    change.style.display = 'none';
    if (change.style.display === 'none') {
        alert("Processing....");
        change.style.display = 'flex';
        out.innerHTML=combinedArray[b];
    } else {
        alert("Error")
      
        change.style.display = 'none'; 
    }
}
}
