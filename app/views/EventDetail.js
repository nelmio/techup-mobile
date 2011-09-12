/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.views.EventDetail = Ext.extend(Ext.Panel, {
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Event Detail'
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
    }
});