import React from 'react';
import { Animated } from 'react-native';

class Fade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnimation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { fadeAnimation } = this.state;
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    const { fadeAnimation } = this.state;
    const { style, children } = this.props;
    return (
      <Animated.Text
        style={{
          ...style,
          opacity: fadeAnimation,
        }}
      >
        {children}
      </Animated.Text>
    );
  }
}

export default Fade;
