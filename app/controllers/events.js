/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.controllers.events = new Ext.Controller(
    (function () {
        var that, eventList;

        setEventList = function (options, store) {
            if (store.data.length === 0) {
                store.load();
            }
            techup.views.eventList.bindStore(store);

            techup.views.viewport.setActiveItem(
                techup.views.eventList, options.animation
            );

        }

        that = {
            upcomingList: function(options) {
                setEventList(options, Ext.getStore('techup.upcomingEvents'));
            },
            pastList: function(options) {
                setEventList(options, Ext.getStore('techup.pastEvents'));
            },
            show: function(options) {
                var event = options.record;
                if (event) {
                    techup.views.eventDetail.updateWithRecord(event);
                    techup.views.viewport.setActiveItem(
                        techup.views.eventDetail,
                        options.animation
                    );
                }
            }
        }

        return that;
    }())
);