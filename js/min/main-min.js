<<<<<<< HEAD
$(document).ready(function(){var e=$(".slide-wrapper").flickity({cellAlign:"left",contain:!0,pageDots:!1,prevNextButtons:!1}),t=e.data("flickity"),i=$(".tabs"),l=i.find(".tab");$(".button-group").on("click",".tab",function(){var t=$(this).index();e.flickity("select",t)}),e.on("cellSelect",function(){l.filter(".is-selected").removeClass("is-selected"),l.eq(t.selectedIndex).addClass("is-selected")})});
=======
$(document).ready(function(){$("ul.tabs").each(function(){var e,t,a=$(this).find("a");e=$(a.filter('[href="'+location.hash+'"]')[0]||a[0]),e.addClass("active"),t=$(e[0].hash),a.not(e).each(function(){$(this.hash).hide()}),$(this).on("click","a",function(a){e.removeClass("active"),t.hide(),e=$(this),t=$(this.hash),e.addClass("active"),t.show(),a.preventDefault()})}),$.fn.editable.defaults.mode="inline",$("#realname").editable(),$("#current-work").editable(),$("#current-workplace").editable(),$("#birthday").editable(),$("#gender").editable(),$("#hometown").editable(),$("#languages").editable(),$("#status").editable({type:"select",title:"Select status",placement:"right",value:2,source:[{value:1,text:"status 1"},{value:2,text:"status 2"},{value:3,text:"status 3"}]})});
>>>>>>> light-theme-desktop
