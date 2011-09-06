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
                            Ext.dispatch({
                                controller: app.controllers.events,
                                action: 'index',
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
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            id: 'eventdetail',
            items: [
                {
                    xtype: 'panel',
                    tpl: '<h3>{name}</h3>',
                    cls: 'event-detail-name'
                },
                { xtype: 'spacer' },
                {
                    xtype: 'panel',
                    tpl: [
                        '<a href="https://mobile.twitter.com/{twitter_handle}" class="avatar" style="background: url(http://img.tweetimag.es/i/{twitter_handle}_b);" target="_blank">',
                            '<span>{twitter_handle}</span>',
                        '</a>'
                    ],
                    cls: 'event-detail-avatar'
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
                {
                    xtype: 'button',
                    ui: 'confirm',
                    text: 'Attend',
                    listeners: {
                        tap: function () {
                            alert('attending!');
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Description',
                    listeners: {
                        tap: function () {
                            Ext.dispatch({
                                controller: app.controllers.events,
                                action: 'description',
                                id: app.views.eventDetail.items.record.getId()
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
                                id: app.views.eventDetail.items.record.getId()
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
                                id: app.views.eventDetail.items.record.getId()
                            });
                        }
                    }
                }
            ]
        }
    ],
    updateWithRecord: function(record) {
        Ext.each(Ext.getCmp('eventdetail').getLayout().getLayoutItems(), function(item) {
            item.update(record.data);
        });
        Ext.getCmp('peopleattendingbutton').setText(record.data.attendees.length + ' people attending');
        Ext.getCmp('mapbutton').setText('<img src="http://maps.googleapis.com/maps/api/staticmap?center='+record.get('lat')+','+record.get('lon')+'&zoom=14&size=290x100&maptype=roadmap&markers=color:red%7C'+record.get('lat')+','+record.get('lon')+'&sensor=false" />');
        this.items.record = record;
    }
});