import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class TextMovies extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>{this.props.movies}</Text>
      </View>
    )
  }
}

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: "Hello!!",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json'
      );
      let responseJson = await response.json();
      this.setState({movies : responseJson.description});
    } catch (error) {
      //this.setState({movies : error.toString});
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Image source={require('../../assets/8bit.gif')} style={{width: 193, height: 110}}/>
        <Button
          style={{margin: 20}}
          onPress={this.handleClick}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <TextMovies movies={this.state.movies} />
      </View>
    )
  }
}

export class DetailsScreen extends React.Component {
  render() {
    return (
      <Movies />
    );
  }
}
