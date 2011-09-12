/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

Ext.setup({
    onReady: function () {
        new Ext.Panel({
            fullscreen: true,
            html: 'Hello World!'
        });
    }
});