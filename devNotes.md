# Development Notes
A collection of workaroud of the issues we have come across while
developing this React Native Project.

### Super expression must either be null or a function, not undefined
This weird error happens because 

> "In the latest version of react native, 
> 'React' and 'Component' is moved from 'react-native' to 'react' module. 
> So you will have to import it using the above way"

workaround:

```React
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

```

source: [ https://stackoverflow.com/questions/37676522/react-native-super-expression-must-either-be-null-or-a-function-not-undefined ]

### Unable to load script from assets index.android.bundle 
This is a bug with React Native that occurs in Android device only, but not
on iOS devices. There are several workarounds, but this one worked for us.
Also this made live testing easier (for some unknown reasons).

```
react-native start

adb reverse tcp:8081 tcp:8081

react-native run-android
```

