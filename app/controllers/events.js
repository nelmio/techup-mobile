/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.controllers.events = new Ext.Controller(
    {
        upcomingList: function(options) {
            console.log('this');
            var store;
            store = Ext.getStore('techup.Events');
            store.load();

            techup.views.viewport.setActiveItem(
                techup.views.eventList, options.animation
            );
        }
    }
);