var React = require('react');
var {link} = require('react-router');

// var Examples = React.createClass({
//    render: function(){
//      return(
//        <h3>Example components</h3>
//      )
//    }
// });

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center">Example</h1>
    <p>Here are few example location to try out!</p>
    <ol>
      <li>
        <link to='/?location=fresno'>fresno,ca</link>
      </li>
      <li>
        <link to='/?location=Rio'>Rio, Brazil</link>
      </li>
    </ol>
  </div>
  )
};
module.exports =Examples;
