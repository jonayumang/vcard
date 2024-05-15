import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const portfolioData = {
  profile: {
    name: 'Jona P. Yumang',
    title: 'Bachelor of Science in Information Technology',
    profileImage: require('./assets/profile-pic.png'),
    about:
      "I am a normal college student loves reading wattpad fiction stories and hardcopy of books",
    contact: {
      email: 'yumangjona18@gmail.com',
      phoneNumber: '09457837071',
    },
  },
  hobbies: [
    {
      id: 1,
      title: 'Wattpad',
      description:'wattpad app is give you freedom for bored',
      image: require('./assets/hobby1.png'),
      link: 'https://your-hobby1-link.com',
    },
  ],
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerBackground}
          source={require('./assets/top-bg.png')}
        />
        <Image
          style={styles.profileImage}
          source={portfolioData.profile.profileImage}
        />
        <Text style={styles.name}>{portfolioData.profile.name}</Text>
        <Text style={styles.title}>{portfolioData.profile.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>{portfolioData.profile.about}</Text>
      </View>

      <View style={{ ...styles.section, ...styles.socialSection }}>
        <TouchableOpacity onPress={() => alert('facebook')}>
          <View style={styles.socialIconContainer}>
            <Ionicons name="logo-facebook" style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('LinkedIn')}>
          <View style={styles.socialIconContainer}>
            <Ionicons name="logo-instagram" style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('LinkedIn')}>
          <View style={styles.socialIconContainer}>
            <Ionicons name="logo-twitter" style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('LinkedIn')}>
          <View style={styles.socialIconContainer}>
            <Ionicons name="logo-github" style={styles.socialIcon} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobbies</Text>
        {portfolioData.hobbies.map((hobby) => (
          <View key={hobby.id} style={styles.hobby}>
            <Text style={styles.hobbyTitle}>{hobby.title}</Text>
            <Image
              style={styles.hobbyImage}
              source={hobby.image}
            />
            <Text style={styles.hobbyDescription}>{hobby.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.contact}>
          Email: {portfolioData.profile.contact.email}
        </Text>
        <Text style={styles.contact}>
          Contact Number: {portfolioData.profile.contact.phoneNumber}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: 250,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    bottom: -50,
    borderWidth: 3,
    borderColor: 'black',
    zIndex: 1,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 14,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
  },
  socialSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  socialIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: 28,
    color: 'white',
  },

  hobby: {
    marginBottom: 20,
  },
  hobbyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  textAlign: 'center'
  },
  hobbyImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  hobbyDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  contact: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  },
});
