/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.views.EventDescription = Ext.extend(Ext.Panel, {
    record: undefined,
    layout: 'fit',
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Description',
            items: [
                {
                    text: 'Event',
                    ui: 'back',
                    listeners: {
                        'tap': function () {
                            Ext.dispatch({
                                controller: techup.controllers.events,
                                action: 'show',
                                record: techup.views.eventDescription.items.record,
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
            xtype: 'panel',
            scroll: 'vertical',
            tpl: [
                '<h3>{name}</h3>',
                '<p>{dateFromShort}<br />{location}<br />',
                '<a href="{link}">{link}</a></p>',
                '<p>{description}</p>'
            ],
            cls: 'undoreset event-description'
        }
    ],
    updateWithRecord: function(record) {
        this.items.record = record;

        Ext.each(this.items.items, function(item) {
            item.update(record.data);
        });
    }
});