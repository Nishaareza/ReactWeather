var React = require('react');
var {Link} = require('react-router');

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
    <h1 className="text-center page-title">Example</h1>
    <p>Here are few example location to try out!</p>
    <ol>
      <li>
        <Link to='/?location=fresno'>fresno,ca</Link>
      </li>
      <li>
        <Link to='/?location=Rio'>Rio, Brazil</Link>
      </li>
    </ol>
  </div>
  )
};
module.exports =Examples;
