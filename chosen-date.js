var ChosenDate = function( elements, args )
{
  this.elements = elements;
  this.options = this.defaults; //jQuery.extend( this.defaults, options );
  this.attach( args );

}; ChosenDate.prototype = {

  defaults: {
    dateFormat: 'MMM D YYYY' // format to use for each option (in moment.js format)
    , startOffset: 0  // how far in the past (in negative months) to start this chosen.. eg.. -1
    , endOffset: 1    // how far in the future (in months) to start this chosen..eg 3
  }

  , attach: function( args ) {

    //
    // attachs this to $(this)
    //

    var now = moment().add('months', this.options.startOffset)
      , key = '', value = ''
      , options = []
      , selected = args.selected ? moment(args.selected) : moment()
      , selectedVal = ''
      ;
    
    var endMonth = parseInt(now.format('M')) + this.options.endOffset;
    var endYear = moment().add('months', this.options.endOffset).format('YYYY');

    while( parseInt(now.format('M')) <= endMonth && parseInt(now.format('M')) <= endYear )
    {
      value = now.format(this.options.dateFormat);
      
      selectedVal = value == selected.format(this.options.dateFormat) ? ' selected' : ''
      
      options.push('<option value="'+ value +'"' + selectedVal + '>' + value + '</option>');
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
