var ChosenDate = function( elements, options )
{
  this.elements = elements;
  this.options = jQuery.extend( this.defaults, options );
  this.attach();

}; ChosenDate.prototype = {

  defaults: {
    dateFormat: 'MMM D YYYY' // format to use for each option (in moment.js format)
    , startOffset: 0  // how far in the past (in negative months) to start this chosen.. eg.. -1
    , endOffset: 1    // how far in the future (in months) to start this chosen..eg 3
  }

  , attach: function( ) {

    //
    // attachs this to $(this)
    //

    var now = moment().add('months', this.options.startOffset)
      , key = '', value = ''
      , options = [];
    
    var endMonth = parseInt(now.format('M')) + this.options.endOffset;
    var endYear = moment().add('months', this.options.endOffset).format('YYYY');

    while( parseInt(now.format('M')) <= endMonth && parseInt(now.format('M')) <= endYear )
    {
      options.push('<option value="'+ value +'">'+ now.format(this.options.dateFormat) +'</option>');
      now.add('days', 1);
    }

    this.elements.html( options.join('') );
    this.elements.chosen({search_contains: true, enable_split_word_search: true });
  }
};


//
// jQuery Wrapper
//

(function($) {
  $.fn.chosenDate = function(args) {
    new ChosenDate(this, args);
    return this;
  };
})(jQuery);
