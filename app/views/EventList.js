/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

// NEW!
var eventListSwitchHandler = function (button) {
    Ext.dispatch({
        controller: techup.controllers.events,
        action: button.action
    });
};

techup.views.EventList = Ext.extend(
    Ext.Panel,
    {
        layout: 'fit',
        dockedItems: [
            {
                xtype: 'toolbar',
                title: 'Techup',
                cls: 'techup-toolbar',
                layout: {
                    pack: 'end'
                },
                items: [
                    {
                        xtype: 'segmentedbutton',
                        allowDepress: true,
                        items: [
                            {
                                text: 'Upcoming',
                                handler: eventListSwitchHandler,
                                pressed: true,
                                action: 'upcomingList'
                            },
                            {
                                text: 'Past',
                                handler: eventListSwitchHandler,
                                action: 'pastList'
                            }
                        ]
                    }
                ]
            }
        ],
        items: [
            {
                xtype: 'list',
                
                // NEW!
                store: new Ext.data.XmlStore(),
                id: 'eventList',
                

                itemCls: 'avatar-list-item',
                itemTpl: [
                    '<tpl if="twitter_handle"><img class="avatar-img" src="http://img.tweetimag.es/i/{twitter_handle}_b"/></tpl>',
                    '<tpl if="!twitter_handle"><img class="avatar-img" src="http://img.tweetimag.es/i/techupch_b"/></tpl>',

                    '<div class="name">{name}</div>','<div class="date">',
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
                        var record, store;
                        store = subList.getStore();
                        record = store.getAt(subIdx);

                        if (record) {
                            alert(record.get('name'));
                        }
                    }
                }
            }
        ],
        // NEW!
        bindStore: function (store) {
            Ext.getCmp('eventList').bindStore(store);
        }
    }
);