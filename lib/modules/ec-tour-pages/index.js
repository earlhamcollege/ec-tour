module.exports = {
  extend: 'apostrophe-pieces-pages',
  label: 'EC Tour Page',
  contextual: true,
  next: {
    projection: {
      title: 1,
      url: 1,
      slug: 1,
      tags: 1,
      category: 1
    }
  },
  beforeConstruct: function(self, options) {
    options.addFields = [
      {
        name: 'list',
        contextual: true,
        label: 'Building List',
        type: 'singleton',
        widgetType: 'ec-tour-widgets'
      },
      {
        name: 'gallery',
        label: 'Page Gallery',
        type: 'singleton',
        widgetType: 'ec-tour-widgets'
      }
    ].concat(options.addFields || [])
  },
  construct: function(self,options){
    self.pushAsset('stylesheet', 'always', 'always');
  }
};
