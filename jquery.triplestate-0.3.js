/* -----------------------------------------------------------------------------
cwTripleState

Developed By: Clive Walkden (http://www.sozodesign.co.uk)
Inspired By: All the non user friendly, overcomplicated triple state solutions ;)
Version: 0.3

Copyright: Feel free to redistribute the script/modify it, as
                   long as you leave my infos at the top.

ChangeLog:
16/01/2012 - v0.3 - added the default value so when value is empty the script still works
28/11/2011 - v0.2 - added the return false and unbind click to stop multiple firings
25/11/2011 - v0.1 - initial release
----------------------------------------------------------------------------- */

(function( $ ){

    $.fn.cwTripleState = function( options ) {

        // default values
        var settings = $.extend({
            'statedef'  : 'state3def',
            'state1'    : 'state3-1',
            'state2'    : 'state3-2'
        }, options);

        this.each(function() {

            // loop through and change the look
            var obj = $(this);
            input = obj.find('input');
            state = parseInt(input.val(),10);

            switch(state) {
                case 1:
                    obj.removeClass(settings.statedef).removeClass(settings.state1).removeClass(settings.state2).addClass(settings.state1);
                    break;
                case 2:
                    obj.removeClass(settings.statedef).removeClass(settings.state1).removeClass(settings.state2).addClass(settings.state2);
                    break;
                default:
                    obj.removeClass(settings.statedef).removeClass(settings.state1).removeClass(settings.state2).addClass(settings.statedef);
                    break;
            }

            input.css({"position":"absolute", "top":"0px", "left":"-99999px"});

            obj.hover(function()
            {
                obj.css("cursor","pointer");
            },function(){
                obj.css("cursor","default");
            });

            $(obj).unbind('click').click(function () {
                //var obj = $(this);
                input = obj.find('input');
                state = parseInt(input.val(),10);
                //console.log("input id: "+input.attr('id')+" state: "+state);

                switch(state) {
                    case 2:
                        input.val('1');
                        obj.removeClass(settings.statedef).removeClass(settings.state1).removeClass(settings.state2).addClass(settings.state1);
                        break;
                    case 1:
                        input.val('0');
                        obj.removeClass(settings.statedef).removeClass(settings.state1).removeClass(settings.state2).addClass(settings.statedef);
                        break;
                    case 0:
                    default:
                        input.val('2');
                        obj.removeClass(settings.statedef).removeClass(settings.state1).removeClass(settings.state2).addClass(settings.state2);
                }
                //console.log("new state: "+input.val());
                return false;

            });

        });

    };

})( jQuery );