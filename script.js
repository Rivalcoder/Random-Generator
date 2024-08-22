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
  
    //console.log(usertext);
    let combinedArray = usertext.split(/[\s\n]+/);
    console.log(combinedArray);
    combinedArray=combinedArray.sort(() => Math.random() - 0.5);
    console.log(combinedArray);
    let a1=combinedArray.join('\n');
    area.value=a1;
    let len = (combinedArray.length)-1;
    
    for (let i = 0; i <(combinedArray.length); i++) {
        // console.log("Hiii");
        if(combinedArray[i]==="")
        {
            len=len-1;
        }
      }
      
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
