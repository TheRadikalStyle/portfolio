$(function () {

    $('btn').click(function () {
        //var destination = this.dataset.destination;
        //renderPage(destination)
        console.log(this);
        return false; //Disable reload
    });
});

function renderPage(pageToRender) {
    //$("#content").load(pageToRender);
    $.get(pageToRender, function (data) {
        $("#content").html(data);
        console.log("Load was performed.");
    })
    .done(function () {
        console.log("DONE");
    })
    .fail(function () {
        console.log("FAIL");
    });

    return false;
}