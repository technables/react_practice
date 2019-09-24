import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PaperProvider>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content title="Title" subtitle="Subtitle" />
        </Appbar.Header>

        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
