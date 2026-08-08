var para = document.getElementById("PAR");

//font
var fonts = document.getElementsByName("Font");

var fontNames = ["arial", "courier", "georgia","impact","times new roman","verdana"
];
for(let i = 0; i < fonts.length; i++)
{
    fonts[i].addEventListener("click", function(){

        para.style.fontFamily = fontNames[i];

    });
}


//align

var aligns = document.getElementsByName("Align");

var alignValues = [ "left", "center", "right", "justify"
];

for(let i = 0; i < aligns.length; i++)
{
    aligns[i].addEventListener("click", function(){

        para.style.textAlign = alignValues[i];

    });
}


//height

var heights = document.getElementsByName("Height");

var heightValues = ["normal","10px","15px","1.5"
];

for(let i = 0; i < heights.length; i++)
{
    heights[i].addEventListener("click", function(){

        para.style.lineHeight = heightValues[i];

    });
}

//space

var spaces = document.getElementsByName("Lspace");

var spaceValues = ["normal","-1px","2px","3px"
];

for(let i = 0; i < spaces.length; i++)
{
    spaces[i].addEventListener("click", function(){

        para.style.letterSpacing = spaceValues[i];

    });
}


//indent

var indents = document.getElementsByName("Indent");

var indentValues = ["0px","5px","15px","25px"
];

for(let i = 0; i < indents.length; i++)
{
    indents[i].addEventListener("click", function(){

        para.style.textIndent = indentValues[i];

    });
}


//transform
var transforms = document.getElementsByName("Transform");

var transformValues = ["none","capitalize","uppercase","lowercase"
];

for(let i = 0; i < transforms.length; i++)
{
    transforms[i].addEventListener("click", function(){

        para.style.textTransform = transformValues[i];

    });
}


//decorate

var decorations = document.getElementsByName("Decorate");

var decorationValues = [ "none", "line-through", "overline", "underline"
];

for(let i = 0; i < decorations.length; i++)
{
    decorations[i].addEventListener("click", function(){

        para.style.textDecoration = decorationValues[i];

    });
}


//boarder

var borders = document.getElementsByName("Border");

var borderValues = ["none","dotted","dotted","double","groove","dashed","inset","solid","outset","ridge"
];

for(let i = 0; i < borders.length; i++)
{
    borders[i].addEventListener("click", function(){

        para.style.borderStyle = borderValues[i];

    });
}


//boarder color

var colors = document.getElementsByName("BorderColor");

var colorValues = ["black","pink","red","green","blue","yellow","purple"
];

for(let i = 0; i < colors.length; i++)
{
    colors[i].addEventListener("click", function(){

        para.style.borderColor = colorValues[i];

    });
}