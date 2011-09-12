/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.views.EventList = Ext.extend(
    Ext.Panel,
    {
        layout: 'fit',
        dockedItems: [
            {
                xtype: 'toolbar',
                title: 'Techup',
            }
        ],
        items: [
            {
                xtype: 'list',
                store: Ext.getStore('techup.Events'),

                itemCls: 'avatar-list-item',
                itemTpl: [
                    '<tpl if="twitter_handle"><img class="avatar-img" src="http://img.tweetimag.es/i/{twitter_handle}_b"/></tpl>',
                    '<tpl if="!twitter_handle"><img class="avatar-img" src="http://img.tweetimag.es/i/techupch_b"/></tpl>',

                    '<div class="name">{name}</div>',
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
        ]
    }
);