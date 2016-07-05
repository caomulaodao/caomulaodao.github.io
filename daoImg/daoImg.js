/**
 * Created by laodao on 16/7/5.
 */
function daoImg(img){
    var refuse = $("<div style='display: none;' class='daoRefuse'></dic>");
    $("body").append(refuse);
    $(img).each(function(index,iterm){
        var src = $(iterm).data("original");
        var iframe = $("<iframe></iframe>");
        var content = new Blob(["<script>img=document.createElement('img');img.src='"+src+"';<\/script>"],{type:'text/html'});
        var url = window.URL.createObjectURL(content);
        iframe.attr("src",url);
        $(".daoRefuse").append(iframe);
        $(iterm).attr("src",src);
    });
}