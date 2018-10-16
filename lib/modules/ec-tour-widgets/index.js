module.exports = {
   extend: 'apostrophe-pieces-widgets',
   label: 'Ec Tour Widget',
   contextualOnly: true,
   addFields: [],
   construct: function(self, options) {
    self.pushAsset('script', 'always', 'always');
    self.pushAsset('stylesheet', 'list', 'always');

    self.play = function($widget, data, options) {

    	console.log($widget.find('#buildingSearch'));

      $widget.find('[data-tags]').click(function(e) {
      	e.preventDefault();
        $widget.find('[data-tags]').toggle();
        // Stop bubbling and default behavior for jQuery event
        return false;
      });
    };
  }
};
