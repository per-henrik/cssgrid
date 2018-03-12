function scrollTo(to, duration) {
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 5);
    var count = 0, currPos;
    start = window.pageYOffset;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop+30 != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos-30;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function test(elID)
{
    var dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 300);
}
