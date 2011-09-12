/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

// QUESTION: how can we have a dynamic store

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
                itemTpl: '<b>{name}</b> {city}',
                onItemDisclosure: function(record, btn, index) {
                    alert(record.get('name'));
                },
                grouped: true
            }
        ]
    }
);