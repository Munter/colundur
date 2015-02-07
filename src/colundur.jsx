var React = require('react');
var classSet = require('react-classset');
var Ambitus = require('ambitus');
// var moment = require('moment');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

var DayView = require('./views/DayView.jsx');
var WeekView = require('./views/WeekView.jsx');
var MonthView = require('./views/MonthView.jsx');


var Colundur = React.createClass({
  displayName: 'Colundur',

  getInitialState: function () {
    this.ambitus = new Ambitus({
      onChange: result => this.setState(result)
    });

    return this.ambitus.get();
  },

  render: function () {
    var ambitus = this.ambitus;

    return (
      <section>
        <header>
          <nav>
            <button onClick={ambitus.previous.bind(ambitus)}>Previous</button>
            <button onClick={ambitus.next.bind(ambitus)}>Next</button>
            <button onClick={ambitus.today.bind(ambitus)}>Today</button>
          </nav>

          <nav cssStyle={{float: 'right'}}>
            <Link to="day">Day</Link>
            <Link to="week">Week</Link>
            <Link to="month">Month</Link>
          </nav>
        </header>

        <RouteHandler ambitus={this.ambitus} />

        {this.state.range.toDate().join(' - ')}
      </section>
    );
  }
});

var routes = (
  <Route path="/" handler={Colundur}>
    <Route name="day" path="day" handler={DayView}>
      <Route path=":year" handler={DayView}>
        <Route path=":month" handler={DayView}>
          <Route path=":day" handler={DayView} />
        </Route>
      </Route>
    </Route>
    <Route name="week" path="week" handler={WeekView}>
      <Route path=":year" handler={WeekView}>
        <Route path=":week" handler={WeekView} />
      </Route>
    </Route>
    <Route name="month" path="month" handler={MonthView}>
      <Route path=":year" handler={MonthView}>
        <Route path=":month" handler={MonthView} />
      </Route>
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = Colundur;
