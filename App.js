/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar
} from "react-native";

import oliverTree from "./images/olivertree.jpg";

const concertStartDate = new Date(2019, 8, 15, 20);

class App extends React.Component {
  state = {
    artistName: "Oliver Tree",
    countdown: concertStartDate,
    currentTime: new Date()
  };

  clock = null;

  componentDidMount() {
    this.clock = this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick = () =>
    setInterval(() => this.setState({ currentTime: new Date() }), 1000);

  parseTime = () => {
    const { currentTime } = this.state;
    const totalTime = concertStartDate.getTime() - currentTime.getTime();

    const days = Math.floor(totalTime / 1000 / 60 / 60 / 24);
    const daysOffset = totalTime - days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(daysOffset / 1000 / 60 / 60);
    const hoursOffset = daysOffset - hours * (1000 * 60 * 60);

    const minutes = Math.floor(hoursOffset / 1000 / 60);
    const minutesOffset = hoursOffset - minutes * (1000 * 60);

    const seconds = Math.floor(minutesOffset / 1000);

    return (
      <>
        <Text style={styles.number}>{days} | </Text>
        <Text style={styles.number}>{hours} | </Text>
        <Text style={styles.number}>{minutes} | </Text>
        <Text style={styles.number}>{seconds}</Text>
      </>
    );
  };

  render() {
    const { artistName, countdown } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.scrollView}>
            <Text style={styles.headline}>Concert Countdown</Text>
            <View style={styles.center}>
              <Image style={styles.artistImage} source={oliverTree} />
            </View>
            <View style={styles.center}>
              <Text style={styles.artistName}>{artistName}</Text>
              <View>
                <Text style={styles.countdown}>{this.parseTime()}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 40,
    textAlign: "center",
    color: "white"
  },
  scrollView: {
    height: "100%",
    width: "100%",
    // backgroundColor: "#0f83ff"
    backgroundColor: "rgb(45,45,45)"
  },
  container: {
    height: "100%",
    width: "100%"
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    fontSize: 30,
    color: "white",
    width: "100%"
  },
  artistImage: { margin: 15, width: 300, height: 300, borderRadius: 200 },
  artistName: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 25,
    color: "white",
    width: "100%"
  },
  countdown: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
