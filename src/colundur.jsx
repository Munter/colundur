var React = require('react');
var classSet = require('react-classset');
var Ambitus = require('ambitus');
// var moment = require('moment');

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

          <nav>
            {['day', 'week', 'month'].map(interval => {
              return (<button
                onClick={ambitus.interval.bind(ambitus, interval)}
                className={classSet({ 'is-active': this.state.interval === interval })}>
                  {interval}
                </button>);
            })}
          </nav>
        </header>

        <p>This is not a calendar yet.</p>
        {this.state.range.toDate().join(' - ')}
      </section>
    );
  }
});

module.exports = Colundur;
