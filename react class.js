<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Class Counter</title>
  <!-- React and ReactDOM via CDN -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    class CounterButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

      handleClick = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1
        }));
      };

      render() {
        return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.handleClick}>Increment</button>
          </div>
        );
      }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CounterButton />);
  </script>
</body>
</html>
