import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';
import {connect, setCurrent} from './Store';


const WallThree = (props) => {
  const viewProps = () => {
    console.log(props)
  }
  if (!props.works.wall3) {
    viewProps()
    return (
      <View style={styles.wrapper}>
      </View>
    );
  }
    return (
      <View style={styles.wrapper}>
        {props.works.wall3.user_selections.map( work => (
           <Image style={{height: work.height/1, width: work.width/1, position: 'absolute', top: work.y_position/1, left: work.x_position/1}} source={{uri: 'https://cors-anywhere.herokuapp.com/' + work.artwork.image}} />
        )
        )}
        {props.works.wall3.captions.map( caption => (
           <Text style={{height: caption.height/1, width: caption.width/1, position: 'absolute', top: caption.y_position/1, left: caption.x_position/1, fontSize: caption.title ? 30 : 15, fontWeight: caption.title ? '500' : '100', fontFamily: 'Helvetica', color: 'black'}}>
           {caption.text}
           </Text>
        )
        )}
        {viewProps()}
      </View>
    );
  }

const styles = StyleSheet.create({
  wrapper: {
    width: 1249,
    height: 800,
    backgroundColor: '#fff',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});

const ConnectedWallThree = connect(WallThree);
export default ConnectedWallThree;
