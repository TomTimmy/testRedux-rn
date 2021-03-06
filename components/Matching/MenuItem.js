import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import logos from "../../images";
// import { connect } from "react-redux";
// import { addMenu, menusStore, menusSlice } from "../../redux/Order/orderStore";
// ! 아래는 redux 코드임
import { useSelector, useDispatch } from "react-redux";
import { setStore, addMenu } from "../../redux/orderSlice";

const MenuItem = ({ menuInfo, storeInfo }) => {
  // menuInfo.image =
  //   "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bd0e340-f08c-41e4-98f3-dbc9904abe8e/Logo_72dpi-01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210906T080723Z&X-Amz-Expires=86400&X-Amz-Signature=9cfe0ac4ac1b99ad3e195573772038d7f328eaf41f7ecd2e31c1381569afe07e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Logo_72dpi-01.png%22";
  const storeName = useSelector((state) => state.orderReducer);
  console.log(storeName);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.root}
      // todo:
      // onPress={
      //   // ? 메뉴 선택시, 장바구니에 추가. navigation ㄴㄴ
      //   () =>
      //     navigation.navigate("SetMatchingTimeScreen", {
      //       store: menuInfo.store,
      //       price: menuInfo.price,
      //       minPrice: menuInfo.minPrice,
      //       delivTip: menuInfo.delivTip,
      //       image: menuInfo.image, //! menuInfo.image 이다. 즉, 이미지의 uri 값을 옮기는 것이다!!
      //     })
      // }

      // ? 일단 다음 스크린으로 이동
      onPress={() => {
        navigation.navigate("SetMatchingTimeScreen", {
          menuInfo,
          storeInfo,
        });
      }}
    >
      <Button
        title="리덕스 테스트"
        onPress={() => {
          dispatch(setStore("최고당"));
          dispatch(addMenu(menuInfo));
        }}
      />

      <Image
        style={styles.image}
        source={
          logos.halfLogo
          // {uri: menuInfo.image}
        }
      />
      <View style={styles.rightContainer}>
        {/* 메뉴 */}
        <Text style={styles.title} numberOfLines={1}>
          {menuInfo.menu} | {menuInfo.minPrice}원
        </Text>

        {/* 메뉴 디테일... */}
        <Text style={styles.title} numberOfLines={1}>
          {/* //? JS Magic! menuInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {/* //! menuInfo.menuDetail 데이터베이스 추후 필요. */}
          {menuInfo.menuDetail && (
            <Text style={styles.title}> {menuInfo.menuDetail}</Text>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  image: {
    marginLeft: 3,
    flex: 1,
    height: "auto",
    resizeMode: "contain", //? Show whole Image (with white space)
  },
  rightContainer: {
    padding: 10,
    backgroundColor: "white",
    // justifyContent: "flex-end",
    flex: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
});

// const mapDispatchToProps = (dispatch, ownProps) => {
//   // console.log("mapDispatchToProps", Item);
//   return {
//     // ? Your mapDispatchToProps functions are expected to return an object.
//     // ? Each fields of the object should be a function,
//     // ? calling which is expected to "dispatch an action to the store".
//     // addMenu: () => dispatch(addMenu()),
//   };
// };
// export default connect(null, mapDispatchToProps)(MenuItem);

export default MenuItem;
