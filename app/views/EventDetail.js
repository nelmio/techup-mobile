/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.views.EventDetail = Ext.extend(Ext.Panel, {
    record: undefined,
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Event Detail',
            items: [
                {
                    text: 'Back',
                    ui: 'back',
                    listeners: {
                        'tap': function () {
                            // TODO: find out how a button can access to the record w/o using globals.
                            var controllerAction = techup.views.eventDetail.items.record.store.controllerAction;
                            Ext.dispatch({
                                controller: techup.controllers.events,
                                action: controllerAction,
                                animation: {type:'slide', direction:'right'}
                            });
                        }
                    }
                }
            ]
        }
    ],
    styleHtmlContent: true,
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
        }
    ],
    updateWithRecord: function(record) {
        Ext.each(
            Ext.getCmp('eventdetail').getLayout().getLayoutItems(),
            function(item) {
                item.update(record.data);
            }
        );

        this.items.record = record;
    }
});