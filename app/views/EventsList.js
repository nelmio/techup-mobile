/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

// QUESTION: how can we have a dynamic store

app.views.EventsList = Ext.extend(Ext.Panel, {
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Techup'
        }
    ],
    layout: 'fit',
    items: [
        {
            xtype: 'list',
            store: app.stores.upcomingEvents,
            itemCls: 'avatar-list-item',
            itemTpl: [
                '<img class="avatar-img" src="http://img.tweetimag.es/i/{twitter_handle}_b"/>',
                '<div class="name">{name}</div>',
                '<div class="date">',
                    '{dateFromToLine1}',
                    '<br/>',
                    '{dateFromToLine2}',
                '</div>',
                '<div class="date">{city}, {canton}</div>',
                
                '<div class="techup-disclosure">&gt;</div>',
                '<tpl if="attendees.length!==0"><div class="counter x-hasbadge"><span class="x-badge">{attendees.length}</span></div></tpl>'
            ],
            grouped: true,
            listeners: {
                itemTap: function(subList, subIdx, el, e) {
                    var store      = subList.getStore(),
                        record     = store.getAt(subIdx);

                    if (record) {
                        Ext.dispatch({
                            controller: app.controllers.events,
                            action: 'show',
                            id: record.getId()
                        });
                    }
                }
            }
        }
    ],
    initComponent: function() {
        app.stores.upcomingEvents.load();
        app.views.EventsList.superclass.initComponent.apply(this, arguments);
    }
});