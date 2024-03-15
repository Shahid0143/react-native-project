import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const interestsData = [
  "Trying New Things",
  "Art Galleries",
  "Music",
  "Art",
  "Travel",
  "Food",
  "Fashion",
  "Fitness",
  "Books",
  "Movies",
  "Online Shopping",
  "Indoor Activities",
  "Climbing",
  "VR Room",
  "Astrology",
  "Choir",
  "Tarot",
  "Theater",
  "Tea",
  "Pride",
  "Pimms",
  "Blogging",
  "Hockey",
  "Road Trip",
  "Sake",
  "Virtual Reality",
  "League of Legends",
];

export default function App() {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestSelection = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      if (selectedInterests.length < 5) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };
  const handleNext = () => {
    //handle logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Interests</Text>
      <Text style={styles.paragraph}>
        Let everyone know what you're passionate about by adding it to your
        profile
      </Text>
      <View style={styles.interestsContainer}>
        {interestsData.map((interest, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.interestButton,
              selectedInterests.includes(interest) &&
                styles.selectedInterestButton,
            ]}
            onPress={() => handleInterestSelection(interest)}
          >
            <Text style={styles.interestButtonText}>{interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => handleNext()}>
        <LinearGradient
          colors={["#020024", "#6F4990", "#00D4FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          <Text style={styles.nextButtonText}>
            {selectedInterests.length === 5
              ? "Continue"
              : `Continue (${selectedInterests.length}/5)`}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 30,
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 20,
    width: 270,
  },
  paragraph: {
    width: 270,
    marginBottom: 20,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  interestButton: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 19, // for android
  },
  selectedInterestButton: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  interestButtonText: {
    color: "#333",
  },
  nextButton: {
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  gradientBackground: {
    borderRadius: 50,
    padding: 10,
    paddingLeft: 80,
    paddingRight: 80,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
