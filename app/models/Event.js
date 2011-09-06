/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

app.models.Event = Ext.regModel("app.models.Event", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: 'dateFrom', type: 'date', dateFormat: 'c'},
        {name: 'dateTo', type: 'date', dateFormat: 'c'},
        {
            name: 'dateFromShort',
            convert: function(value, record) {
                return record.get('dateFrom').format('d. m. Y, h:m');
            }
        },
        {
            name: 'dateToShort',
            convert: function(value, record) {
                return record.get('dateTo').format('d. m. Y, h:m');
            }
        },
        {name: "location", type: "string"},
        {name: "city", type: "string"},
        {name: "canton", type: "string"},
        {name: "lat", type: "float"},
        {name: "lon", type: "float"},
        {name: "description", type: "string"},
        {name: "price", type: "string"},
        {name: "link", type: "string"},
        {name: "twitter_handle", type: "string"},
        {name: "attendees", type: "auto"}
    ]
});

app.models.Attendee = Ext.regModel("app.models.Attendee", {
    fields: [
        {name: "fullname", type: "string"},
        {name: "twitter_handle", type: "string"}
    ]
});

app.stores.upcomingEvents = new Ext.data.Store({
    // you need the complete namespace of the model
    model : 'app.models.Event',
    proxy : {
        type : 'ajax',
        url : '/upcoming.json',
        reader : {
            type : 'json',
            root : 'events'
        }
    }
});