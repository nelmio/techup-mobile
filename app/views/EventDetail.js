/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

// Questions:
// * add a toolbar button dynamically?

app.views.EventDetail = Ext.extend(Ext.Panel, {
    record: undefined,
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Event detail',
            items: [
                {
                    text: 'Back',
                    ui: 'back',
                    listeners: {
                        'tap': function () {
                            // TODO: find out how a button can access to the record w/o using globals.
                            var controllerAction = app.views.eventDetail.items.record.store.controllerAction;
                            console.log(controllerAction);
                            Ext.dispatch({
                                controller: Ext.ControllerManager.get('events'),
                                action: controllerAction,
                                animation: {type:'slide', direction:'right'}
                            });
                        }
                    }
                }
            ]
        }
    ],
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
        {
            xtype: 'panel',
            id: 'eventdetail',
            items: [
                {
                    xtype: 'panel',
                    tpl: [
                        '<img src="http://img.tweetimag.es/i/{twitter_handle}_b"/>',
                        '<h3><span>{name}</span></h3>',
                        '<div class="clear">&nbsp;</div>'
                    ],
                    cls: 'event-detail-name'
                }
            ]
        },
        {
            xtype: 'panel',
            defaults: {
                cls: 'event-detail-button'
            },
            cls: 'event-detail-buttons',
            items: [
                //{
                //    xtype: 'button',
                //    ui: 'confirm',
                //    text: 'Attend',
                //    listeners: {
                //        tap: function () {
                //            alert('attending!');
                //        }
                //    }
                //},
                {
                    xtype: 'button',
                    text: 'Description',
                    listeners: {
                        tap: function () {
                            Ext.dispatch({
                                controller: app.controllers.events,
                                action: 'description',
                                record: app.views.eventDetail.items.record
                            });
                        }
                    }
                },
                {
                    xtype: 'button',
                    id: 'peopleattendingbutton',
                    text: 'n people attending',
                    listeners: {
                        tap: function () {
                            Ext.dispatch({
                                controller: app.controllers.events,
                                action: 'attendees',
                                record: app.views.eventDetail.items.record
                            });
                        }
                    }
                },
                {
                    xtype: 'button',
                    id: 'mapbutton',
                    listeners: {
                        tap: function () {
                            Ext.dispatch({
                                controller: app.controllers.events,
                                action: 'map',
                                record: app.views.eventDetail.items.record
                            });
                        }
                    }
                }
            ]
        }
    ],
    updateWithRecord: function(record) {
        var attendeesLength;
        
        Ext.each(Ext.getCmp('eventdetail').getLayout().getLayoutItems(), function(item) {
            item.update(record.data);
        });
        
        attendeesLength = record.data.attendees.length;
        if (attendeesLength) {
            Ext.getCmp('peopleattendingbutton').show();
            Ext.getCmp('peopleattendingbutton').setText(attendeesLength + ' ' + (attendeesLength == 1 ? 'person' : 'people') + ' attending');
        } else {
            Ext.getCmp('peopleattendingbutton').hide();
        }
        Ext.getCmp('mapbutton').setText('<img src="http://maps.googleapis.com/maps/api/staticmap?center='+record.get('lat')+','+record.get('lon')+'&zoom=14&size=290x100&maptype=roadmap&markers=color:red%7C'+record.get('lat')+','+record.get('lon')+'&sensor=false" />');
        this.items.record = record;

    }
});