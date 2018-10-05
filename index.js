module.exports = {
   name: 'ec-tour',
   extend: 'apostrophe-pieces',
   label: 'EC Tour',
   alias: 'ectour',
   pluralLabel: 'EC Tours',
   contextual: true,
   moogBundle: {
    modules: ['ec-tour-pages', 'ec-tour-widgets'],
    directory: 'lib/modules'
  },
   beforeConstruct: function(self, options) {
    options.addFields = [
      	{
   		name: 'title',
   		type: 'string',
   		label: 'Title'
   	},
   	{
   		name: 'description',
   		type: 'string',
   		textarea: true,
   		label: 'Description'
   	},
    {
      type: 'string',
      name: 'url',
      textarea: true,
      label: 'Streeview Map Embed Code'
    },
    {
      type: 'date',
      name: 'yearBuilt',
      label: 'Year Built',
      pikadayOptions: {
    	format: 'DD/MM/YYYY'
  	  }
    }
    ].concat(options.addFields || []);

    options.arrangeFields = [
      {
        name: 'info',
        label: 'Building Information',
        fields: [ 'yearBuilt','description' ]
      }
    ].concat(options.arrangeFields || []);
  },
  construct: function(self, options) {
    self.beforeInsert = function(req, piece, options, callback) {
      // Even though we have a callback, we can still use promises.
      // We just have to invoke the callback at the end of the chain.

        if(piece.url && piece.url.includes('iframe')){
          var src = piece.url.split('src="')[1].split(/[ >]/)[0]
            piece.url = src.replace('"','');
        }

        return callback();
    };
    self.beforeUpdate = function(req, piece, options, callback) {
      // Even though we have a callback, we can still use promises.
      // We just have to invoke the callback at the end of the chain.

        if(piece.url && piece.url.includes('iframe')){
          var src = piece.url.split('src="')[1].split(/[ >]/)[0]
            piece.url = src.replace('"','');
        }

        return callback();
    };
  }
};
