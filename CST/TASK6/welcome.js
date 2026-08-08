
var qstring = window.location.search;

// hnsheel el ?
var removequestion = qstring.slice(1);

// hnfsel been el &
var separate = removequestion.split('&');

// save el data 
var dataa = {};
// Step 5: Loop 3shan nfseel been kol = w el ta1nia 3shan n3ref el data el 3andi
for (var i = 0; i < separate.length; i++) {
    var pair = separate[i];
    
    // feen el =
    var equalPos = pair.indexOf('=');
    
    if (equalPos !== -1) {
        // hat el 2abel el =
        var key = pair.substring(0, equalPos);
        
        // el b3dha
        var value = pair.substring(equalPos + 1);
        
        //sveeeeee
        dataa[key] = value;
    }
}
//n3mel save l el data 3shan tzher mn el obj
var name = dataa.name || 'guest user';
var jobTitle = dataa.jobTitle || '';
var email = dataa.email || 'not provided';
var mobile = dataa.mobile || 'not provided';
var gender = dataa.gender || 'not provided';
var address = dataa.address || 'not provided';


//greet
var greetingDiv = document.getElementById('greeting');
if (greetingDiv) {
    var greeting = 'Hello, ' + name;
    //hn3mel if condition 3shan n3mel concatinate l el name m3 el jobtitle
    if (jobTitle) {
        greeting += ' (' + jobTitle + ')';
    }
    //htzher mn8eer < > 3shan heya related bas b el text 3aks el html
    greetingDiv.innerHTML = '<h3>' + greeting + '</h3>';
}


var infoDiv = document.getElementById('infoDisplay');
if (infoDiv) {
    infoDiv.innerHTML = 
        'email:' + email + '<br>' +
        'mobile:' + mobile + '<br>' +
        'gender:' + gender + '<br>' +
        'address:' + address;
}

// Step 9: Debug
console.log('Query String:', qstring);
console.log('Parsed Data:', dataa);
console.log('Name:', name);
console.log('Email:', email);