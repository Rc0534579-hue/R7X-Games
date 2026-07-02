const ffimages=[
    "ff1.jpg",
    "ff2.jpg",
    "ff3.png"
];
let ffcurrent=0;
function nextFF()
{
    ffcurrent++;
    if(ffcurrent>=ffimages.length)
    {
        ffcurrent=0;
    }
    document.getElementById("ff-image").src=ffimages[ffcurrent];
}
function prevFF()
{
    ffcurrent--;
    if(ffcurrent<0)
    {
        ffcurrent=ffimages.length-1;
    }
    document.getElementById("ff-image").src=ffimages[ffcurrent];
}
/* BGMI */
const bgmiimages=[
    "p1.jpg",
    "p2.jpg",
    "p3.webp"
];
let bgmicurrent=0;
function nextBGMI()
{
    bgmicurrent++;
    if(bgmicurrent>=bgmiimages.length)
    {
        bgmicurrent=0;
    }
    document.getElementById("bgmi-image").src=bgmiimages[bgmicurrent];
}
function prevBGMI()
{
    bgmicurrent--;
    if(bgmicurrent<0)
    {
        bgmicurrent=bgmiimages.length-1;
    }
    document.getElementById("bgmi-image").src=bgmiimages[bgmicurrent];
}
/* COD */
const codimages=[
    "c1.avif",
    "c2.webp",
    "c3.jpg"
];
let codcurrent=0;
function nextCOD()
{
    codcurrent++;
    if(codcurrent>=codimages.length)
    {
        codcurrent=0;
    }
    document.getElementById("cod-image").src=codimages[codcurrent];
}
function prevCOD()
{
    codcurrent--;
    if(codcurrent<0)
    {
        codcurrent=codimages.length-1;
    }
    document.getElementById("cod-image").src=codimages[codcurrent];
}

/* MINECRAFT */
const minimages=[
    "m1.jpg",
    "m2.jpg",
    "m3.jpg"
];
let mincurrent=0;
function nextMIN()
{
    mincurrent++;
    if(mincurrent>=minimages.length)
    {
        mincurrent=0;
    }
    document.getElementById("min-image").src=minimages[mincurrent];
}
function prevMIN()
{
    mincurrent--;
    if(mincurrent<0)
    {
        mincurrent=minimages.length-1;
    }
    document.getElementById("min-image").src=minimages[mincurrent];
}

