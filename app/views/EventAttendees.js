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
                                record: app.views.eventAttendees.items.record,
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
            itemCls: 'avatar-list-item attendees',
            itemTpl: [

                '<img class="avatar-img small" src="http://img.tweetimag.es/i/{twitter_handle}_n"/>',
                '<div class="name">{fullname}</div>',
                '<div class="date">@{twitter_handle}</div>'
                
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