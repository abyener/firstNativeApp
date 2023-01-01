import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const {textStyling, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyling}>Cars</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },

  viewStyle: {
    backgroundColor: 'gainsboro',
    height: 70,
    justifyContnet: 'center',
    alignItems: 'center',
    paddingTop: 35,
  },
};

export default Header;
