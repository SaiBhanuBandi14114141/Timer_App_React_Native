import React from 'react';
import {SafeAreaView} from 'react-native';
// import StopWatch from './screens/stopWatch';
import Timer from './screens/timer';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <StopWatch /> */}
      <Timer />
    </SafeAreaView>
  );
}

export default App;
