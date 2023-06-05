import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Styles} from '../styles/timer.styles';

const Timer = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const [intervalID, setIntervalId] = useState(0);
  const exceptionText = 'Please enter valid input.....';

  useEffect(() => {
    if (Number(second) === 0) {
      if (Number(minute) === 0) {
        if (Number(hour) === 0) {
          setSecond('');
          clearInterval(intervalID);
          Alert.alert('Timer Done');
        } else {
          setHour(prevHour => (Number(prevHour) - 1).toString());
          setMinute('60');
        }
      } else {
        setMinute(prevMin => (Number(prevMin) - 1).toString());
        setSecond('60');
      }
    }
  }, [hour, intervalID, minute, second]);

  const alert = (type?: string) => {
    if (type === 'hours') {
      Alert.alert(`Please enter ${type} less than or equal to 23`);
    } else {
      Alert.alert(`Please enter ${type} less than or equal to 59`);
    }
  };

  const hoursInput = (hours: string) => {
    try {
      if (Number.isNaN(Number(hours))) {
        throw exceptionText;
      } else if (Number(hours) <= 23 && hours.length <= 2) {
        setHour(hours);
      } else {
        alert('hours');
        setHour('');
      }
    } catch (e: any) {
      Alert.alert(e);
      setHour('');
    }
  };

  const minutesInput = (minutes: string) => {
    try {
      if (Number.isNaN(Number(minutes))) {
        throw exceptionText;
      } else if (Number(minutes) <= 59 && minutes.length <= 2) {
        setMinute(minutes);
      } else {
        alert('minutes');
        setMinute('');
      }
    } catch (e: any) {
      Alert.alert(e);
      setMinute('');
    }
  };

  const secondsInput = (seconds: string) => {
    try {
      if (Number.isNaN(Number(seconds))) {
        throw exceptionText;
      } else if (Number(seconds) <= 59 && seconds.length <= 2) {
        setSecond(seconds);
      } else {
        alert('seconds');
        setSecond('');
      }
    } catch (e: any) {
      Alert.alert(e);
      setSecond('');
    }
  };

  const onClickReset = () => {
    setHour('');
    setMinute('');
    setSecond('');
  };

  const returnId = () => {
    const intervalId = setInterval(() => {
      setSecond(prev => (Number(prev) - 1).toString());
    }, 1000);
    return intervalId;
  };

  const onClickStart = () => {
    if (second || minute || hour) {
      setIntervalId(returnId());
    } else {
      alert('seconds');
    }
  };

  return (
    <View style={Styles.body}>
      <Text style={Styles.headerText}>Timer</Text>
      <View style={[Styles.rowCenter, Styles.marginView]}>
        <Text style={[Styles.commonText, Styles.topTextView]}>Hrs</Text>
        <Text style={[Styles.commonText, Styles.topTextView]}>Mins</Text>
        <Text style={[Styles.commonText, Styles.topTextView]}>Secs</Text>
      </View>
      <View style={[Styles.rowCenter, Styles.marginView]}>
        <TextInput
          placeholder="00"
          keyboardType="number-pad"
          style={[Styles.commonText, Styles.inputView]}
          value={hour}
          onChangeText={hours => hoursInput(hours)}
        />
        <TextInput
          placeholder="00"
          keyboardType="number-pad"
          style={[Styles.commonText, Styles.inputView]}
          value={minute}
          onChangeText={minutes => minutesInput(minutes)}
        />
        <TextInput
          placeholder="00"
          keyboardType="number-pad"
          style={[Styles.commonText, Styles.inputView]}
          value={second}
          onChangeText={seconds => secondsInput(seconds)}
        />
      </View>
      <View style={[Styles.rowCenter, Styles.marginView]}>
        <TouchableOpacity
          style={Styles.commonButtonView}
          onPress={onClickReset}>
          <Text style={[Styles.commonText, Styles.resetView]}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.commonButtonView}
          onPress={onClickStart}>
          <Text style={[Styles.commonText, Styles.startView]}>Start</Text>
        </TouchableOpacity>
      </View>
      {second && (
        <Text
          style={
            Styles.commonText
          }>{`Time Remaining \n${hour} Hrs : ${minute} Mins : ${second} Secs`}</Text>
      )}
    </View>
  );
};

export default Timer;
