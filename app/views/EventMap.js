/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

techup.views.EventMap = Ext.extend(Ext.Panel, {
    record: undefined,
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'Map',
            items: [
                {
                    text: 'Event',
                    ui: 'back',
                    listeners: {
                        'tap': function () {
                            Ext.dispatch({
                                controller: techup.controllers.events,
                                action: 'show',
                                record: techup.views.eventMap.items.record,
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
            xtype: 'map',
            id: 'eventMap',
            useCurrentLocation: false,
            mapOptions: {
                // center: new google.maps.LatLng(38.90985, -77.036777),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },
            listeners: {
                maprender: function () {
                    techup.views.eventMap.updateMap();
                }
            }
        }
    ],
    updateWithRecord: function(record) {
        this.items.record = record;

        if (Ext.getCmp('eventMap').map) {
            this.updateMap();
        }
    },
    updateMap: function () {
        var map = Ext.getCmp('eventMap').map;
        var record = techup.views.eventMap.items.record;

        var infoWindow = new google.maps.InfoWindow({
            content: record.get('location')
        });

        var position = new google.maps.LatLng(record.get('lat'), record.get('lon'));

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: record.get('location')
        });

        map.setCenter(position);

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
    }
});