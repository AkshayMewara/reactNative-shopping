import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Pressable,
  TouchableHighlight
} from 'react-native';


const Item = ({source, price, link}) => (
  <View>
    {/* <TouchableHighlight onPress={()=>Linking.openURL(link)}> */}
    <Image source={{uri: source}} style={styles.itemImage} resizeMode="cover" />
    <Text style={styles.itemText}>{price}</Text>
    {/* </TouchableHighlight> */}
  </View>
);

const ItemText = ({name}) => (
  <View style={{marginHorizontal: 7, marginVertical: 2}}>
    <TouchableOpacity>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 18,
      
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  </View>
);

const Home = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      uri: 'https://m-cdn.phonearena.com/images/article/137621-wide-two_940/Leaked-OnePlus-10-Pro-pricing-is-a-relief-for-OG-fans-put-off-by-higher-prices.webp?1641486432',
      price: 'starting from ₹89999.00',
      link : "https://www.croma.com/apple-iphone-11-64gb-rom-4gb-ram-mhdf3hn-a-purple-/p/230110?utm_source=google&utm_medium=ps&utm_campaign=sok_performance_max_allcategories&gclid=CjwKCAjw14uVBhBEEiwAaufYxxSyOR_uBXTPNetRLbfwSMDjgqHrYMgXSYkM_g9hNzwm92SGhPv2BxoCUVAQAvD_BwE"
    },
    {
      id: 2,
      uri: 'https://images.newindianexpress.com/expressdeals/assets/images/content/2021/06/24/original/washing-machine-image2.jpg',
      price: 'starting from ₹17000.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    },
    {
      id: 3,
      uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-modelheader-series3-202003?wid=1602&hei=960&fmt=jpeg&qlt=90&.v=1584577171344',
      price: 'starting from ₹19999.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    },
    {
      id: 4,
      uri: 'https://i.dailymail.co.uk/1s/2021/02/03/19/38846596-9211339-image-a-5_1612380357726.jpg',
      price: 'starting from ₹799.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    },
    {
      id: 5,
      uri: 'https://kenbrooksolar.com/wp-content/uploads/Solar-Products.jpg',
      price: 'starting from ₹3400.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    },
    {
      id: 6,
      uri: 'https://photoscissors.com/images/samples/2-before.jpg',
      price: 'starting from ₹1999.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    },
    {
      id: 7,
      uri: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1505286851NARIYAL%20BISCUITS%20300%20GM%20400-500.png',
      price: 'starting from ₹1999.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    
    },
    {
      id: 8,
      uri: 'https://www.litmusbranding.com/ast/uploads/2018/10/syed-package-design.jpg',
      price: 'starting from ₹1999.00',
      link : "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742?pid=MOBFWQ6B7KKRXDDS&lid=LSTMOBFWQ6B7KKRXDDSMBIFYZ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=fa63a2bb-b92f-4ebc-b668-a44af4dc6a2d.MOBFWQ6B7KKRXDDS.SEARCH&ppt=None&ppn=None&ssid=8qtl1p5sj40000001654855058200"
    },
  ];

  const CATEGORY = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Electronics'},
    {id: 3, name: 'Fashion'},
    {id: 4, name: 'Necessary'},
    {id: 5, name: 'Laptops'},
    {id: 6, name: 'Cars'},
    {id: 7, name: 'Air Purifiers'},
    {id: 8, name: 'Fans'},
    {id: 9, name: 'Lights'},
  ];

  const renderItem = ({item}) => <Item source={item.uri} price={item.price} link={item.link}/>;

  const horizontalItem = ({item}) => <ItemText name={item.name} />;

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <TextInput style={styles.textInput} placeholder="Search" />
    
      {/* <Text style={{margin:10}}>Sale is Live !</Text> */}

      <Image
        style={styles.image}
        source={{
          uri: 'https://image.cnbcfm.com/api/v1/image/102508132-RTR4SE7N.jpg?v=1529451576&w=740&h=416&ffmt=webp',
        }}
      />

      {/* <Button onPress={()=>navigation.navigate('Notifications')} title="click" /> */}
      <Text style={styles.text}>Hurry up sale ends in two days</Text>
      <FlatList
        data={CATEGORY}
        renderItem={horizontalItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* <ScrollView horizontal >
           {CATEGORY.map(item => <Text style={{padding : 10, color:"black"}} key={item.id}>{item.name}</Text> )}
           </ScrollView> */}

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 200,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 380,
    height: 200,
  },
  itemText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    backgroundColor: 'white',
    width: 350,
    height: 40,
    margin: 10,
  },
  text: {
    margin: 5,
  },
});
export default Home;
