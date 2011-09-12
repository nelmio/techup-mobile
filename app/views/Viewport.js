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
                eventDetail: new techup.views.EventDetail()
            });
            // put instances of cards into viewport
            Ext.apply(
                this,
                { items: [ techup.views.eventList, techup.views.eventDetail ] }
            );
            techup.views.Viewport.superclass.initComponent.apply(this, arguments);
        }
    }
);