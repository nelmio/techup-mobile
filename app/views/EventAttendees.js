/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

app.views.EventAttendees = Ext.extend(Ext.Panel, {
    record: undefined,
    layout: 'fit',
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Attendees',
            items: [
                {
                    text: 'Event',
                    ui: 'back',
                    listeners: {
                        'tap': function () {
                            Ext.dispatch({
                                controller: app.controllers.events,
                                action: 'show',
                                id: app.views.eventAttendees.items.record.getId(),
                                animation: {type:'slide', direction:'right'}
                            });
                        }
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'list',
            id: 'eventattendees',
            itemTpl: [
                '<a href="https://mobile.twitter.com/{twitter_handle}" class="avatar" style="background: url(http://img.tweetimag.es/i/{twitter_handle}_b);" target="_blank">',
                    '<span>{twitter_handle}</span>',
                '</a>',
                '<div style="padding-top: 25px;">{fullname}</div>'
            ],
            store: false
        }
    ],
    updateWithRecord: function(record) {
        this.items.record = record;

        var store = new Ext.data.JsonStore({
            model: 'app.models.Attendee',
            data: record.data.attendees
        });

        Ext.getCmp('eventattendees').bindStore(store);
    }
});