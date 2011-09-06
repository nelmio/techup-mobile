/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        // put instances of cards into app.views namespace
        Ext.apply(app.views, {
            upcomingEventsList: new app.views.EventsList(),
            eventDetail: new app.views.EventDetail(),
            eventDescription: new app.views.EventDescription(),
            eventAttendees: new app.views.EventAttendees(),
            eventMap: new app.views.EventMap()
        });
        // put instances of cards into viewport
        Ext.apply(this, {
            items: [
                app.views.upcomingEventsList,
                app.views.eventDetail,
                app.views.eventDescription,
                app.views.eventAttendees,
                app.views.eventMap
            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});