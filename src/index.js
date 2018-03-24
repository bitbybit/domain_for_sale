import 'jquery';
import Cookies from 'js-cookie';

$(function(){
    var lang = Cookies.get('lang') || 'en',
        $lang = $('#lang'),
        $dataText = $("[data-text-en][data-text-ru]"),
        dataTextUpdate = function(lang) {
            $dataText.each(function(){
                var $this = $(this);
                $this.text($this.attr('data-text-'+lang));
            });
            $lang.text(lang);
        };
    if(window.lang === 'ru') {
        dataTextUpdate(window.lang);
    }
    $('#lang').click(function(e){
        e.preventDefault();
        if(window.lang === 'ru') {
            window.lang = 'en';
        } else {
            window.lang = 'ru';
        }
        dataTextUpdate(window.lang);
        Cookies.set('lang', window.lang, {expires: 30});
    });
});

require('./index.scss');
