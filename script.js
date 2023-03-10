function form_submit()
{
    let x = String(document.getElementById("name").value);
    let y = String(document.getElementById("password").value);
    var regName = /\d+$/g;
    if (x == ""|| regName.test(x)) 
    {
        alert("Name must be filled out properly");
        x.focus();
        return false;
      }
    if(x.length <6)
    {
        alert("Name must not be < 6");
        x.focus();
        return false;
    }

    if(x.length > 12)
    {
        alert("Name must not be > 12");
        x.focus();
        return false;
    }

    if (y == "") 
    {
        alert("Password must be filled out");
        y.focus();
        return false;
      }

    if(y.length < 6)
    {
        alert("password must not be < 6");
        y.focus();
        return false;
    }

    if(y.length > 12)
    {
        alert("password must not be > 12");
        y.focus();
        return false;
    }
    else{
        alert("Signed in Successfully")
    }
      
}


