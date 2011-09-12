techup.views.Viewport = Ext.extend(
    Ext.Panel,
    {
        fullscreen: true,
        layout: 'card',
        cardSwitchAnimation: 'slide',
        initComponent: function() {
            // put instances of cards into app.views namespace
            Ext.apply(techup.views, {
                eventList: new techup.views.EventList(),
                eventDetail: new techup.views.EventDetail(),
                eventDescription: new techup.views.EventDescription(),
                eventAttendees: new techup.views.EventAttendees(),
                eventMap: new techup.views.EventMap()
            });
            // put instances of cards into viewport
            Ext.apply(
                this,
                { 
                    items: [
                        techup.views.eventList,
                        techup.views.eventDetail,
                        techup.views.eventDescription,
                        techup.views.eventAttendees,
                        techup.views.eventMap
                    ]
                }
            );
            techup.views.Viewport.superclass.initComponent.apply(this, arguments);
        }
    }
);