import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import { Card2 } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          { <Block flex>
            <Text>Categories</Text>
            <Block flex row>
            <Card />
            <Card />
            <Card />
            <Card />
          </Block>
          <Text>Popular Brands</Text>
          <Block flex row>
            <Card />
            <Card />
            <Card />
            <Card />
          </Block>
          <Block flex row>
            {/* <Card2/> */}
            <Text>Top Deals</Text>
            
          </Block>
          <Block flex row><Text style={styles.topdeals}> top d</Text></Block>
          

          </Block>
          
            
          }
        {/* <Block flex>
          <Card item={articles[0]} horizontal  />
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block> */}
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  topdeals: {
    backgroundColor: 'grey',
    fontSize: 100,
    color: 'grey'
    ,
  }
});

export default Home;
