function courseInfo({
    coursename = "ES6",
    courseDuration = "3days",
    courseOwner = "JavaScript"
} = {})//low salem 7aga fadia
{
    //de el prop el masmo7a
    let Props = [
        "coursename",
        "courseDuration",
        "courseOwner"
    ];

    for(let key in arguments[0] || {})//low fe arg 0 abd2a beh low mafesh f abd2 b null
    {
        if(!Props.includes(key))
        {
            throw new Error(`Invalid : ${key}`);
        }
    }

    console.log(`
Course name: ${coursename}
Course Duration: ${courseDuration}
Course Owner: ${courseOwner}
`);
}

// Test Cases
courseInfo({});

courseInfo({
    coursename:"HTML"
});

courseInfo({
    coursename:"CSS",
    courseDuration:"5days"
});

courseInfo({
    coursename:"JS",
    courseDuration:"7days",
    courseOwner:"habiba"
});

//  el bounds
courseInfo({
    coursename:"JS",
    price:1000
});