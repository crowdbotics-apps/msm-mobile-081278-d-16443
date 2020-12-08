import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10413_4}>
        <View style={styles.View_10413_5}>
          <Text style={styles.Text_10413_5}>Latino</Text>
        </View>
        <View style={styles.View_10413_6} />
        <View style={styles.View_10413_7}>
          <Text style={styles.Text_10413_7}>BARCELONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/6422/148a62d040106614890cb88c8f5708c0"
          }}
          style={styles.ImageBackground_10413_8}
        />
        <View style={styles.View_10413_9}>
          <Text style={styles.Text_10413_9}>La Gringa</Text>
        </View>
        <View style={styles.View_10413_10}>
          <Text style={styles.Text_10413_10}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_11}>
          <Text style={styles.Text_10413_11}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/46dc/a1efc0bb71d27dec361583a2c2c16ed9"
          }}
          style={styles.ImageBackground_10413_12}
        />
        <View style={styles.View_10413_13}>
          <Text style={styles.Text_10413_13}>El Pachuco</Text>
        </View>
        <View style={styles.View_10413_14}>
          <Text style={styles.Text_10413_14}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_15}>
          <Text style={styles.Text_10413_15}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8034/2bd4/015feb7904c77780ada70b6885dab9ed"
          }}
          style={styles.ImageBackground_10413_16}
        />
        <View style={styles.View_10413_17}>
          <Text style={styles.Text_10413_17}>Taco Alto Born</Text>
        </View>
        <View style={styles.View_10413_18}>
          <Text style={styles.Text_10413_18}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_19}>
          <Text style={styles.Text_10413_19}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c5/2f12/6e86a17be1709e8c47a12382cd7f5c44"
          }}
          style={styles.ImageBackground_10413_20}
        />
        <View style={styles.View_10413_21}>
          <Text style={styles.Text_10413_21}>El Tamarindo</Text>
        </View>
        <View style={styles.View_10413_22}>
          <Text style={styles.Text_10413_22}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_23}>
          <Text style={styles.Text_10413_23}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4839/54b9/7590ff9afa251649c8781c0b2bff1345"
          }}
          style={styles.ImageBackground_10413_24}
        />
        <View style={styles.View_10413_25}>
          <Text style={styles.Text_10413_25}>La Taqueria</Text>
        </View>
        <View style={styles.View_10413_26}>
          <Text style={styles.Text_10413_26}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_27}>
          <Text style={styles.Text_10413_27}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b07/af8e/30b8bd1206f844dd30d4c64487c96e8f"
          }}
          style={styles.ImageBackground_10413_28}
        />
        <View style={styles.View_10413_29}>
          <Text style={styles.Text_10413_29}>La Fabrica del Tacos</Text>
        </View>
        <View style={styles.View_10413_30}>
          <Text style={styles.Text_10413_30}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_31}>
          <Text style={styles.Text_10413_31}>€15/person</Text>
        </View>
        <View style={styles.View_10413_32} />
        <View style={styles.View_10413_33} />
        <View style={styles.View_10413_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60dc/78b0/ba45f4e1d386355aa7729816786f4c79"
            }}
            style={styles.ImageBackground_10413_35}
          />
          <View style={styles.View_10413_36} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10413_4: {
    width: 375,
    minWidth: 375,
    height: 920,
    minHeight: 920,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10413_5: {
    width: 179,
    minWidth: 179,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 135
  },
  Text_10413_5: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_6: {
    width: 90,
    minWidth: 90,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 87,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_10413_7: {
    width: 90,
    minWidth: 90,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 91
  },
  Text_10413_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10413_8: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 182,
    resizeMode: "cover"
  },
  View_10413_9: {
    width: 169,
    minWidth: 169,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 335
  },
  Text_10413_9: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_10: {
    width: 169,
    minWidth: 169,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 359
  },
  Text_10413_10: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_11: {
    width: 169,
    minWidth: 169,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 382
  },
  Text_10413_11: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10413_12: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 182,
    resizeMode: "cover"
  },
  View_10413_13: {
    width: 169,
    minWidth: 169,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 335
  },
  Text_10413_13: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_14: {
    width: 169,
    minWidth: 169,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 359
  },
  Text_10413_14: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_15: {
    width: 169,
    minWidth: 169,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 382
  },
  Text_10413_15: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10413_16: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 423,
    resizeMode: "cover"
  },
  View_10413_17: {
    width: 169,
    minWidth: 169,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 576
  },
  Text_10413_17: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_18: {
    width: 169,
    minWidth: 169,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 600
  },
  Text_10413_18: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_19: {
    width: 169,
    minWidth: 169,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 623
  },
  Text_10413_19: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10413_20: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 423,
    resizeMode: "cover"
  },
  View_10413_21: {
    width: 169,
    minWidth: 169,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 576
  },
  Text_10413_21: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_22: {
    width: 169,
    minWidth: 169,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 600
  },
  Text_10413_22: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_23: {
    width: 169,
    minWidth: 169,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 623
  },
  Text_10413_23: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10413_24: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 664,
    resizeMode: "cover"
  },
  View_10413_25: {
    width: 169,
    minWidth: 169,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 817
  },
  Text_10413_25: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_26: {
    width: 169,
    minWidth: 169,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 841
  },
  Text_10413_26: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_27: {
    width: 169,
    minWidth: 169,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 864
  },
  Text_10413_27: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10413_28: {
    width: 175,
    minWidth: 175,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 191,
    top: 664,
    resizeMode: "cover"
  },
  View_10413_29: {
    width: 169,
    minWidth: 169,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 817
  },
  Text_10413_29: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_30: {
    width: 169,
    minWidth: 169,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 841
  },
  Text_10413_30: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_31: {
    width: 169,
    minWidth: 169,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 864
  },
  Text_10413_31: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10413_32: {
    width: 187,
    minWidth: 187,
    height: 229,
    minHeight: 229,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 182
  },
  View_10413_33: {
    width: 188,
    minWidth: 188,
    height: 229,
    minHeight: 229,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    top: 182
  },
  View_10413_34: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 15
  },
  ImageBackground_10413_35: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 25,
    resizeMode: "cover"
  },
  View_10413_36: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2: { height: 920 }
})
