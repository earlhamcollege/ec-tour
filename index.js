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
        type: 'date',
        name: 'yearBuilt',
        label: 'Year Built',
        pikadayOptions: {
        format: 'DD/MM/YYYY'
        }
      },
      {
        name: 'gallery',
        label: 'Gallery',
        type: 'singleton',
        widgetType: 'ec-gallery'
      }
    ].concat(options.addFields || []);

    options.arrangeFields = [
      {
        name: 'info',
        label: 'Building Information',
        fields: [ 'yearBuilt','description' ]
      },
      {
        name: 'gallery',
        label: 'Gallery',
        fields: [ 'gallery' ]
      }
    ].concat(options.arrangeFields || []);
  },
  construct: function(self, options) {}
};
