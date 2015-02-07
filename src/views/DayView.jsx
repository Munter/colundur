var React = require('react');

var DayView = React.createClass({
  displayName: 'DayView',

  mixins: [
    require('react-router').State
  ],

  componentDidMount: function () {
    this.props.ambitus.interval('day');
  },

  render: function () {
    // console.log('DayView', this.props, this.getParams());

    return (
      <section>Day</section>
    );
  }
});

module.exports = DayView;
