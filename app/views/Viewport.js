techup.views.Viewport = Ext.extend(
    Ext.Panel,
    {
        fullscreen: true,
        layout: 'card',
        cardSwitchAnimation: 'slide',
        initComponent: function() {
            // put instances of cards into app.views namespace
            Ext.apply(techup.views, {
                eventList: new techup.views.EventList()
            });
            // put instances of cards into viewport
            Ext.apply(
                this,
                { items: [ techup.views.eventList ] }
            );
            techup.views.Viewport.superclass.initComponent.apply(this, arguments);
        }
    }
);