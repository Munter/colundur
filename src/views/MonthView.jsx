var React = require('react');

var MonthView = React.createClass({
  displayName: 'MonthView',

  mixins: [
    require('react-router').State
  ],

  componentDidMount: function () {
    this.props.ambitus.interval('month');
  },

  render: function () {
    return (
      <section>Month</section>
    );
  }
})

module.exports = MonthView;
