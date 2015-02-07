var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var WeekView = React.createClass({
  displayName: 'WeekView',

  mixins: [
    require('react-router').State,
    require('react-router').Navigation,
  ],

  componentDidMount: function () {
    this.props.ambitus.interval('week');
  },

  render: function () {
    var state = this.props.ambitus.get();
    var weekDays = [];
    var ambitus = this.props.ambitus

    state.range.by('day', m => weekDays.push(m));

    return (
      <section>
        {weekDays.map(day => {
          return <div onClick={ambitus.go.bind(ambitus, day, 'day')}>{day.format('ddd MMM Do')}</div>
        })}
      </section>
    );
  }
});

module.exports = WeekView;
