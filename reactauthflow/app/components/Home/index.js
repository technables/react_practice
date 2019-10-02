import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';

const images = [
  {
    key: 1,
    name: 'Nathan Anderson',
    image: require('../../images/1.jpg'),
  },
  {
    key: 2,
    name: 'Jamison McAndie',
    image: require('../../images/2.jpg'),
  },
  {
    key: 3,
    name: 'Alberto Restifo',
    image: require('../../images/3.jpg'),
  },
  {
    key: 4,
    name: 'John Towner',
    image: require('../../images/4.jpg'),
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#ececec',
          flex: 1,
          height: 100,
          width: '100%',
        }}>
        <Text>This is home page</Text>
        <ScrollView
          contentContainerStyle={{paddingVertical: 20, alignItems: 'center'}}>
          {images.map(e => (
            <View style={{height: 250, flex: 1, flexDirection: 'column'}}>
              <Text style={{marginBottom: 0, color: '#000', flex: 1, height:50}}>
                Photo by {e.name}.
              </Text>
              <Image source={e.image} style={{height: 200, flex: 4}} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
