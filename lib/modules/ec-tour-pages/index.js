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
   addFields: [
    {
        name: 'list',
        contextual: true,
        label: 'Building List',
        type: 'singleton',
        widgetType: 'ec-tour-widgets'
      }
   ],
   construct: function(self,options){
     self.pushAsset('stylesheet', 'always', 'always');
   }
};
