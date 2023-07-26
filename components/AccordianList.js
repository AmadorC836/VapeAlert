import { Text, 
    View, 
    StyleSheet, 
    Image, 
    TouchableWithoutFeedback, 
    Animated, 
    Easing, 
    SafeAreaView,
    ScrollView,
  TouchableOpacity
  } from "react-native";
import React, { useState, useRef } from 'react';
import { PropsWithChildren } from "react";
import Icon from 'react-native-vector-icons'

export default function AccordionItem({ children, title }) {
    const [expanded, setExpanded] = useState(false);

    function toggleItem() {
      setExpanded(!expanded);
    }
    const body = <View style={styles.accordBody}>{children}</View>;
    return (
      <View style={styles.accordContainer}>
        <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
          <Text style={styles.accordTitle}>{title}</Text>
          <Icon
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#bbb"
          />
        </TouchableOpacity>
        {expanded && body}
      </View>
    );
  }

  
