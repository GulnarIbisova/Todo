"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let c = d => {
                for (let i = 0; i < d; i++) {
                    $('.minitbox').append(`<h3>${d}</h3>`);
                }
            }
            let a = b => Number(b) ? c(b) : $('.minibox').append(`<h3>${b}</h3>`);
            a($('input').val());
        }
        $('input').val('')
    });
});