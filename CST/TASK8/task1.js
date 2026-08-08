// function set 
function setCookie(cookieName, cookieValue, expiryDate)
{
    if (expiryDate)
    {
        document.cookie =cookieName + "=" +cookieValue +";expires=" + expiryDate;
    }
    else
    {
        document.cookie =cookieName + "=" +cookieValue;
    }
}

// function el get
//lazem n3aleg el input el da5el
function getCookie(cookieName)
{
    //we will split by ; hat5ali username=.... ,age=....,w low fe exp date 
    var cookies = document.cookie.split(";");

    //for loop 3shan nsheel el msafa el btb2a fe kolo m3ada awel wa7da w username low7do w el val lowa7do
    for (var i = 0; i < cookies.length; i++)
    {
        var item = cookies[i].trim();//trim
        var parts = item.split("=");//username  lowa7do w el trim lowa7do 

        if (parts[0] == cookieName)
        {
            return parts[1];
        }
    }

    return null;// w low mesh maktoba hyrg3 undefiend
}


// delete function
// i will give my cookie an old date to delete it 

function deleteCookie(cookieName)
{
    document.cookie =cookieName +"=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
}


// show all my cookie list function
//hn3mel for loop tlef 3ala el array n2asem kol ;
// for ex;[username=habiba;age=20]
//[username=habiba, age=20] w el trim htshel el msafa 1 [username=habiba,age=20]  
//b3d keda hy3ed username cookie1 w el age cookie 2 w hakaza 
function allCookieList()
{
    if(document.cookie == "")
    {
        return null;
    }

    var cookies = document.cookie.split("; ");

    return cookies;
}



// check if it exsist
//heya exactly like el get bas fe return type boolean
function hasCookie(cookieName)
{
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++)
    {
        var item = cookies[i].trim();
        var parts = item.split("=");

        if (parts[0] == cookieName)
        {
            return true;
        }
    }

    return false;
}

// testing by giving input

document.getElementById("btnCreate").addEventListener("click", function ()
{
    var username = document.getElementById("txtName").value;

    //end b3ed month

    var today = new Date();
    today.setMonth(today.getMonth() + 1);

    setCookie("username", username, today);
    setCookie("userage", 20, today);//default 20

    alert("Cookies Created");
});

// get
document.getElementById("btnGet").addEventListener("click", function ()
{
    alert(getCookie("username"));
});

// show
document.getElementById("btnList").addEventListener("click", function ()
{
    console.log(allCookieList());
    alert("Check Console");
});

// check
document.getElementById("btnCheck").addEventListener("click", function ()
{
    alert(hasCookie("username"));
});

// Delete 
document.getElementById("btnDelete").addEventListener("click", function ()
{
    deleteCookie("username");
    alert("Username Cookie Deleted");
});