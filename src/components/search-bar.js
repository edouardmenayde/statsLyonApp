/**
 * SearchBar
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Platform,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  BackAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    shadowRadius   : 5,
    shadowOpacity  : 0.7,
    elevation      : 2,
    backgroundColor: 'hsl(0, 0%, 92%)'
  },
  nav      : {
    ...Platform.select({
      android: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth
      }
    }),
    flexDirection : 'row',
    justifyContent: 'space-around',
    alignItems    : 'center'
  },
  input    : {
    fontSize: 20,
    flex    : 1
  },
  icon     : {
    padding: 10
  }
});

export class SearchBar extends Component {

  static propTypes = {
    placeholder  : PropTypes.string,
    handleSearch : PropTypes.func.isRequired,
    handleFocus  : PropTypes.func.isRequired,
    handleUnfocus: PropTypes.func.isRequired
  };

  static defaultProps = {
    placeholder: 'Search anything...'
  };

  constructor(props: any) {
    super(props);

    this.state = {
      input    : null,
      hideBack : true,
      showClear: false
    };

    this.onBack        = this.onBack.bind(this);
    this.onClear       = this.onClear.bind(this);
    this._clearInput   = this._clearInput.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
    this._onFocus      = this._onFocus.bind(this);
  }

  componentWillMount() {
    this.hardwareBackPress       = BackAndroid.addEventListener('hardwareBackPress', this._hardwareBackPress.bind(this));
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
  }

  componentWillUnmount() {
    this.hardwareBackPress.remove();
    this.keyboardDidShowListener.remove();
  }

  _hardwareBackPress() {
    // @TODO: fix it
    const {handleUnfocus} = this.props;
    handleUnfocus();
  }

  _keyboardDidShow() {
    const {handleFocus} = this.props;
    handleFocus();
  }

  onBack() {
    const {handleClear} = this.props;

    this.hideBack();
    this._clearInput();

    handleClear();
  }

  onClear() {
    const {handleClear} = this.props;

    this._clearInput();
    handleClear();
  }

  _onFocus() {
    const {handleFocus} = this.props;
    handleFocus();
  }

  _onChangeText(input) {
    const {handleSearch} = this.props;

    this.setState({input});

    if (input.length > 0) {
      this.showBack();
      this.showClear();
    }
    else {
      this.hideClear();
      this.hideBack();
    }

    if (handleSearch) {
      handleSearch(input);
    }
  }

  hideBack() {
    this.setState({
      hideBack: true
    });
  }

  showBack() {
    this.setState({
      hideBack: false
    });
  }

  hideClear() {
    this.setState({
      showClear: false
    });
  }

  showClear() {
    this.setState({
      showClear: true
    });
  }

  _clearInput() {
    this.setState({
      input: ''
    });
  }

  render() {
    const {placeholder}                = this.props;
    const {input, hideBack, showClear} = this.state;

    return (
      <Animated.View style={styles.container}>
        <View style={styles.nav}>
          {
            !hideBack &&
            <TouchableOpacity onPress={this.onBack}>
              <Icon name="arrow-back" size={28} style={styles.icon}/>
            </TouchableOpacity>
          }
          {
            hideBack &&
            <TouchableOpacity>
              <Icon name="search" size={28} style={styles.icon}/>
            </TouchableOpacity>
          }
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={input}
            underlineColorAndroid='transparent'
            returnKeyType='search'
            onChangeText={(input) => this._onChangeText(input)}
            onFocus={() => this._onFocus()}
            onSubmitEditing={Keyboard.dismiss}
          />
          {
            showClear &&
            <TouchableOpacity onPress={this.onClear}>
              <Icon name="close" size={24} style={styles.icon}/>
            </TouchableOpacity>
          }
        </View>
      </Animated.View>
    );
  }
}
