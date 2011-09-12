Ext.regModel(
    'techup.Event',
    {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'string'},
            {name: 'dateFrom', type: 'date', dateFormat: 'c'},
            {name: 'dateTo', type: 'date', dateFormat: 'c'},
            {name: 'location', type: 'string'},
            {name: 'city', type: 'string'},
            {name: 'canton', type: 'string'},
            {name: 'lat', type: 'float'},
            {name: 'lon', type: 'float'},
            {name: 'description', type: 'string'},
            {name: 'price', type: 'string'},
            {name: 'link', type: 'string'},
            {name: 'twitter_handle', type: 'string'},
            {name: 'attendees', type: 'auto'},
            {name: 'dateGroup', type: 'string'}
        ]
    }
);

Ext.regStore(
    'techup.Events',
    {
        model : 'techup.Event',
        proxy : {
            type : 'ajax',
            url : 'http://techup.ch/api/events/upcoming.json',
            reader : {
                type : 'json',
                root : 'events'
            }
        },
        getGroupString: function (record) {
            return record.get('dateGroup');
        }
    }
);
