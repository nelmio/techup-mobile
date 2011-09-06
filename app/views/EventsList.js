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
            itemTpl: '{name}',
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